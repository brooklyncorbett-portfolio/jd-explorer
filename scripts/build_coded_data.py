"""
Build coded_data.js from analysis/coded_data/coded_jds.csv.

The web app loads coded_data.js to display the manual coding instead of
keyword-matching. Regenerate this file after updating coded_jds.csv:

    python3 scripts/build_coded_data.py
"""
import csv, json, os
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Code labels — keep in sync with analysis/codebook/codebook_v1.0.md
LABELS = {
    'D1':'Supervise & lead crews/contractors','D2':'Coach, mentor, develop team capability',
    'D3':'Allocate tasks & manage workloads','D4':'Conduct safety leadership activities',
    'D5':'Ensure statutory compliance','D6':'Promote & uphold safety culture',
    'D7':'Oversee daily operations','D8':'Manage production performance & targets',
    'D9':'Coordinate resources','D10':'Drive continuous improvement',
    'D11':'Plan & schedule work','D12':'Reporting, budgets & administration',
    'D13':'Incident investigation & root cause analysis','D14':'Permits / isolations / high-risk activity management',
    'D15':'Environmental & quality compliance','D16':'Stakeholder engagement & cross-functional collaboration',
    'D17':'Training delivery & competency assurance','D18':'Shift management & handover',
    'DP1':'Safety-focused','DP2':'Strong communicator','DP3':'People-focused / caring',
    'DP4':'Results-oriented','DP5':'Hands-on / front-line leadership','DP6':'Problem-solver / analytical',
    'DP7':'Initiative / proactive','DP8':'Accountable / takes ownership',
    'DP9':'Coaching / mentoring orientation','DP10':'Continuous-improvement mindset',
    'DP11':'Adaptability / flexibility','DP12':'Decision-making under pressure',
    'DP13':'Time management & prioritisation','DP14':'Relationship-building / stakeholder mgmt',
    'DP15':'Self-management / independent work','DP16':'Inclusive leadership',
    'Q1':'Standard 11','Q2':'Coal Surface supervisor competencies (S1/S2/S3/G2)',
    'Q3':'Coal Underground supervisor competencies (G1/G8/G9)','Q4':'Open Cut Examiner (OCE)',
    'Q5':'Minerals & Quarry supervisor competencies (QMS123/G189)','Q6':'QLD Coal Board Medical / ResHealth',
    'Q7':'First Aid Certificate','Q8':'RII units (named)',
    'Q9':'Trade qualification','Q10':'Engineering tertiary',
    'Q11':"Driver's licence",'Q12':'High Risk Work Licences','Q13':'White Card',
    'Q14':'MSIC','Q15':'Explosives Security Clearance','Q16':'Generic Site Induction',
    'Q17':'VOC for equipment','Q18':'Cert IV TAE (TAE40110)','Q19':'Frontline Management cert',
    'Q20':'Shotfirer accreditation',
    'K1':'QLD CMSHA / Mine Safety Act knowledge','K2':'QMSHA / Quarry Act knowledge',
    'K3':'Electrical legislation knowledge','K4':'Equipment / plant knowledge',
    'K5':'Operational systems / software','K6':'Risk management methodology',
    'K7':'Continuous improvement methodology (LEAN)','K8':'Sector-specific technical knowledge',
    'K9':'Maintenance planning & scheduling','K10':'Product specifications knowledge',
    'E1':'Years of supervisory experience','E2':'Years of operational experience',
    'E3':'Sector experience: Coal Surface','E4':'Sector experience: Coal Underground',
    'E5':'Sector experience: Hard rock / Minerals','E6':'Sector experience: Quarry',
    'E7':'Equipment / operational specialism','E8':'Workforce context (team size, FIFO)',
    'E9':'Project delivery / shutdown experience','E10':'Industry breadth (heavy industry)',
    'E11':'Commodity / process specialism','E12':'Equipment brand specialism',
    'E13':'Contractor management experience','E14':'Multi-shift / continuous roster',
    'SP1':'Site Senior Executive (SSE)','SP2':'Open Cut Examiner (statutory position)',
    'SP3':'Underground Mine Manager','SP4':'ERZ Controller / Deputy',
    'SP5':'Ventilation Officer','SP6':'Quarry SSE',
    'SP7':'Other named statutory position','SP8':'Statutory UG Shift Supervisor (minerals/quarry)',
    'SP9':'Shotfirer (statutory position)',
}

def main():
    csv_path = os.path.join(ROOT, 'analysis', 'coded_data', 'coded_jds.csv')
    with open(csv_path) as f:
        rows = list(csv.DictReader(f))

    by_jd = defaultdict(list)
    for r in rows:
        by_jd[r['jd_filename']].append({
            'category': r['category'],
            'code': r['code'],
            'evidence': r['evidence_quote'][:400],
            'required': r['required'],
        })

    out = [
        "// Auto-generated from analysis/coded_data/coded_jds.csv",
        "// To regenerate: python3 scripts/build_coded_data.py",
        "",
        "const CODE_LABELS = " + json.dumps(LABELS, indent=2, ensure_ascii=False) + ";",
        "",
        "const CODES_BY_JD = " + json.dumps(dict(by_jd), indent=2, ensure_ascii=False) + ";",
        ""
    ]
    out_path = os.path.join(ROOT, 'coded_data.js')
    with open(out_path, 'w') as f:
        f.write('\n'.join(out))
    print(f"Generated coded_data.js: {os.path.getsize(out_path)/1024:.1f} KB")
    print(f"  {len(LABELS)} code labels, {len(by_jd)} JDs, {len(rows)} coded rows")

if __name__ == '__main__':
    main()
