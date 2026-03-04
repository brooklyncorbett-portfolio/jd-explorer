"""
Extract text from .docx and .pdf files in the jds/ folder and produce data.json
Used by GitHub Actions to auto-process new JDs when files are added.
Generates: curated metadata, raw texts, cleaned texts, and gaps config.
"""
import json, os, re, sys

try:
    from docx import Document
except ImportError:
    os.system(f"{sys.executable} -m pip install python-docx --quiet")
    from docx import Document

try:
    import fitz
except ImportError:
    os.system(f"{sys.executable} -m pip install pymupdf --quiet")
    import fitz

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JDS_DIR = os.path.join(ROOT, "jds")
OUTPUT = os.path.join(ROOT, "data.json")
OVERRIDES_PATH = os.path.join(ROOT, "scripts", "overrides.json")
GAPS_PATH = os.path.join(ROOT, "scripts", "gaps.json")

def extract_docx(fp):
    try:
        doc = Document(fp)
        return "\n".join([p.text.strip() for p in doc.paragraphs if p.text.strip()])
    except Exception:
        try:
            with open(fp, "r", encoding="utf-8") as f: return f.read()
        except: return ""

def extract_pdf(fp):
    try:
        doc = fitz.open(fp)
        t = "\n".join(page.get_text() for page in doc)
        doc.close()
        return t.strip()
    except: return ""

def extract_file(fp):
    return extract_pdf(fp) if fp.lower().endswith(".pdf") else extract_docx(fp)

def clean_md(text):
    t = re.sub(r'\[?\*{0,2}([^*\[\]]+?)\*{0,2}\]?\([^)]*\)', r'\1', text)
    t = re.sub(r'\*{1,2}([^*]+)\*{1,2}', r'\1', t)
    t = re.sub(r'!\[.*?\]\(.*?\)', '', t)
    t = re.sub(r'```.*?```', '', t, flags=re.DOTALL)
    t = re.sub(r'<!--.*?-->', '', t, flags=re.DOTALL)
    t = re.sub(r'&nbsp;', ' ', t)
    return t.strip()

def clean_text_for_evidence(raw):
    lines = raw.split("\n")
    cleaned = []
    skip_re = [
        r'https?://', r'www\.', r'\.com\.au', r'\.org\.au',
        r'seek\.com', r'indeed\.com', r'jinn\.careers',
        r'View all\s*jobs', r'Posted \d+d ago', r'Add expected salary',
        r'reviews·', r'out of 5 stars', r'\d+\.\d+ out of',
        r'Apply Now', r'Apply now', r'Click Apply',
        r'Unlock job insights', r'Hirer responsive', r'Salary match',
        r'Number of applicants', r'Your application will include',
        r'Pulled from the full job description',
        r'Full job description', r'Job details', r'Job type',
        r'Shift and schedule', r'^Location$', r'^Benefits$',
        r'^\$\d', r'^Casual/Vacation', r'^Full.time$',
        r'^Permanent$', r'^Day shift$', r'^Night shift$',
        r'^Shift work$', r'^Monday to Friday$',
        r'^Return to search', r'^Modify my search',
        r'\{=html\}', r'<!--', r'^&nbsp;', r'^-\s*$', r'^\*{1,2}$', r'^#\w+$',
    ]
    boilerplate = ['about our process','supporting a diverse workforce','diverse teams build',
                   'total rewards','respect and inclusion','inclusion & diversity',
                   'how to apply','pybar perks','what else you need to know','ready to build your future']
    content_hdrs = ['about the role','key responsibilities','responsibilities','about you',
                    'what you','major responsibilities','main duties','key accountabilities',
                    'the opportunity','the role','your new role','skills and experience',
                    'qualifications','education and experience','essential skills','requirements',
                    'about the project','about us','about the roles','about the position']
    in_bp = False
    for line in lines:
        s = line.strip()
        if not s: continue
        lo = s.lower().rstrip(':').strip()
        if any(b in lo for b in boilerplate) and len(lo) < 60:
            in_bp = True; continue
        if any(c in lo for c in content_hdrs) and len(lo) < 60:
            in_bp = False
        if in_bp: continue
        if any(re.search(p, s, re.IGNORECASE) for p in skip_re): continue
        c = re.sub(r'\*{1,2}([^*]+)\*{1,2}', r'\1', s)
        c = re.sub(r'^\s*[-\u2022\u25c6\u2666\u25ba\u25aa\u00b7\u2013]+\s*', '', c)
        c = re.sub(r'^\s*\d+\.\s+', '', c)
        c = re.sub(r'\{[^}]*\}', '', c)
        c = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', c)
        c = re.sub(r'!\[.*?\]', '', c)
        c = c.strip()
        if len(c) < 15: continue
        if re.match(r'^[\$\u00a3]\d', c): continue
        if re.match(r'^[\w.+-]+@[\w-]+\.[\w.]+$', c): continue
        if re.match(r'^[\d\s\-()]+$', c) and len(c) < 20: continue
        cleaned.append(c)
    return cleaned

def extract_sections(text):
    """Extract responsibilities and qualifications sections from JD text.
    Handles multi-line paragraphs by joining continuation lines.
    Filters boilerplate and non-content text."""
    lines = text.split("\n")
    resp, qual = [], []
    in_r, in_q = False, False
    rkw = ["key responsibilities","responsibilities","major responsibilities","main duties",
           "key accountabilities","what you'll be doing","your new role","the opportunity:","the role"]
    qkw = ["qualifications","about you","what you'll need","what you will need","what you will bring",
           "what we're looking for","skills and experience","education and experience",
           "essential skills","requirements","current tickets"]
    bkw = ["what we offer","what's on offer","why join","why mackellar","why bhp","why thiess",
           "about our process","how to apply","benefits","about us","about bechtel","about csi",
           "about redpath","working at","the fun stuff","about rio tinto","supporting a diverse",
           "diverse teams","what thiess can","total rewards","meandu mine","employer questions",
           "unlock job insights","who we are","ready to build","what minres can offer","about pybar",
           "what's on offer","pybar perks","what else you need","about our","who you are",
           "at bhp","at thiess","about the project"]
    # Bullet pattern: line starts with -, *, •, ◆, ♦, ►, ▪, ·, –, or numbered list
    bullet_re = re.compile(r'^[\-\*\u2022\u25c6\u2666\u25ba\u25aa\u00b7\u2013]+\s+|^\d+\.\s+')
    # Boilerplate line patterns to skip
    skip_pats = [r'@\w+\.com', r'inclusion@', r'please (?:log in|click|submit|note)',
                 r'recruitment process', r'criminal background', r'drug and alcohol',
                 r'equal opportunity', r'already employed', r'police.*check',
                 r'pre-employment', r'reference checks', r'right to work']
    
    current_section = None  # 'r' or 'q'
    current_item = []
    
    def flush_item():
        """Join current multi-line item and add to appropriate list."""
        if current_item:
            text = " ".join(current_item).strip()
            # Clean up artifacts
            text = re.sub(r'\s+', ' ', text)
            text = text.rstrip('.')
            if len(text) >= 15 and not any(re.search(p, text, re.IGNORECASE) for p in skip_pats):
                if current_section == 'r': resp.append(text)
                elif current_section == 'q': qual.append(text)
        current_item.clear()
    
    for line in lines:
        cl = clean_md(line).strip()
        lo = cl.lower().strip(":").strip()
        if not cl: continue
        
        # Check for section boundary keywords
        if any(b in lo for b in bkw) and len(lo) < 80:
            flush_item()
            current_section = None; continue
        if any(r in lo for r in rkw) and len(lo) < 80:
            flush_item()
            current_section = 'r'; continue
        if any(q in lo for q in qkw) and len(lo) < 80:
            flush_item()
            current_section = 'q'; continue
        
        if current_section is None: continue
        
        # Strip bullet marker
        stripped = bullet_re.sub('', cl).strip()
        if not stripped or len(stripped) < 5: continue
        
        # Is this a new bullet item or a continuation?
        is_bullet = bool(bullet_re.match(cl))
        
        if is_bullet:
            flush_item()
            current_item.append(stripped)
        else:
            # Continuation of previous item, or a standalone paragraph
            if current_item:
                # Append to current item
                current_item.append(stripped)
            else:
                # Standalone paragraph - only include if short (likely a single-line item)
                if len(stripped) < 120:
                    current_item.append(stripped)
                    flush_item()
                # Skip long paragraphs - they're usually descriptions, not list items
    
    flush_item()
    return resp, qual

def guess_sector(text):
    lo = text.lower()
    sc = {"Coal - Surface":0,"Coal - Underground":0,"Minerals - Surface":0,
          "Minerals - Underground":0,"Quarry":0,"Construction/Services":0,"Manufacturing (Non-mining)":0}
    for w in ["coal","bowen basin","coal mining safety","standard 11","carmichael","peak downs",
              "saraji","caval ridge","goonyella","moranbah","meandu","darling downs","tarong"]:
        if w in lo: sc["Coal - Surface"] += 2
    for w in ["underground","stope","heading","shaft","decline","raise bore","ventilation","hardrock","development experience"]:
        if w in lo: sc["Coal - Underground" if "coal" in lo else "Minerals - Underground"] += 3
    for w in ["copper","gold","bauxite","iron ore","hard rock","metalliferous","weipa","cloncurry","olympic dam","eva copper","eloise"]:
        if w in lo: sc["Minerals - Surface"] += 2
    for w in ["quarry","quarrying","crushing","screening","aggregate","gravel","pugmill"]:
        if w in lo: sc["Quarry"] += 3
    for w in ["construction","civil","infrastructure","site services","bechtel","see group"]:
        if w in lo: sc["Construction/Services"] += 2
    for w in ["manufacturing","factory","bagging plant","eagle farm","packaged products","bulwer island"]:
        if w in lo: sc["Manufacturing (Non-mining)"] += 3
    best = max(sc, key=sc.get)
    return best if sc[best] > 0 else "Minerals - Surface"

def guess_company(text, fn):
    known = {"BHP":["bhp"],"BUMA Australia":["buma"],"Bechtel":["bechtel"],
             "CSI Mining Services (MinRes)":["csi mining","mineral resources","minres"],
             "MacKellar":["mackellar"],"Thiess":["thiess"],"PYBAR (Thiess)":["pybar"],
             "Nitro Crushing":["nitro crushing"],"BQC Quarries":["bqc"],
             "Rio Tinto":["rio tinto"],"SEE Group":["see group"],"Redpath Mining":["redpath"],
             "MYNDSHIFT Group":["myndshift"],"Turner Talent":["turner talent"],
             "Cement Australia":["cement australia"]}
    lo = (text + " " + fn).lower()
    for co, kws in known.items():
        if any(kw in lo for kw in kws): return co
    return re.sub(r'\.(docx|pdf)$','',fn).replace("_"," ").strip()

def guess_role(text, fn):
    lines = [clean_md(l).strip() for l in text.split("\n") if l.strip()][:8]
    rw = ["supervisor","superintendent","team leader","operator","shift boss","foreman","leading hand","crew supervisor"]
    for line in lines:
        if any(w in line.lower() for w in rw) and len(line) < 80:
            c = re.sub(r'- job post$','',line,flags=re.IGNORECASE).strip()
            c = re.sub(r'^(Return to search results|Modify my search)\s*','',c).strip()
            if c: return c[:80]
    return re.sub(r'\.(docx|pdf)$','',fn).replace("_"," ").strip()

def extract_location(text):
    for p in [r"((?:Bowen Basin|Moranbah|Cloncurry|Weipa|Mount Isa|Carmichael|Cairns|Townsville|Brisbane|Rockhampton|Mackay|Kingaroy|Nanango|Eagle Farm|Pinkenba|Olympic Dam|Far North Queensland|Darling Downs)[^.\n]{0,30}(?:QLD|Queensland)?)"]:
        m = re.search(p, text, re.IGNORECASE)
        if m: return clean_md(m.group(1)).strip()[:80]
    m = re.search(r'(\w[\w\s,]+(?:QLD|Queensland)[\s\w]*\d{4}?)', text)
    if m: return clean_md(m.group(1)).strip()[:80]
    return "QLD"

def extract_roster(text):
    ct = clean_md(text)
    for p in [r'(\d+[/x]\d+(?:[/x]\d+)*\s*(?:D/?N|day/?night|rotating)?(?:\s*roster)?)',
              r'((?:FIFO|DIDO|BIBO)[^.\n]{0,30})',
              r'((?:even[- ]time|day\s*shift|afternoon\s*shift|full[- ]time)[^.\n]{0,20})']:
        m = re.search(p, ct, re.IGNORECASE)
        if m:
            r = m.group(1).strip()
            r = re.sub(r'\]?\(https?://[^)]*\)?', '', r)
            r = re.sub(r'\*+', '', r)
            r = re.sub(r'\s+', ' ', r).strip()
            if r: return r[:50]
    return "Not specified"

def main():
    if not os.path.isdir(JDS_DIR):
        print(f"No jds/ directory found")
        json.dump({"data":[],"raw_texts":{},"clean_texts":{},"gaps":[],"meta":{}}, open(OUTPUT,"w"))
        return

    overrides = {}
    if os.path.exists(OVERRIDES_PATH):
        with open(OVERRIDES_PATH) as f: overrides = json.load(f)
        print(f"Loaded {len(overrides)} overrides")

    gaps = []
    if os.path.exists(GAPS_PATH):
        with open(GAPS_PATH) as f: gaps = json.load(f)
        print(f"Loaded {len(gaps)} gap definitions")

    files = sorted(f for f in os.listdir(JDS_DIR) if f.endswith((".docx",".pdf")))
    print(f"Found {len(files)} JD files")

    results, raw_texts, clean_texts = [], {}, {}
    for i, fn in enumerate(files):
        text = extract_file(os.path.join(JDS_DIR, fn))
        # If extraction failed but we have a full_text override, use that
        if not text and fn in overrides and "full_text" in overrides[fn]:
            text = overrides[fn]["full_text"]
            print(f"  Using full_text override for {fn}")
        if not text: continue
        raw_texts[fn] = clean_md(text)
        clean_texts[fn] = clean_text_for_evidence(raw_texts[fn])
        resp, qual = extract_sections(text)
        entry = {"id":i+1,"filename":fn,"source":fn,
                 "company":guess_company(text,fn),
                 "role":guess_role(text,fn),"type":guess_role(text,fn),
                 "sector":guess_sector(text),
                 "location":extract_location(text),"roster":extract_roster(text),
                 "responsibilities":resp,"qualifications":qual}
        if fn in overrides:
            for k,v in overrides[fn].items(): entry[k] = v
            entry["_overridden"] = True
        results.append(entry)
        tag = " [override]" if fn in overrides else ""
        print(f"  {i+1:2d} | {entry['company']:<30s} | {entry['role'][:40]:<40s} | {entry['sector']:<24s} | R:{len(resp)} Q:{len(qual)} C:{len(clean_texts[fn])}{tag}")

    output = {"data":results,"raw_texts":raw_texts,"clean_texts":clean_texts,"gaps":gaps,
              "meta":{"total_files":len(files),"total_processed":len(results)}}
    with open(OUTPUT, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2, ensure_ascii=False)
    print(f"\nWrote {len(results)} JDs to {OUTPUT}")
    print(f"  Clean text lines: {sum(len(v) for v in clean_texts.values())}")

if __name__ == "__main__":
    main()
