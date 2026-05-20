SUPERVISOR JD ANALYSIS — REVIEW PACKAGE
========================================

QLD Mining Supervisor Job Description content analysis, prepared
for review by the project team.

Analysis by Brooklyn Corbett (UQ).
Date: 2026-05-20.


WHAT IS IN THIS PACKAGE
-----------------------

1.  1_jd_collation.xlsx
    Master spreadsheet of every JD considered for the study, with
    scope decision (in-scope, out-of-scope, duplicate, broken) and
    rationale.

2.  2_all_jds_organised/
    The 97 source JD files, sorted into four sub-folders so reviewers
    can find any JD by its scope status.

3.  3_codebook_v1.0.docx
    Codebook v1.0 (locked). 87 codes across 6 categories with
    explicit definitions, the "required" flag rule, and edge-case
    guidance.

4.  4_coding_sheet.xlsx
    The full content-coding spreadsheet. 966 rows across 56 in-scope
    JDs. One sheet for all rows plus one tab per sector. Each row
    has filename, company, location, sector, role type, category,
    code, evidence quote, required flag, and confidence.

5.  5_freq_tables.xlsx
    Code frequencies. One tab per category (duty, disposition,
    qualifications, knowledge, experience, statutory position) plus
    a code-by-sector cross-tab.

6.  6_report.docx
    The formal analysis report.


FOLDER COUNTS (inside 2_all_jds_organised/)
-------------------------------------------

  in-scope/        56  Frontline supervisor JDs in QLD mining,
                       quarry, or contractor work, used in the
                       coded analysis.
  out-of-scope/    16  JDs excluded after scope review (operator-
                       level, superintendent-level, interstate,
                       manufacturing, etc.). See the collation
                       spreadsheet for per-JD rationale.
  duplicates/      23  Multiple scrapes of the same JD across sites
                       or dates. One canonical version of each was
                       kept in in-scope/.
  broken/           2  Source files that failed text extraction or
                       were unreadable.
  -----            ---
  Total            97  All JD source files considered.


HOW TO READ THE CODING SHEET
----------------------------

Each row in 4_coding_sheet.xlsx is a single coded instance: one
specific phrase from one JD that mapped to one codebook code.

Tabs (left to right):

  * All rows — every coded row across the corpus (966 rows).
  * Coal Surface, Coal UG, Minerals Surface, Minerals UG, Quarry —
    the same rows filtered to one sector each.
  * Codebook — quick reference list of all codes used in the corpus,
    grouped by category.

Every tab has an auto-filter on row 1, the header row is frozen,
and rows are coloured by category. Click the filter arrows on any
column header to narrow the view.

Columns:

  * JD filename — the source JD (also the filename in
    2_all_jds_organised/in-scope/).
  * Company and Location — the employer and site for the JD, so the
    row links back without opening the source file.
  * Sector and Role type — drawn from the project's curated JD
    metadata, not re-inferred from the JD body.
  * Category — DUTY, DISPOSITION, QUALIFICATIONS, KNOWLEDGE,
    EXPERIENCE, or STATUTORY_POSITION.
  * Code — the specific code from the codebook (e.g. D1, DP2, Q11).
  * Code label — human-readable label for that code.
  * Evidence quote — the verbatim quote from the JD body. Every
    quote in this column is a literal character-for-character
    substring of the source JD (after whitespace normalisation).
    This is the headline guarantee of the redo: the audit pass rate
    is 100% (966 of 966 rows).
  * Required — "required", "desirable", or "not_specified", based
    on how the JD treats the item. A bullet is "required" when the
    JD either uses explicit must/essential language or lists it
    under a requirements-style heading (About You, Qualifications,
    What you'll bring, etc.) without softening. "Desirable" when
    the bullet (or its section) uses softening language like
    preferred / advantageous / highly regarded. "Not specified" is
    used for duty bullets describing what the supervisor does in
    the role rather than what the candidate must bring.
  * Confidence — "high" (clear mapping) or "medium" (judgement call
    worth a second look). No low-confidence rows are emitted.

Row colour key (in 4_coding_sheet.xlsx):

  DUTY                  light blue
  DISPOSITION           light green
  QUALIFICATIONS        light purple
  KNOWLEDGE             light orange
  EXPERIENCE            light teal
  STATUTORY_POSITION    light red

A single sentence in a JD can produce multiple rows where it covers
more than one code — the same evidence quote then appears on each
row, once per code.


HOW TO READ THE REPORT
----------------------

6_report.docx is the rendered analysis report. The figures (top-N
bar charts and sector heatmaps) and tables in the report are all
built from 4_coding_sheet.xlsx, so if you spot a discrepancy
between the report and the coding sheet, the coding sheet is the
source of truth.


WHAT CHANGED FROM THE PREVIOUS VERSION
--------------------------------------

The previous coded sheet had 789 rows and an audit found ~31% of
the evidence quotes were either fabricated, paraphrased, or only
partially matched the source. This redo produced 966 rows, all of
which pass a literal-substring audit against the source JDs.

One JD that was previously classified as in-scope
(Maintenance_Supervisor.docx, BHP Olympic Dam, South Australia)
was reclassified as out-of-scope during the redo because the role
is not in Queensland. The in-scope corpus is now 56 instead of 57.


WHAT THE TEAM SHOULD PAY ATTENTION TO
-------------------------------------

In rough order of value:

1.  Spot-audit the coding. Pick 30-50 random rows in
    4_coding_sheet.xlsx and check the code assignments make sense
    to you. The substring verifier guarantees the quote came from
    the JD; it does not guarantee the code mapping is the best one.
    Rows flagged "medium" confidence are particularly worth a look.

2.  Codebook v1.1 candidates. Two specific gaps surfaced during
    coding: whether SP8 (Statutory Underground Shift Supervisor)
    should be loosened to accept ticket requirements as evidence
    of appointment (it currently has zero rows in the corpus), and
    whether E14 (multi-shift roster experience) is useful given no
    JD asks for it as a stated requirement.

3.  Sparse Coal Underground sector. Only 3 JDs are Coal UG, and
    they are all thin SEEK scrapes that focus on credentials rather
    than duties. The heatmaps in the report show this clearly. The
    Coal UG row count is genuine, not an under-coding error.


CONTACT
-------

Questions on the coding decisions or the codebook to Brooklyn
Corbett (b.corbett@uq.edu.au).
