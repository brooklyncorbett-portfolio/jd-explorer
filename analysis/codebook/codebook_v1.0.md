# JD Content Analysis — Codebook v1.0 (LOCKED)

**Project:** QLD Mining Supervisor JD analysis
**Purpose:** Provide explicit, replicable definitions for coding the content of 59 in-scope JDs across six categories, so downstream mapping work against existing competency frameworks (by Libby & Maureen) has a defensible foundation.
**Corpus:** All 59 in-scope JDs (Coal Surface 31, Coal UG 3, Minerals Surface 12, Minerals UG 6, Quarry 7).
**Status:** v1.0 LOCKED — coding will be performed against this version. Future revisions will be tracked as v1.1, v1.2 etc.

**Changes from v0.2:**
- Split `COMPETENCY` into `QUALIFICATIONS` (formal credentials) + `KNOWLEDGE` (domain knowledge).
- Expanded codes across all categories based on full corpus scan.
- Added `required` flag (required / desirable / not specified) per coded instance.
- 87 total codes across 6 categories.
- MacKellar Leading Hand confirmed in-scope (per Libby).

---

## 1. The six categories — top-level definitions

| Category | Definition | Test question | Grammar signal |
|---|---|---|---|
| **DUTY** | A discrete task, activity or responsibility the supervisor performs in the role. | *"What does the supervisor DO?"* | Action verbs (lead, oversee, coordinate, ensure, monitor) |
| **DISPOSITION** | A personal attribute, attitude, mindset or behavioural trait the JD expects the supervisor to embody. | *"What kind of person is the supervisor?"* | Adjectives, descriptive phrases ("safety-focused", "approachable") |
| **QUALIFICATIONS** | A formal credential, certification, statutory ticket, named training program, license, or trade. *Things the supervisor has been awarded.* | *"What credentials does the supervisor HOLD?"* | Named tickets/quals/licenses |
| **KNOWLEDGE** | A specific body of domain knowledge or understanding the supervisor must possess (separate from a formal credential). | *"What does the supervisor need to KNOW?"* | "knowledge of X", "understanding of X" |
| **EXPERIENCE** | A quantitative or qualitative statement of prior work background required (years, sector, equipment, context). | *"What has the supervisor DONE before this role?"* | Year quantifiers, "experience in/with X" |
| **STATUTORY POSITION** | Is the JD itself appointing the supervisor to a named statutory role under QLD mining or quarry legislation? | *"Is the supervisor BEING APPOINTED to a statutory role?"* | Named role: "OCE", "ERZ Controller", "SSE" |

### Critical distinctions

- **DUTY vs DISPOSITION**: "Coach and mentor team members" (action) → DUTY. "Coaching/mentoring orientation" (trait) → DISPOSITION. If both framings appear, double-code.
- **QUALIFICATIONS vs KNOWLEDGE**: "S1/S2/S3 ticket" (a person HOLDS this) → QUALIFICATIONS. "Knowledge of QLD Coal Mining Act" (a person KNOWS this) → KNOWLEDGE. Even though the former implies the latter, code per how the JD phrases it.
- **QUALIFICATIONS vs EXPERIENCE**: "Trade qualification" (formal credential) → QUALIFICATIONS. "5 years' trade experience" (prior work duration) → EXPERIENCE.
- **STATUTORY POSITION vs statutory ticket**: A statutory ticket (S1/S2/S3, OCE training etc.) is a qualification the supervisor HOLDS — code under QUALIFICATIONS. A statutory position is a legal ROLE the JD appoints to (with formal obligations) — code under STATUTORY POSITION. Code positively only when the JD explicitly names a statutory appointment.

---

## 2. The `required` flag

Each coded instance gets a flag indicating how the JD treats it:

- **`required`** — JD explicitly states it as mandatory ("must have", "essential", "required").
- **`desirable`** — JD explicitly states it as optional/preferred ("desirable", "preferred", "highly regarded", "advantageous", "nice to have").
- **`not_specified`** — JD mentions it without making explicit whether required or desirable (default; common in narrative text and curated responsibility/qualification lists).

When a single sentence covers multiple items with mixed requirements ("must have X and Y; Z is desirable"), each item gets its own flag.

---

## 3. DUTIES (D1–D18)

### Leadership & people management
- **D1. Supervise and lead crews/contractors** — direct oversight; shift management.
- **D2. Coach, mentor, develop team capability** — coaching, mentoring, succession.
- **D3. Allocate tasks and manage workloads** — task allocation, work plans, prioritising.

### Safety, health & compliance
- **D4. Conduct safety leadership activities** — pre-starts, toolbox talks, safety audits, hazard ID, safety walks.
- **D5. Ensure statutory compliance** — compliance with QLD CMSHA/QMSHA/Electrical legislation; statutory recording.
- **D6. Promote and uphold safety culture** — modelling safe behaviours; enforcing HSE policies; proactive risk management.

### Operations & production
- **D7. Oversee daily operations** — running shifts/pits/sections; managing production activities.
- **D8. Manage production performance & targets** — drive production to plan; monitor KPIs; fleet productivity.
- **D9. Coordinate resources** — coordinate personnel, equipment, materials; manage equipment availability.

### Strategy, improvement & administration
- **D10. Drive continuous improvement** — identify improvements; LEAN initiatives; eliminate bottlenecks.
- **D11. Plan and schedule work** — weekly/daily work scheduling; planned maintenance scheduling; shutdown planning.
- **D12. Reporting, budgets and administration** — operational reporting, budget development/adherence, team admin.

### Specialised functions
- **D13. Incident investigation & root cause analysis** — incident reporting, RCA, lessons learned, corrective action follow-up.
- **D14. Permit / isolation / high-risk activity management** — permits, work packs, isolations, lifts, high-risk task supervision.
- **D15. Environmental & quality compliance** — environmental monitoring, quality control, product spec adherence (distinct from safety).
- **D16. Stakeholder engagement & cross-functional collaboration** — working with technical services, engineering, drill & blast, maintenance teams.
- **D17. Training delivery & competency assurance** — delivering training, assessing competencies, keeping team's tickets current.
- **D18. Shift management & handover** — shift handovers, 24-hour priorities, shift cycle management.

---

## 4. DISPOSITIONS (DP1–DP16)

- **DP1. Safety-focused** — "safety-first thinking", "uncompromising on safety".
- **DP2. Strong communicator** — "effective communicator", "exceptional communication".
- **DP3. People-focused / caring** — "genuinely cares about your team", "approachable", "people leadership".
- **DP4. Results-oriented** — "drive for performance", "achieve business targets".
- **DP5. Hands-on / front-line leadership** — "lead from the front", "hands-on leader", "lead by example".
- **DP6. Problem-solver / analytical** — "strong problem solving, lateral thinking".
- **DP7. Initiative / proactive** — "initiative to identify, manage and solve issues", "proactive".
- **DP8. Accountable / takes ownership** — "ownership and accountability".
- **DP9. Coaching/mentoring orientation** *(as trait)* — "passion for developing others", "natural mentor".
- **DP10. Continuous-improvement mindset** — "passion for improvement", "always looking for better ways".
- **DP11. Adaptability / flexibility** — "flexible, solutions-focused", "handles competing demands".
- **DP12. Decision-making under pressure** — "make quick effective decisions under pressure".
- **DP13. Time management & prioritisation** — "strong time management", "ability to prioritise".
- **DP14. Relationship-building / stakeholder management** — "strong stakeholder engagement", "ability to influence".
- **DP15. Self-management / independent work** — "self-starter", "work independently".
- **DP16. Inclusive leadership** — "inclusive attitudes", "champion diverse teams".

---

## 5. QUALIFICATIONS (Q1–Q20)

Formal credentials only. A code is applied only when a named credential, ticket, license or named training appears.

### Statutory tickets — coal sector
- **Q1. Standard 11** — national mining generic induction.
- **Q2. Coal Surface supervisor competencies** — S1, S2, S3, G2 (and "S123" shorthand).
- **Q3. Coal Underground supervisor competencies** — G1, G8, G9 (often with G2).
- **Q4. Open Cut Examiner (OCE)** — statutory open-cut coal qualification.

### Statutory tickets — minerals/quarry sector
- **Q5. Minerals & Quarry supervisor competencies** — QMS123 / G189 (and similar).

### Medical & first aid
- **Q6. QLD Coal Board Medical / ResHealth Medical** — current health screen.
- **Q7. First Aid Certificate** — Senior First Aid / Current First Aid.

### Training units & certifications
- **Q8. RII units (named)** — RIIRIS301E/A, RIIWHS301E, RIICOM301E, RIIRIS402A/D etc.
- **Q9. Trade qualification (with discipline named)** — Electrician, Diesel Fitter, Mechanical Fitter, Boilermaker, Heavy Mechanical, etc.
- **Q10. Engineering tertiary qualification** — Mechanical Engineering or related degree.
- **Q11. Driver's licence** — C class, manual, Australian / Queensland Driver's Licence.

### Licenses & clearances
- **Q12. High Risk Work Licences** — Confined Spaces, Working at Heights, EWP, Forklift.
- **Q13. White Card** — Construction General Induction.
- **Q14. Marine Security Identification Card (MSIC)** — port/maritime access.
- **Q15. QLD Explosives Security Clearance** — explosives handling.

### Site / equipment specific
- **Q16. Generic Site Induction** — QLD Generic Induction, Surface Generic, named site induction.
- **Q17. VOC (Verification of Competency) for named equipment** — e.g. "VOC for Integrated Tool Carrier".

### Training & leadership credentials
- **Q18. Cert IV in Training & Assessment (TAE40110)** — formal trainer/assessor credential.
- **Q19. Frontline Management certification** — leadership credential.
- **Q20. Shotfirer accreditation** — statutory blasting qualification.

---

## 6. KNOWLEDGE (K1–K10)

Domain/technical knowledge stated as a requirement, separate from holding a formal credential.

- **K1. QLD CMSHA / Mine Safety legislation knowledge** — "knowledge of QLD Coal Mining legislation", "understanding of Coal Mining Safety and Health Act".
- **K2. QMSHA / Quarry safety legislation knowledge** — Mining & Quarrying Safety & Health Act.
- **K3. Electrical installation legislation knowledge** — "legislative requirements for electrical installations".
- **K4. Equipment / plant knowledge** — "strong knowledge of hard rock quarrying and crushing", "working knowledge of contemporary equipment".
- **K5. Operational systems / software knowledge** — SAP, PRONTO, INX, Ellipse, CMMS, MS Project, Microsoft Office.
- **K6. Risk management methodology** — risk assessment frameworks, JSA, hazard ID processes.
- **K7. Continuous improvement methodology** — LEAN, Six Sigma, named CI methods.
- **K8. Sector-specific technical knowledge** — smelting (IsaSmelt), ventilation, dragline ops, drill & blast, hard rock mining, ship loading.
- **K9. Maintenance planning, scheduling, condition monitoring** — planned maintenance, condition monitoring frameworks.
- **K10. Product specifications / standards knowledge** — TMR specs, named quarry product standards.

---

## 7. EXPERIENCE (E1–E14)

- **E1. Years of supervisory experience** — quantified (record numeric) or qualitative ("significant", "demonstrated", "proven").
- **E2. Years of operational/production experience** — separate from supervisory.
- **E3. Sector experience — Coal Surface** — open-cut coal background.
- **E4. Sector experience — Coal Underground** — underground coal background.
- **E5. Sector experience — Hard rock / Minerals** — metalliferous, hard rock, minerals processing.
- **E6. Sector experience — Quarry / Construction materials** — quarrying, crushing, aggregates.
- **E7. Equipment/operational specialism** — dragline, fixed plant, heavy earthmoving, electrical fixed assets, mobile plant.
- **E8. Workforce context** — leading large work teams, multi-shift teams.
- **E9. Project delivery / shutdown experience** — capital projects, shutdowns, project supervision.
- **E10. Industry breadth — heavy industry beyond mining** — "mining OR heavy industry".
- **E11. Commodity/process specialism** — IsaSmelt, Filtration plant, ventilation systems, pump stations, ship loading.
- **E12. Equipment brand specialism** — Liebherr, Komatsu, CAT (where named).
- **E13. Contractor management experience** — explicit "managing contractors" experience.
- **E14. Multi-shift / continuous roster experience** — leading continuous-roster multi-shift teams.

---

## 8. STATUTORY POSITIONS (SP1–SP9)

Coded only when the JD explicitly names a statutory appointment.

### CMSHA-defined (coal)
- **SP1. Site Senior Executive (SSE)** — coal mining SSE.
- **SP2. Open Cut Examiner (OCE)** — open-cut coal statutory examiner.
- **SP3. Underground Mine Manager (UMM)** — statutory UG coal manager.
- **SP4. Explosion Risk Zone (ERZ) Controller / Deputy** — UG coal statutory officer.
- **SP5. Ventilation Officer** — UG coal statutory officer.

### QMSHA-defined (minerals/quarry)
- **SP6. Quarry Site Senior Executive** — equivalent SSE under QMSHA.
- **SP7. Other named statutory position** — anything explicitly named not in SP1–SP6, SP8, SP9.
- **SP8. Statutory Underground Shift Supervisor (minerals/quarry)** — explicitly named (e.g. Brightstar).
- **SP9. Shotfirer** — statutory position under explosives regulations.

**Coding rule:** Code positively only when explicitly named. Do not infer.

---

## 9. Coding workflow

For each JD:
1. Read curated responsibilities + qualifications fields from `data.json` and source text.
2. For each sentence/bullet/phrase, identify which category/categories apply.
3. Apply most specific code(s) within each category.
4. Capture verbatim supporting quote.
5. Apply `required` flag (required / desirable / not_specified).
6. Mark `confidence` (high / medium / low).

### Output CSV schema

```
jd_filename, sector, role_type, category, code, evidence_quote, required, confidence
```

- `jd_filename` — exact filename from data.json
- `sector` — Coal - Surface | Coal - Underground | Minerals - Surface | Minerals - Underground | Quarry
- `role_type` — supervisor archetype (Production / Maintenance / Mining / Quarry / etc.)
- `category` — DUTY | DISPOSITION | QUALIFICATIONS | KNOWLEDGE | EXPERIENCE | STATUTORY_POSITION
- `code` — D1, DP3, Q2, K1, E5, SP2 etc.
- `evidence_quote` — verbatim quote from JD (≤200 chars; longer quotes truncated with ellipsis)
- `required` — required | desirable | not_specified
- `confidence` — high | medium | low

---

## 10. Coding conventions and edge cases

- **Boilerplate vs. real content.** Ignore corporate-values statements ("we value safety, teamwork, accountability") that describe the company rather than the role.
- **"OR" clauses** ("Trade qualification OR Engineering background"). Code BOTH options. Record both with `required` flag matching the original phrasing.
- **Numeric experience.** If a JD specifies years ("5+ years"), preserve in the evidence quote. The numeric value can be extracted later as a separate column if needed for analysis.
- **Multi-coded sentences.** Always allowed. A sentence may legitimately produce 2–3 coded rows across different categories.
- **Inference rule.** Code only what's explicit. Do not infer ("UG Shift Supervisor implies ERZ Controller" → not coded unless ERZ Controller is named).
- **Confidence-low items.** Flag any code applied where the JD language is ambiguous. These will be spot-checked manually.

---

## 11. Code count summary

| Category | Codes |
|---|---|
| DUTY | 18 |
| DISPOSITION | 16 |
| QUALIFICATIONS | 20 |
| KNOWLEDGE | 10 |
| EXPERIENCE | 14 |
| STATUTORY POSITION | 9 |
| **Total** | **87** |
