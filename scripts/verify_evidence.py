"""
verify_evidence.py

Reads a coded-rows CSV and confirms every `evidence` value is a literal
substring of the source JD body (after whitespace normalisation).

A row passes if its evidence quote can be found in the body of the JD named
in `jd_filename` after both strings have had internal whitespace collapsed
to single spaces and outer whitespace stripped. Curly/straight quote
variations and en-dash / em-dash / hyphen variations are NOT normalised
away. The intent is to be strict.

Inputs:
  --csv PATH       coded rows CSV (must have columns: jd_filename, evidence)
  --jds-dir PATH   folder of JD source files (default: jds/)
  --pdf-text-dir PATH    folder of hand-transcribed PDF text files for
                         image-only PDFs (default: scripts/pdf_text/)
                         Filename rule: <pdf_basename>.txt

Outputs:
  Per-row PASS/FAIL line on stdout, plus a summary.
  Exit code 0 if all rows pass, 1 otherwise.

The verifier never edits the CSV. It is read-only.
"""
from __future__ import annotations

import argparse
import csv
import re
import sys
from pathlib import Path
from typing import Optional

try:
    from docx import Document  # python-docx
except ImportError:
    Document = None  # type: ignore

try:
    import fitz  # PyMuPDF
except ImportError:
    fitz = None  # type: ignore


WS = re.compile(r"\s+")


def normalise(s: str) -> str:
    """Collapse internal whitespace to single spaces and strip ends."""
    return WS.sub(" ", s).strip()


def read_docx_body(path: Path) -> str:
    """Return the full body text of a .docx file (paragraphs + tables).

    Some files in the corpus carry a .docx extension but are actually
    plain text or markdown. If python-docx can't open the file as an
    OOXML package, fall back to reading raw bytes as UTF-8 text.
    """
    if Document is None:
        raise RuntimeError("python-docx is not installed")
    try:
        doc = Document(str(path))
    except Exception:
        # Fallback: treat as plain text masquerading as .docx
        return path.read_text(encoding="utf-8", errors="replace")
    chunks: list[str] = []
    for p in doc.paragraphs:
        if p.text:
            chunks.append(p.text)
    for tbl in doc.tables:
        for row in tbl.rows:
            for cell in row.cells:
                for p in cell.paragraphs:
                    if p.text:
                        chunks.append(p.text)
    return "\n".join(chunks)


def read_pdf_body(path: Path, pdf_text_dir: Path) -> str:
    """Return the full body text of a .pdf file.

    If the PDF has no embedded text (image-only scan), fall back to the
    hand-transcribed text file at pdf_text_dir/<stem>.txt.
    """
    if fitz is None:
        raise RuntimeError("PyMuPDF is not installed")
    doc = fitz.open(str(path))
    extracted = "\n".join(page.get_text() for page in doc)
    if extracted.strip():
        return extracted
    # Fall back to hand-transcribed text
    fallback = pdf_text_dir / (path.stem + ".txt")
    if not fallback.exists():
        raise RuntimeError(
            f"PDF '{path.name}' has no text layer and no fallback at {fallback}"
        )
    return fallback.read_text(encoding="utf-8")


def load_jd_body(filename: str, jds_dir: Path, pdf_text_dir: Path) -> str:
    """Resolve and read a JD source, returning its full body text."""
    path = jds_dir / filename
    if not path.exists():
        raise FileNotFoundError(f"JD not found: {path}")
    suffix = path.suffix.lower()
    if suffix == ".docx":
        return read_docx_body(path)
    if suffix == ".pdf":
        return read_pdf_body(path, pdf_text_dir)
    raise RuntimeError(f"Unsupported file type: {path.suffix}")


def verify_csv(
    csv_path: Path,
    jds_dir: Path,
    pdf_text_dir: Path,
    verbose: bool = False,
) -> tuple[int, int, list[dict]]:
    """Verify every row in csv_path. Returns (passed, failed, failures)."""
    cache: dict[str, str] = {}
    passed = 0
    failed = 0
    failures: list[dict] = []

    with csv_path.open(newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for i, row in enumerate(reader, start=2):  # row 1 is header
            filename = row.get("jd_filename", "").strip()
            evidence = row.get("evidence", "")
            if not filename or evidence is None:
                failed += 1
                failures.append({
                    "row": i,
                    "jd_filename": filename,
                    "code": row.get("code", ""),
                    "reason": "missing jd_filename or evidence",
                    "evidence": evidence,
                })
                continue
            if filename not in cache:
                try:
                    cache[filename] = normalise(
                        load_jd_body(filename, jds_dir, pdf_text_dir)
                    )
                except Exception as e:
                    failed += 1
                    failures.append({
                        "row": i,
                        "jd_filename": filename,
                        "code": row.get("code", ""),
                        "reason": f"could not load JD: {e}",
                        "evidence": evidence,
                    })
                    continue
            body = cache[filename]
            quote = normalise(evidence)
            if quote in body:
                passed += 1
                if verbose:
                    print(f"PASS row {i:>4}  {filename}  {row.get('code','')}")
            else:
                failed += 1
                # Find a short matching window to help diagnose
                preview = quote[:80]
                failures.append({
                    "row": i,
                    "jd_filename": filename,
                    "code": row.get("code", ""),
                    "reason": "evidence not found in JD",
                    "evidence": evidence,
                    "evidence_preview": preview,
                })
                if verbose:
                    print(f"FAIL row {i:>4}  {filename}  {row.get('code','')}")
                    print(f"     QUOTE: {preview!r}")

    return passed, failed, failures


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--csv", required=True, type=Path)
    ap.add_argument(
        "--jds-dir",
        type=Path,
        default=Path(__file__).resolve().parent.parent / "jds",
    )
    ap.add_argument(
        "--pdf-text-dir",
        type=Path,
        default=Path(__file__).resolve().parent / "pdf_text",
    )
    ap.add_argument("--verbose", action="store_true")
    args = ap.parse_args()

    if not args.csv.exists():
        print(f"CSV not found: {args.csv}", file=sys.stderr)
        return 2

    passed, failed, failures = verify_csv(
        args.csv, args.jds_dir, args.pdf_text_dir, verbose=args.verbose
    )
    total = passed + failed
    pct = (passed / total * 100) if total else 0.0

    print()
    print("=" * 70)
    print(f"Verified {total} rows: {passed} pass, {failed} fail ({pct:.1f}% pass)")
    print("=" * 70)
    if failures:
        print(f"\nFailures ({len(failures)}):")
        for f in failures:
            print(f"  row {f['row']:>4}  {f['jd_filename']}  {f['code']}  {f['reason']}")
            if "evidence_preview" in f:
                print(f"          quote: {f['evidence_preview']!r}")

    return 0 if failed == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
