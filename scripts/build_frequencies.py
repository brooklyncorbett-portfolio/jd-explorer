"""
Build the frequency tables consumed by the Quarto report.

Reads:   analysis/coded_data/coded_jds.csv
Writes:  analysis/coded_data/freq_<category>.csv (six files)
         analysis/coded_data/crosstab_code_by_sector.csv

A JD that has the same code applied more than once counts ONCE per code
(unique-JD semantics), matching how the report and the rest of the
analysis pipeline interpret frequencies.

Run after any change to coded_jds.csv:

    python3 scripts/build_frequencies.py
"""
import os
import pandas as pd

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CODED = os.path.join(ROOT, 'analysis', 'coded_data', 'coded_jds.csv')
OUT_DIR = os.path.join(ROOT, 'analysis', 'coded_data')

# Labels match the existing freq_*.csv files exactly so byte-for-byte
# regeneration leaves the rendered report unchanged.
LABELS = {
    'D1': 'Supervise & lead crews', 'D2': 'Coach & mentor', 'D3': 'Allocate tasks',
    'D4': 'Safety leadership activities', 'D5': 'Statutory compliance',
    'D6': 'Promote safety culture', 'D7': 'Oversee daily operations',
    'D8': 'Manage production/targets', 'D9': 'Coordinate resources',
    'D10': 'Continuous improvement', 'D11': 'Plan & schedule work',
    'D12': 'Reporting & admin', 'D13': 'Incident investigation',
    'D14': 'Permits & high-risk activities', 'D15': 'Environmental & quality',
    'D16': 'Cross-functional collaboration', 'D17': 'Training & competency assurance',
    'D18': 'Shift handover',
    'DP1': 'Safety-focused', 'DP2': 'Strong communicator', 'DP3': 'People-focused / caring',
    'DP4': 'Results-oriented', 'DP5': 'Hands-on, lead by example', 'DP6': 'Problem-solver',
    'DP7': 'Initiative / proactive', 'DP9': 'Coaching/mentoring trait',
    'DP10': 'Continuous improvement mindset', 'DP11': 'Adaptable / flexible',
    'DP12': 'Decision-making under pressure', 'DP13': 'Time management',
    'DP14': 'Relationship-building', 'DP15': 'Self-management', 'DP16': 'Inclusive leadership',
    'Q1': 'Standard 11', 'Q2': 'Coal Surface S1/S2/S3/G2', 'Q3': 'Coal UG G1/G8/G9',
    'Q4': 'OCE', 'Q5': 'Minerals/Quarry QMS123/G189', 'Q6': 'Coal Board Medical',
    'Q7': 'First Aid', 'Q8': 'RII units (named)', 'Q9': 'Trade qualification',
    'Q10': 'Engineering tertiary', 'Q11': "Driver's licence",
    'Q12': 'High Risk Work Licences', 'Q13': 'White Card', 'Q14': 'MSIC',
    'Q15': 'Explosives Security Clearance', 'Q16': 'Generic Site Induction',
    'Q17': 'VOC for equipment', 'Q18': 'Cert IV TAE', 'Q19': 'Frontline Management',
    'Q20': 'Shotfirer accreditation',
    'K1': 'QLD CMSHA knowledge', 'K3': 'Electrical legislation',
    'K4': 'Equipment / plant knowledge', 'K5': 'Operational systems / software',
    'K6': 'Risk management methodology', 'K7': 'Continuous improvement methodology',
    'K8': 'Sector technical knowledge', 'K9': 'Maintenance planning',
    'K10': 'Product specifications',
    'E1': 'Supervisory experience', 'E2': 'Operational experience',
    'E3': 'Sector: Coal Surface', 'E4': 'Sector: Coal UG', 'E5': 'Sector: Minerals',
    'E6': 'Sector: Quarry', 'E7': 'Equipment specialism', 'E8': 'Workforce context',
    'E9': 'Project delivery experience', 'E10': 'Industry breadth',
    'E11': 'Commodity/process specialism', 'E12': 'Equipment brand',
    'E13': 'Contractor mgmt',
    'SP2': 'OCE position', 'SP8': 'Statutory UG Shift Sup', 'SP9': 'Shotfirer position',
}

CATEGORIES = [
    ('DUTY', 'freq_duty.csv'),
    ('DISPOSITION', 'freq_disposition.csv'),
    ('QUALIFICATIONS', 'freq_qualifications.csv'),
    ('KNOWLEDGE', 'freq_knowledge.csv'),
    ('EXPERIENCE', 'freq_experience.csv'),
    ('STATUTORY_POSITION', 'freq_statutory_position.csv'),
]


def main():
    df = pd.read_csv(CODED)
    total_jds = df['jd_filename'].nunique()
    print(f"Loaded {len(df)} coded rows across {total_jds} unique JDs.")

    # Frequency tables: one per category
    for cat, fname in CATEGORIES:
        sub = df[df['category'] == cat]
        freq = (
            sub.groupby('code')['jd_filename'].nunique()
               .reset_index()
               .rename(columns={'jd_filename': 'n_jds'})
        )
        freq['label'] = freq['code'].map(LABELS).fillna(freq['code'])
        freq['pct_jds'] = (freq['n_jds'] / total_jds * 100).round(1)
        freq = freq[['code', 'label', 'n_jds', 'pct_jds']].sort_values('n_jds', ascending=False)
        out_path = os.path.join(OUT_DIR, fname)
        freq.to_csv(out_path, index=False)
        print(f"  wrote {fname}: {len(freq)} codes")

    # Crosstab: code x sector (unique-JD counts)
    # Column order matches the existing CSV: code, <sectors alphabetical>, label
    sector_cols = sorted(df['sector'].dropna().unique().tolist())
    crosstab_rows = []
    for code in sorted(df['code'].unique()):
        sub = df[df['code'] == code]
        row = {'code': code}
        for sector in sector_cols:
            row[sector] = int(sub[sub['sector'] == sector]['jd_filename'].nunique())
        row['label'] = LABELS.get(code, code)
        crosstab_rows.append(row)
    ct = pd.DataFrame(crosstab_rows)[['code'] + sector_cols + ['label']]
    out_path = os.path.join(OUT_DIR, 'crosstab_code_by_sector.csv')
    ct.to_csv(out_path, index=False)
    print(f"  wrote crosstab_code_by_sector.csv: {len(ct)} codes x {len(sector_cols)} sectors")


if __name__ == '__main__':
    main()
