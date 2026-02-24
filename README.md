# JD Explorer — Milestone 1 Desktop Review

Interactive web app for analysing mining supervisor job descriptions across Queensland's coal, minerals, and quarry sectors.

## Quick Start (GitHub Pages)

1. Create a new GitHub repository
2. Upload this entire folder to the repo
3. Go to **Settings → Pages** → set source to **main branch** → `/ (root)` → Save
4. Your app will be live at `https://<username>.github.io/<repo-name>/`

## How It Works

- `index.html` — The web app (loads data from data.json)
- `data.json` — All extracted JD data (auto-generated from the jds/ folder)
- `jds/` — Drop .docx and .pdf files here
- `scripts/extract.py` — Extracts text and metadata from JD files
- `scripts/overrides.json` — Manual corrections for auto-extracted metadata
- `scripts/gaps.json` — Gap analysis configuration (legislative vs JD coverage)
- `.github/workflows/process.yml` — GitHub Action that auto-regenerates data.json

## Adding New JDs

### Option A: Via GitHub (recommended — zero git knowledge needed)
1. Go to your repo on GitHub
2. Navigate to the `jds/` folder
3. Click **Add file → Upload files**
4. Drag your .docx files in and commit
5. The GitHub Action runs automatically and regenerates `data.json`
6. The app updates within ~2 minutes

### Option B: Manual
1. Place .docx/.pdf files in the `jds/` folder
2. Run: `pip install python-docx pymupdf && python scripts/extract.py`
3. Optionally add entries to `scripts/overrides.json` for metadata corrections
4. Commit and push

## Overrides

The extraction script auto-detects company, role, sector, location, roster, responsibilities, and qualifications. When auto-detection gets things wrong, add an entry to `scripts/overrides.json`:

```json
{
  "NewFile.docx": {
    "company": "Company Name",
    "role": "Job Title",
    "sector": "Coal - Surface",
    "location": "Location QLD",
    "type": "Production Supervisor",
    "flag": ""
  }
}
```

**Fields:**
- `sector`: Coal - Surface, Coal - Underground, Minerals - Surface, Minerals - Underground, Quarry, Construction/Services, Manufacturing (Non-mining)
- `type`: Production Supervisor, Maintenance Supervisor, Mining Supervisor, Underground Shift Supervisor, Quarry Supervisor, Shutdown / Projects Supervisor, Site Services Supervisor
- `flag`: If set, marks the JD as out-of-scope (e.g. "Operator-level role — not supervisor")

## App Features

| Tab | Description |
|-----|-------------|
| All JDs | Search, filter by sector, view source text |
| By Sector | Side-by-side comparison of Coal / Minerals / Quarry |
| Supervisor Types | Categorisation of 9 supervisor archetypes |
| Qualifications | Frequency analysis with evidence & CSV export |
| Common Duties | Themed duty analysis with evidence & CSV export |
| Experience | Requirements table with CSV export |
| Gaps | Legislative requirements vs JD coverage (Red/Amber/Green) |
