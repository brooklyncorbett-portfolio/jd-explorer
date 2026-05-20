# JD Coding Re-run — Handover Report

Date: 2026-05-19. Replaces the previous coded_jds.csv which had 13% fabricated quotes per the audit.

## What is here

- `analysis/coded_data/coded_jds.csv` — the new coded dataset. 966 rows across 56 in-scope JDs. Every evidence quote is a verbatim substring of the source JD body after whitespace normalisation.
- `analysis/coded_data/coded_jds_v1_audited.csv` — the old file (789 rows). Kept for reference. Should be removed once the downstream Quarto and app pipelines are pointed at the new file.
- `analysis/coded_data/coded_jds_v2_wip.csv` — identical to coded_jds.csv. Was my working file during the rerun; safe to delete.
- `scripts/verify_evidence.py` — the audit tool. Re-runs the substring check against any coded CSV.
- `scripts/pdf_text/Supervisor_Rev_2_0625.txt` — hand-transcribed text of the BQC Quarries PD, which is image-only. The verifier uses this file as the source-of-truth for any row whose `jd_filename` is the BQC PDF.

## Scope changes from v1

- **Maintenance_Supervisor.docx (Redpath Mining)** is now out of scope. The role is at Olympic Dam in South Australia, not Queensland. data.json currently has it as in-scope with no flag. Suggest adding an entry to `scripts/overrides.json` to flag this JD as out-of-scope. 24 rows that v2 would have produced for this JD were dropped.

The effective in-scope corpus is now **56 JDs**:
- Coal Surface: 29
- Coal UG: 3
- Minerals Surface: 12
- Minerals UG: 5 (was 6 before dropping Olympic Dam)
- Quarry: 7

## Top-line numbers

| Metric | v1 (audited) | v2 (this run) |
|---|---|---|
| Total rows | 789 | 966 |
| Verified verbatim rows | 526 (67%) | 966 (100%) |
| Fabricated quotes | 102 (13%) | 0 |
| Paraphrased / partial | 141 (18%) | 0 |
| JDs covered | 57 | 56 |
| Avg rows per JD | 13.8 | 17.2 |

The total row count is higher than v1 because v2 codes multi-coded sentences thoroughly. The audit-pass rate is the headline win.

## Verifier pass rate

`python3 scripts/verify_evidence.py --csv analysis/coded_data/coded_jds.csv`

Output: `Verified 966 rows: 966 pass, 0 fail (100.0% pass)`

Run this any time the CSV changes. It will exit non-zero on any failure.

## Coverage by sector

| Sector | Rows | JDs |
|---|---|---|
| Coal - Surface | 481 | 29 |
| Minerals - Surface | 220 | 12 |
| Quarry | 138 | 7 |
| Minerals - Underground | 102 | 5 |
| Coal - Underground | 25 | 3 |

## Required flag distribution

| Flag | Count | Share |
|---|---|---|
| not_specified | 889 | 92% |
| required | 46 | 5% |
| desirable | 31 | 3% |

The required-flag rate is low because most JDs do not use explicit "Essential" / "Must" wording outside qualifications lists. Default behaviour per the brief is `not_specified` when uncertain.

## Confidence distribution

| Confidence | Count |
|---|---|
| high | 718 |
| medium | 248 |
| low | 0 |

No `low` rows were emitted. The brief's rule is that low-confidence calls should usually be skipped rather than coded.

## Codes with zero rows

These nine codes from the codebook produced no rows across the entire corpus. They are candidates for a codebook v1.1 review.

| Code | Label | Why zero |
|---|---|---|
| E14 | Multi-shift / continuous roster experience | JDs mention rosters but not as experience requirements. Pattern is "you will work 7/7" not "you must have 7/7 experience". |
| SP1 | SSE (coal) | No JD explicitly appoints to the SSE role. Most JDs that mention SSE describe a "Reports to SSE" reporting line, which is not an appointment. |
| SP3 | Underground Mine Manager | No JD in scope appoints to UMM. |
| SP4 | ERZ Controller / Deputy | Development Supervisor.docx mentions "preparing for authorisation as a Deputy" but the role is a pathway, not an appointment. |
| SP5 | Ventilation Officer | Not appointed by any JD in scope. |
| SP6 | Quarry SSE | Several quarry JDs name "Reportable to Site Senior Executive" but none appoint the supervisor as SSE. |
| SP7 | Other named statutory position | None named explicitly. |
| SP8 | Statutory UG Shift Supervisor (minerals/quarry) | Brightstar JD requires the ticket but does not explicitly appoint to the position. Per the strict brief rule, ticket alone is not an appointment. The codebook lists Brightstar as the canonical SP8 example, so this gap is worth a codebook review. |
| SP9 | Shotfirer | Goonyella Blast Supervisor JD requires Shotfirer accreditation but does not explicitly appoint to the Shotfirer role. |

The brief's rule for SP codes is "explicit appointment only, never ticket-implied". Applying this rule consistently produces sparse SP coverage. Only SP2 (OCE) appears, from Golding OCE Kogan, which is the one JD with explicit appointment language ("Exercise statutory duties as an Open Cut Examiner (OCE)").

If the analysis intent is to track "JDs touching statutory positions in any way", consider either (a) loosening the SP rule to count ticket requirements as appointment-by-implication, or (b) adding a parallel column flag like `statutory_relevance` that captures the lighter signal. Codebook decision either way.

## Rules I applied for ambiguous calls

These are the calls I made during coding, locked in with you during the run. Documenting here so they are reproducible.

**Sector wins for supervisor competency clusters.** Whether a JD writes "S123", "S1, S2, S3", "G189", "QMS123", or any combination, the cluster code is decided by the JD's sector (per data.json):
- Coal Surface → Q2
- Coal UG → Q3
- Minerals or Quarry → Q5

This applies regardless of whether the JD's wording matches the cluster the codebook strictly defines for each Q-code. Confidence is dropped to medium when the JD's wording and the sector's cluster don't literally match.

**SP codes require explicit appointment.** Following the brief's strict reading, not the codebook's looser "explicitly named" wording. Ticket requirements alone don't trigger SP rows. Result: SP coverage is sparse (only SP2 has a row).

**Operator-level tasks are not coded.** Some JDs (notably BQC Quarries) list operator tasks the supervisor performs personally (operate pugmill, water truck, pump maintenance). These are not coded — the codebook is supervisor-focused and these don't map cleanly.

**Multi-coded sentences get multiple rows.** When one sentence covers two or three codes, I emit one row per code with the same evidence quote on each. The verifier treats each row independently.

**Same code from multiple quotes in one JD is allowed.** I don't deduplicate at the row level within a JD, because downstream frequency analysis counts unique (JD, code) pairs and the multiple-row signal preserves which sentences the code came from.

**"highly regarded", "preferred", "advantageous"** → desirable. **"must have", "essential", "required", "mandatory"** → required. Everything else → not_specified.

## Plain-text-as-.docx files

Eight JDs in the corpus are pandoc markdown exports that carry a .docx extension but are actually UTF-8 text with `**bold**` markers. Identified during this run:

- BHP Maintenance.docx
- BHP_lead_supervisor.docx
- MacKellar Leading hand.docx
- MacKellar__Maintenance_Supervisor.docx
- Maintenance_Supervisor.docx (Olympic Dam, dropped)
- Projects_Crew_Supervisor.docx
- Quarry_Supervisor_NITRO_CRUSHING.docx
- Thiess_supervisor_mining.docx
- Underground_Shift_Supervisor.docx

The verifier handles these via a fallback that reads the file as UTF-8 text when python-docx fails. Evidence quotes from these JDs may contain backslash-apostrophe (`BHP\'s`) or markdown bold markers (`**word**`) because that is what is literally in the source. Cosmetic cleanup for the report can be applied at the rendering layer if needed; the audit trail is intact.

## Specific judgement calls in the dataset

These are rows where the coding decision required interpretation. All confirmed with you during the run.

- **BHP.docx** Q9 + Q10 from "trade certificate / tertiary qualification in Telecommunications, Electrical, Electronics or similar discipline" — coded both per the OR-clause rule, even though "engineering" isn't named.
- **BHP.docx** Q6 from the "Queensland legislated coal mine workers' health assessment" line, which sits in the "About Our Process" section. Coded because the codebook explicitly lists ResHealth as Q6 and the line is specific.
- **Foxleigh Mine.docx** title is "Mining Supervisor / OCE" but the body frames OCE as a qualification ("Mining Supervisor with OCE qualifications"). No SP2; Q4 only.
- **Golding OCE Kogan.docx** has explicit "Exercise statutory duties as an Open Cut Examiner (OCE)" in the responsibilities. SP2 coded.
- **Stellar Recruitment.docx** is a Field Supervisor for an exploration company, not operational mining. data.json keeps it as Mining Supervisor, but the role content is genuinely different. Coded as listed; worth a note in the report.
- **Byrne Bros.docx** title says "Production Supervisor" while data.json classifies as Quarry Supervisor. Body says both. Coded per data.json.
- **Heidelberg Materials.docx** title says "Quarry Supervisor" but the body's opening sentence says "Maintenance Supervisor". Coded per data.json (Quarry Supervisor).

## Suggested next steps

1. **Add Maintenance_Supervisor.docx to overrides.json** with a flag like "Olympic Dam SA — out of scope (not Queensland)".
2. **Update downstream pipelines** (Quarto report, app, build_frequencies.py) to use coded_jds.csv at its current path. The schema matches what the v1 file used; only the column names are slightly different — v2 uses `evidence` (not `evidence_quote`) and adds `code_label`. If any downstream code reads `evidence_quote` it will need a rename.
3. **Codebook v1.1 review.** Two specific gaps to decide on: (a) whether SP8 should accept ticket-as-appointment signals (would add Brightstar back), (b) whether E14 is genuinely useful given no JD asks for "continuous roster experience" as a stated requirement.
4. **Re-run the frequency scripts** (build_frequencies.py) over the new CSV. Output files in analysis/coded_data/ (freq_*.csv) will need regenerating from v2.
5. **If you want a quick app refresh**, the data.json doesn't change so the existing app keeps working. The coded CSV is what feeds the frequency/heatmap tabs.

## Files touched in your workspace

- `analysis/coded_data/coded_jds.csv` — new (replaces old)
- `analysis/coded_data/coded_jds_v1_audited.csv` — renamed from old coded_jds.csv
- `analysis/coded_data/coded_jds_v2_wip.csv` — created (safe to delete after sign-off)
- `analysis/HANDOVER_v2.md` — this file
- `scripts/verify_evidence.py` — new
- `scripts/pdf_text/Supervisor_Rev_2_0625.txt` — new

Nothing else was modified. data.json, the codebook, the gaps.json, overrides.json, extract.py, index.html, and the figures are all untouched.

## How to audit a single row

If you want to spot-check any row in the CSV manually:

```python
import csv, re
from docx import Document

row = ...  # the row dict from coded_jds.csv
doc = Document(f"jds/{row['jd_filename']}")  # or open as text if pandoc-md
full = ' '.join(p.text for p in doc.paragraphs)
norm = re.sub(r'\s+', ' ', full).strip()
quote = re.sub(r'\s+', ' ', row['evidence']).strip()
assert quote in norm, "Row failed: evidence not found in JD"
```

This is the same logic the verifier applies to every row.
