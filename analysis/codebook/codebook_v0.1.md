# JD Content Analysis — Codebook v0.2

**Project:** QLD Mining Supervisor JD analysis
**Purpose:** Provide explicit, replicable definitions for coding the content of 59 in-scope JDs across five categories (Duties, Dispositions, Competencies, Experience, Statutory Positions), so downstream mapping work against existing competency frameworks (by Libby & Maureen) has a defensible foundation.
**Sample basis:** Drafted from 10 JDs spanning Coal Surface, Coal Underground, Minerals Surface, Minerals Underground, and Quarry sectors; Production, Maintenance, Mining and Quarry Supervisor role types.
**Status:** DRAFT v0.2 — open for review.

**Changes from v0.1:** Added Category 5 (Statutory Positions). Confirmed all sparse codes retained (even single-JD codes like LEAN). Competencies and Experience remain separate categories.

---

## 1. The five categories — top-level definitions

The categories are defined to be mutually exclusive. Where a single sentence in a JD spans more than one (which is common), it's coded against each applicable category, but the code applied within each category should reflect the *aspect* the category is capturing.

| Category | Definition | Test question | Grammar signal |
|---|---|---|---|
| **DUTY** | A discrete task, activity, or responsibility the supervisor performs in the role. | *"What does the supervisor DO?"* | Action verbs (lead, oversee, coordinate, ensure, monitor) |
| **DISPOSITION** | A personal attribute, attitude, mindset, or behavioural trait the JD expects the supervisor to embody. | *"What kind of person is the supervisor?"* | Adjectives, descriptive phrases ("safety-focused", "approachable") |
| **COMPETENCY** | A specific, codifiable technical skill, qualification, certification, statutory ticket, or body of knowledge the supervisor must hold. | *"What does the supervisor KNOW or HOLD?"* | Named tickets/quals, "knowledge of X", "trade qualification" |
| **EXPERIENCE** | A quantitative or qualitative statement of prior work background required (years, sector, equipment, context). | *"What has the supervisor DONE before this role?"* | Year quantifiers, "experience in/with X", "demonstrated background" |
| **STATUTORY POSITION** | Is the JD itself appointing the supervisor to a named statutory role under QLD mining or quarry legislation (separate from required tickets)? | *"Is the supervisor BEING APPOINTED to a statutory role?"* | Named role: "OCE", "ERZ Controller", "Site Senior Executive", "Ventilation Officer" |

**Important distinction — STATUTORY POSITION vs statutory TICKET:**

- A *statutory ticket* (S1/S2/S3/G2/OCE training etc.) is a qualification a person HOLDS → code under **COMPETENCY** (C2/C3/C4).
- A *statutory position* is a legal ROLE the JD appoints the supervisor to, with formal obligations under the QLD CMSHA/QMSHA → code under **STATUTORY POSITION** (Category 5).
- A JD can require statutory *tickets* without itself being a statutory *position* (e.g. a generic "Production Supervisor" role might require S1/S2/S3 holders without making the holder a statutory officer).
- A JD that IS a statutory position will typically also require the matching ticket — code both.

### Edge case rules

- **"Effective communicator"** → DISPOSITION (it's about *being* communicative, not a certified skill).
- **"RIICOM301E Communicate information"** → COMPETENCY (named unit of competency).
- **"5+ years' supervisory experience"** → EXPERIENCE (quantified prior work).
- **"Leadership experience within the mining environment"** → EXPERIENCE (qualifies prior context).
- **"Strong leadership attributes"** → DISPOSITION (descriptive trait, not quantified).
- **"Coach, mentor and develop team members"** → DUTY (action the supervisor performs).
- **"Coaching/mentoring orientation"** (if framed as a personal quality) → DISPOSITION.
- **"S1/S2/S3 and G2 statutory tickets"** → COMPETENCY (named statutory quals).
- **"Knowledge of QLD CMSHA"** → COMPETENCY (codifiable body of knowledge).

When in doubt: ask the test question for each category and code against whichever fits best. If a phrase legitimately fits two, code it twice with a `multi_coded: true` flag.

---

## 2. DUTIES — proposed codes

12 codes, grouped into 4 functional themes.

### Leadership & people management
- **D1. Supervise and lead crews/contractors** — direct oversight of operators, tradespeople, contractor teams; shift management; daily/shift supervision.
- **D2. Coach, mentor, develop team capability** — explicit coaching/mentoring activities, building team competency, succession planning.
- **D3. Allocate tasks and manage workloads** — task allocation, work plan creation, scheduling, prioritising.

### Safety, health & compliance
- **D4. Conduct safety leadership activities** — pre-starts, toolbox talks, safety audits, hazard identification, safety walks.
- **D5. Ensure statutory compliance** — compliance with QLD CMSHA / MSHA / Electrical legislation / quarrying regulations; statutory recording.
- **D6. Promote and uphold safety culture** — modelling safe behaviours, enforcing HSE policies, fostering safety culture, proactive risk management.

### Operations & production
- **D7. Oversee daily operations** — running shifts/pits/sections; managing production activities; site running.
- **D8. Manage production performance & targets** — drive production to plan, monitor KPIs, react to underperformance, fleet productivity.
- **D9. Coordinate resources** — coordinate personnel, equipment, materials; manage equipment availability; allocate resources.

### Strategy, improvement & administration
- **D10. Drive continuous improvement** — identify improvement opportunities, optimise processes, eliminate bottlenecks, LEAN initiatives.
- **D11. Plan and schedule work** — weekly/daily work scheduling, planned maintenance scheduling, shutdown planning.
- **D12. Reporting, budgets and administration** — operational reporting, budget development/adherence, team admin, system use (SAP/INX).

---

## 3. DISPOSITIONS — proposed codes

10 codes covering the most-named personal attributes.

- **DP1. Safety-focused** — "safety-first thinking", "genuine commitment to safety", "uncompromising on safety".
- **DP2. Strong communicator** — "effective communicator", "exceptional communication", "ability to build relationships".
- **DP3. People-focused / caring** — "genuinely cares about your team", "approachable", "people leadership".
- **DP4. Results-oriented** — "drive for performance", "ability to achieve business targets", "ingrained passion to achieve goals".
- **DP5. Hands-on / front-line leadership** — "lead from the front", "hands-on leader", "visible leadership".
- **DP6. Problem-solver / analytical** — "strong problem solving, lateral thinking", "ability to identify and solve issues".
- **DP7. Initiative / proactive** — "initiative to identify, manage and solve issues", "proactive risk management", "self-starter".
- **DP8. Accountable / takes ownership** — "ownership and entrepreneurial spirit", "accountability", "takes responsibility".
- **DP9. Coaching/mentoring orientation** *(as a trait, not a duty)* — "passion for developing others", "natural mentor".
- **DP10. Continuous-improvement mindset** — "passion for improvement", "always looking for better ways".

---

## 4. COMPETENCIES — proposed codes

15 codes, split between statutory/regulatory tickets and technical knowledge.

### Statutory / mandatory tickets
- **C1. Standard 11** — national mining induction.
- **C2. Coal surface supervisor competencies** — S1 / S2 / S3 / G2 (Coal Mining Safety & Health Regulation).
- **C3. Coal underground supervisor competencies** — G1 / G8 / G9 (+ above).
- **C4. OCE — Open Cut Examiner** — statutory open-cut coal qualification.
- **C5. Underground manager / ERZ Controller / similar** — underground statutory roles where named.
- **C6. QLD Coal Board Medical** — current health screen requirement.
- **C7. RII units (specific)** — RIIRIS301E, RIIWHS301E, RIICOM301E, etc.
- **C8. Trade qualification** — Electrician, Fitter, Mechanic, etc. (with named trade).
- **C9. Driver's licence (C class or higher)** — manual/heavy combination as named.
- **C10. Other statutory clearances** — Explosives Security Clearance, First Aid, working at heights.

### Technical / domain knowledge
- **C11. Legislative knowledge** — QLD CMSHA, MSHA, Electrical Installation legislation, quarrying regs.
- **C12. Equipment / plant knowledge** — dragline ops, mobile + fixed plant, crushing & screening, heavy earthmoving, electrical fixed assets.
- **C13. Operational systems knowledge** — SAP, INX, mining-specific software.
- **C14. Risk management methodology** — risk assessment frameworks, risk facilitator competency.
- **C15. Continuous-improvement methodologies** — LEAN, Six Sigma, named CI systems.

---

## 5. EXPERIENCE — proposed codes

8 codes capturing the dimensions of "prior work" most commonly named.

- **E1. Years of supervisory experience** — quantified (e.g. "2+ years", "5+ years") or qualitative ("significant", "demonstrated"). Record the numeric value where given.
- **E2. Years of operational/production experience** — same logic, distinct from supervisory.
- **E3. Sector experience — coal surface** — open-cut coal mining background.
- **E4. Sector experience — coal underground** — underground coal background.
- **E5. Sector experience — hard rock / minerals** — metalliferous, hard rock, minerals processing.
- **E6. Sector experience — quarry / construction materials** — quarrying, crushing, aggregates.
- **E7. Equipment/operational specialism** — dragline, fixed plant, heavy earthmoving, electrical fixed assets, mobile plant.
- **E8. Workforce context** — leading large work teams, contractor management, FIFO/residential, multi-shift operations.

---

## 6. STATUTORY POSITION — proposed codes

7 codes covering the named statutory positions under QLD mining and quarry safety legislation. Only code when explicitly named in the JD (not inferred from role title alone).

### Coal Mining Safety & Health Act / Regulation
- **SP1. Site Senior Executive (SSE)** — the most senior on-site officer with overall safety/health obligations.
- **SP2. Open Cut Examiner (OCE)** — open-cut coal statutory examiner role.
- **SP3. Underground Mine Manager (UMM)** — statutory manager of an underground coal operation.
- **SP4. Explosion Risk Zone (ERZ) Controller / Deputy** — underground coal statutory officer responsible for an ERZ.
- **SP5. Ventilation Officer** — statutory officer for underground coal mine ventilation.

### Mining & Quarrying Safety & Health Act / Regulation (minerals/quarry)
- **SP6. Quarry Site Senior Executive** — equivalent SSE role under QMSHA (quarry/minerals).
- **SP7. Other named statutory position** — anything else explicitly named (e.g. Surveyor, Authorised Person under specific legislation). Capture the exact title in the evidence quote.

**Coding rule:** Code positively only when the role title or JD text explicitly names a statutory position the supervisor is being appointed to. *Don't* infer "this Underground Shift Supervisor is acting as an ERZ Controller" unless the JD says so. The default for any JD that doesn't explicitly mention a statutory position is **no STATUTORY POSITION code applied**.

---

## 7. Coding workflow

For each JD:
1. Read the full text including curated responsibilities/qualifications (where present in the override).
2. For each sentence/bullet, decide if it belongs in DUTY, DISPOSITION, COMPETENCY, or EXPERIENCE (or multiple).
3. Tag with the most specific applicable code.
4. Capture the supporting quote verbatim for traceability.
5. Mark `confidence` (high/medium/low) — anything below "high" should be reviewed manually.

Output format (one row per `(jd_filename, category, code, evidence)`):

```csv
jd_filename, sector, role_type, category, code, evidence_quote, confidence
Anglo Dragline.docx, Coal - Surface, Production Supervisor, DUTY, D9, "Coordination of personnel, equipment and resources within Dragline operations", high
Anglo Dragline.docx, Coal - Surface, Production Supervisor, COMPETENCY, C2, "Hold the Supervisor & Risk Facilitator competencies (S1, 2, 3 & G2)", high
...
```

---

## 8. Known issues / open questions

- **Boilerplate vs. real content.** Many JDs include generic Boral/BHP/Anglo company boilerplate ("we value safety, teamwork, accountability"). These statements describe company values rather than role requirements. Rule: code only if the language is clearly addressed to the candidate or describes the role; ignore corporate values statements.
- **"Trade qualification or relevant tertiary qualification (highly desirable)"** — the "OR" pattern means the JD accepts either path. Code as C8 (Trade) with a note. May need a separate flag for desired-not-required.
- **OCE specifically** — Foxleigh names it explicitly. Some Coal Surface JDs imply OCE without naming it. Don't infer; code only when explicitly mentioned.
- **The disposition category is the most subjective.** Inter-coder reliability check on DP codes recommended.
- **"Significant" / "demonstrated" experience without numbers** — code under E1 (or relevant E code) with `years = NULL` and a note. Don't try to assign numeric values where the JD doesn't.

---

## 9. Decision still to confirm

- Should I include a fifth informal category for **roster/conditions** (e.g. 7/7 D/N, FIFO residential)? Useful for cross-tab but not part of Steph's brief — could go in a side data table instead. **Recommend: keep roster as a non-coded field on each JD; don't blow it up into another coding pass.**
