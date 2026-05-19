"""
Post-process the rendered jd_analysis.docx to strip borders from single-cell
caption tables (which pandoc generates for every figure/table caption).

Run after `quarto render`:
    python3 fix_tables.py
"""
import sys
from docx import Document
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

DOCX = 'jd_analysis.docx'

def strip_table_borders(tbl):
    """Set all borders on this table to nil."""
    tblPr = tbl._element.find(qn('w:tblPr'))
    if tblPr is None: return
    # Replace tblBorders with all-nil
    existing = tblPr.find(qn('w:tblBorders'))
    if existing is not None:
        tblPr.remove(existing)
    tblBorders = OxmlElement('w:tblBorders')
    for side in ('top','bottom','left','right','insideH','insideV'):
        b = OxmlElement(f'w:{side}')
        b.set(qn('w:val'), 'nil')
        tblBorders.append(b)
    # Insert tblBorders after tblStyle
    tblPr.append(tblBorders)
    # Also strip per-cell tcBorders in all rows
    for row in tbl.rows:
        for cell in row.cells:
            tcPr = cell._tc.find(qn('w:tcPr'))
            if tcPr is None: continue
            existing_tc = tcPr.find(qn('w:tcBorders'))
            if existing_tc is not None:
                tcPr.remove(existing_tc)
            tcBorders = OxmlElement('w:tcBorders')
            for side in ('top','bottom','left','right'):
                b = OxmlElement(f'w:{side}')
                b.set(qn('w:val'), 'nil')
                tcBorders.append(b)
            tcPr.append(tcBorders)

def main():
    doc = Document(DOCX)
    fixed = 0
    for tbl in doc.tables:
        # Caption tables = 1 row, 1 column
        if len(tbl.rows) == 1 and len(tbl.rows[0].cells) == 1:
            strip_table_borders(tbl)
            fixed += 1
    doc.save(DOCX)
    print(f"Stripped borders from {fixed} single-cell caption tables in {DOCX}")

if __name__ == '__main__':
    main()
