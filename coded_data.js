// Auto-generated from analysis/coded_data/coded_jds.csv
// To regenerate: python3 scripts/build_coded_data.py

const CODE_LABELS = {
  "D1": "Supervise & lead crews/contractors",
  "D2": "Coach, mentor, develop team capability",
  "D3": "Allocate tasks & manage workloads",
  "D4": "Conduct safety leadership activities",
  "D5": "Ensure statutory compliance",
  "D6": "Promote & uphold safety culture",
  "D7": "Oversee daily operations",
  "D8": "Manage production performance & targets",
  "D9": "Coordinate resources",
  "D10": "Drive continuous improvement",
  "D11": "Plan & schedule work",
  "D12": "Reporting, budgets & administration",
  "D13": "Incident investigation & root cause analysis",
  "D14": "Permits / isolations / high-risk activity management",
  "D15": "Environmental & quality compliance",
  "D16": "Stakeholder engagement & cross-functional collaboration",
  "D17": "Training delivery & competency assurance",
  "D18": "Shift management & handover",
  "DP1": "Safety-focused",
  "DP2": "Strong communicator",
  "DP3": "People-focused / caring",
  "DP4": "Results-oriented",
  "DP5": "Hands-on / front-line leadership",
  "DP6": "Problem-solver / analytical",
  "DP7": "Initiative / proactive",
  "DP8": "Accountable / takes ownership",
  "DP9": "Coaching / mentoring orientation",
  "DP10": "Continuous-improvement mindset",
  "DP11": "Adaptability / flexibility",
  "DP12": "Decision-making under pressure",
  "DP13": "Time management & prioritisation",
  "DP14": "Relationship-building / stakeholder mgmt",
  "DP15": "Self-management / independent work",
  "DP16": "Inclusive leadership",
  "Q1": "Standard 11",
  "Q2": "Coal Surface supervisor competencies (S1/S2/S3/G2)",
  "Q3": "Coal Underground supervisor competencies (G1/G8/G9)",
  "Q4": "Open Cut Examiner (OCE)",
  "Q5": "Minerals & Quarry supervisor competencies (QMS123/G189)",
  "Q6": "QLD Coal Board Medical / ResHealth",
  "Q7": "First Aid Certificate",
  "Q8": "RII units (named)",
  "Q9": "Trade qualification",
  "Q10": "Engineering tertiary",
  "Q11": "Driver's licence",
  "Q12": "High Risk Work Licences",
  "Q13": "White Card",
  "Q14": "MSIC",
  "Q15": "Explosives Security Clearance",
  "Q16": "Generic Site Induction",
  "Q17": "VOC for equipment",
  "Q18": "Cert IV TAE (TAE40110)",
  "Q19": "Frontline Management cert",
  "Q20": "Shotfirer accreditation",
  "K1": "QLD CMSHA / Mine Safety Act knowledge",
  "K2": "QMSHA / Quarry Act knowledge",
  "K3": "Electrical legislation knowledge",
  "K4": "Equipment / plant knowledge",
  "K5": "Operational systems / software",
  "K6": "Risk management methodology",
  "K7": "Continuous improvement methodology (LEAN)",
  "K8": "Sector-specific technical knowledge",
  "K9": "Maintenance planning & scheduling",
  "K10": "Product specifications knowledge",
  "E1": "Years of supervisory experience",
  "E2": "Years of operational experience",
  "E3": "Sector experience: Coal Surface",
  "E4": "Sector experience: Coal Underground",
  "E5": "Sector experience: Hard rock / Minerals",
  "E6": "Sector experience: Quarry",
  "E7": "Equipment / operational specialism",
  "E8": "Workforce context (team size, FIFO)",
  "E9": "Project delivery / shutdown experience",
  "E10": "Industry breadth (heavy industry)",
  "E11": "Commodity / process specialism",
  "E12": "Equipment brand specialism",
  "E13": "Contractor management experience",
  "E14": "Multi-shift / continuous roster",
  "SP1": "Site Senior Executive (SSE)",
  "SP2": "Open Cut Examiner (statutory position)",
  "SP3": "Underground Mine Manager",
  "SP4": "ERZ Controller / Deputy",
  "SP5": "Ventilation Officer",
  "SP6": "Quarry SSE",
  "SP7": "Other named statutory position",
  "SP8": "Statutory UG Shift Supervisor (minerals/quarry)",
  "SP9": "Shotfirer (statutory position)"
};

const CODES_BY_JD = {
  "Anglo Dragline.docx": [
    {
      "category": "DUTY",
      "code": "D9",
      "evidence": "Coordinate personnel, equipment and resources for Dragline operations",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Ensure safe and cost-effective execution of dragline activities",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Enforce mine plan compliance and operational standards",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Ensure statutory compliance and adherence to safety systems",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Drive continuous improvement in dragline productivity and safety performance",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q2",
      "evidence": "S1/S2/S3 and G2 competencies (desirable)",
      "required": "desirable"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Supervisory experience in an open-cut coal mine",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "Significant coal mining experience",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Operational dragline experience",
      "required": "desirable"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K4",
      "evidence": "Understanding of open cut mining equipment and techniques",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "exceptional communication and people skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP10",
      "evidence": "positive culture of continuous improvement",
      "required": "not_specified"
    }
  ],
  "BHP Maintenance.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and support team to achieve operational targets safely and efficiently",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Foster a positive and productive culture built on trust, respect, and accountability",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D4",
      "evidence": "Promote and uphold BHP's HSEC standards, including proactive hazard management",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Identify and implement opportunities to improve performance, processes, and systems",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Collaborate cross-functionally to support continuous improvement and business outcomes",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Drive asset reliability and operational efficiency through effective maintenance strategies",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Coach, mentor, and develop team members to reach their full potential",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Utilise systems such as SAP to plan, manage, and report on operational performance",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Trade qualification or relevant tertiary qualification",
      "required": "desirable"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q10",
      "evidence": "tertiary qualification (highly desirable)",
      "required": "desirable"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Demonstrated leadership experience in mining, maintenance, or heavy industry",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E10",
      "evidence": "mining, maintenance, or heavy industry",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "SAP proficiency",
      "required": "required"
    }
  ],
  "BHP_lead_supervisor.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and support supervisors and execution teams to deliver work safely, to plan and within schedule",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Manage work fronts by escalating safety, cost or schedule risks as required",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D18",
      "evidence": "Set and communicate 24-hour priorities aligned to shutdown and project objectives",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Manage emergent work, ensuring approvals are obtained and scope is captured in schedule",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D14",
      "evidence": "Ensure work packs, permits and handovers are completed and signed off",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Ensure all work executed in accordance with BMA SHMS, permits and critical risk controls",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D14",
      "evidence": "Supervise high risk activities including lifts and isolations, confirming task readiness",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Respond to injuries and incidents, support medical response and return to work processes",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D13",
      "evidence": "Support incident investigations and ensure corrective actions are identified and closed out",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Maintain safety documentation, registers and reporting requirements",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D18",
      "evidence": "Support toolbox talks, shift handovers and operational briefings",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Identify and implement opportunities to improve safety, schedule efficiency and execution outcomes",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D13",
      "evidence": "Participate in root cause analysis and continuous improvement initiatives",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D13",
      "evidence": "Capture and communicate lessons learned during execution",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Experience supervising or coordinating work in construction, maintenance or heavy industry",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E10",
      "evidence": "construction, maintenance or heavy industry",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E9",
      "evidence": "Exposure to shutdown or mining project environments",
      "required": "desirable"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Strong leadership, organisational and communication skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "Demonstrated commitment to mine site safety systems and field leadership",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Trade qualification or Engineering background",
      "required": "desirable"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q10",
      "evidence": "Engineering background",
      "required": "desirable"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Proficiency in Microsoft Office (Excel, Word, Outlook; Project desirable)",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K9",
      "evidence": "Understanding of scheduling and work management systems e.g. SAP, Project",
      "required": "desirable"
    }
  ],
  "BUMA.docx": [
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Oversee daily mine operations ensuring safe and efficient production in line with Mine Safety and Inspection requirements",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "full compliance with the Mine Safety and Inspection Act and Regulations",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and manage personnel and equipment to optimise production activities and meet operational targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D3",
      "evidence": "Effectively allocate tasks and manage workloads within the production team",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "fostering a strong safety culture and proactive risk management",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "5+ years production experience in open-cut coal mining",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "2+ years supervisory experience in open-cut coal mining",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "open-cut coal mining",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K1",
      "evidence": "In-depth knowledge of QLD Coal Mining legislation",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Current C Class Driver's Licence",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q2",
      "evidence": "S1, S2, S3 and G2 Certificate",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP4",
      "evidence": "Proven ability to motivate teams and achieve business targets",
      "required": "required"
    }
  ],
  "EPSA.docx": [
    {
      "category": "DUTY",
      "code": "D4",
      "evidence": "Ensure maintenance activities prioritise safety, through effective hazard identification and risk management",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Ensure work order feedback and closeouts are completed accurately to improve maintenance efficiencies",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Provide leadership to the workshop maintenance crews to achieve the maintenance plan",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Assist the Maintenance Manager & Superintendents in implementing safety plans",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Track maintenance performance and ensure operational issues are managed and communicated in a timely manner",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q1",
      "evidence": "Certificate Standard 11",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Current Australian Drivers Licence",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q6",
      "evidence": "Current Coal Board Medical, or willingness to complete",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q7",
      "evidence": "First Aid Certificate",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q3",
      "evidence": "G1, G8, G9 and G2 tickets",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Australian trade qualified … mechanical or electrical discipline",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous experience in supervisory roles",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "extensive experience in the maintenance of mining plant and equipment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Effective people management and development experience and skills",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "Experience working for a medium to large mine operator/contractor",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "Demonstrate positive safety leadership skills and safety behaviour",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Well-developed verbal and written communication skills",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K9",
      "evidence": "Work Planning and scheduling skills",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K4",
      "evidence": "Strong knowledge of heavy mobile equipment maintenance",
      "required": "required"
    }
  ],
  "Foxleigh Mine.docx": [
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Leading and mentoring a crew of operators to deliver the plan and build a positive caring culture",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Leading and mentoring a crew of operators",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Ensure compliance with all statutory requirements and company policies and procedures",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Ensure the work area and mining activities are conducted in accordance with the sites safety and health system",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q4",
      "evidence": "Open Cut Examiner qualifications",
      "required": "required"
    },
    {
      "category": "STATUTORY_POSITION",
      "code": "SP2",
      "evidence": "Mining Supervisor / OCE … Open Cut Examiner qualifications",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Leadership experience within the mining environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Experience operating and/or supervising heavy earthmoving equipment",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Effective communicator",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP3",
      "evidence": "genuinely cares about the people you work with",
      "required": "required"
    }
  ],
  "Glencore.docx": [
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Liaise with key personnel and share ideas for overall improvement outcomes",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Developing and maintaining a cohesive team",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Promoting continuous improvement",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Engagement with Technical Services and Maintenance teams to make sure plans are accurate",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Driving continuous improvement opportunities through innovation and collaboration",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D4",
      "evidence": "Identify, assess and control workplace hazards",
      "required": "not_specified"
    },
    {
      "category": "DISPOSITION",
      "code": "DP14",
      "evidence": "Standout leadership capabilities that will allow you to liaise with stakeholders at all levels",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP10",
      "evidence": "extremely high drive to learn and grow your skills",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K6",
      "evidence": "Obtain an understanding of a SHMS",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Highly developed interpersonal, communication and leadership skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP11",
      "evidence": "Be open to change crews",
      "required": "required"
    }
  ],
  "Golding Contractors.docx": [
    {
      "category": "QUALIFICATIONS",
      "code": "Q8",
      "evidence": "RIIRIS301A – Apply Risk Management Processes",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q8",
      "evidence": "RIIOHS301A – Conduct Safety & Health Investigations",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q8",
      "evidence": "RIICOM301A – Communicate Information",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q8",
      "evidence": "RIIRIS402A – Implement & Maintain Risk Management Processes",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q7",
      "evidence": "Senior First Aid Certificate",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q16",
      "evidence": "Generic Surface Induction",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Current open drivers licence",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous experience in the supervision of staff within an Open Cut mining environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "Open Cut mining environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Operating skills on a wide range of Mining equipment",
      "required": "required"
    }
  ],
  "Golding OCE Kogan.docx": [
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Supervise and coordinate daily mining operations to meet production targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "meet production targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Exercise statutory duties as an Open Cut Examiner",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Promote and uphold a strong safety culture across crews and contractors",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D9",
      "evidence": "Monitor equipment utilisation and operational performance",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Identify and implement continuous improvement opportunities",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Lead, mentor, and develop operators and team members",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Complete reporting, shift handovers, and documentation accurately",
      "required": "not_specified"
    },
    {
      "category": "STATUTORY_POSITION",
      "code": "SP2",
      "evidence": "Exercise statutory duties as an Open Cut Examiner",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q4",
      "evidence": "Current OCE certification",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q1",
      "evidence": "Standard 11 and relevant site inductions",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "Demonstrated experience in open cut coal mining operations",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Proven supervisory experience leading mining crews",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K4",
      "evidence": "Strong understanding of mining equipment and production processes",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Effective communication and leadership skills",
      "required": "required"
    }
  ],
  "Golding.docx": [
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Ensure compliance with Golding Safety and Health Management Systems",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Supervise and mentor a 50~ person crew, promoting a culture of safety, teamwork, and performance",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Supervise and mentor a 50~ person crew",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Plan and coordinate daily tasks, reinforcing key priorities in pre-start meetings",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D4",
      "evidence": "reinforcing key priorities in pre-start meetings",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Provide technical guidance on truck and excavator operations to enhance team capabilities",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Oversee task execution to ensure alignment with operational goals",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous experience in a Pre-Strip Production Supervisor role on an Open Cut mine",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "Open Cut mine",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Operating skills on a wide range of Mining equipment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E8",
      "evidence": "50~ person crew",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q3",
      "evidence": "Current Mining Supervisor G1, G8, G9 and G2",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q1",
      "evidence": "Current Standard 11",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q6",
      "evidence": "Coal Board Medical",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Current open drivers licence",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q7",
      "evidence": "Current First Aid Certificate",
      "required": "required"
    }
  ],
  "LMP Project.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and coordinate daily project activities on mine site",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Ensure work completed safely and to a high standard",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Drive team performance and positive safety culture",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Work collaboratively with client teams and LMP leadership",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Provide hands-on support to crews; Ensure compliance with site safety and quality procedures",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Experience leading and mentoring site crews",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E9",
      "evidence": "Experience supporting project delivery against scope, schedule and targets",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP14",
      "evidence": "Strong working relationships with clients, subcontractors and suppliers",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "Commitment to safety, quality and compliance standards",
      "required": "required"
    }
  ],
  "MacKellar Leading hand.docx": [
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Operate heavy mining equipment including Excavators >400t, D10/D11 Dozers, Graders and Haul Trucks",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and support crew in a Leading Hand or supervisory capacity",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Identify continuous improvement opportunities and work collaboratively to implement solutions",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Maintain a strong commitment to safety at all times",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous experience in a Leading Hand or Supervisory role",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Extensive experience as a multi-skilled operator in a mining environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "mining environment",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q8",
      "evidence": "Relevant RII competencies signed off within the last 5 years",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q2",
      "evidence": "S1, S2, S3 and G2 Certificates",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q1",
      "evidence": "Current Standard 11",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Valid manual driver's licence",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP11",
      "evidence": "Contribute as a valued team member with flexibility across operations",
      "required": "required"
    }
  ],
  "MacKellar.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and supervise production crews to achieve daily safety and production targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "daily safety and production targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Promote and uphold the Site Safety Health Management System, environmental plans, and all statutory requirements",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "environmental plans",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Drive operational performance and continuous improvement",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D4",
      "evidence": "Facilitate and participate in pre-starts and safety meetings",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Build, coach and support high-performing teams",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Monitor production results and maintain accurate operational records",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q1",
      "evidence": "Current Standard 11 and Mining Supervisor competencies",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q3",
      "evidence": "Mining Supervisor competencies (G1, G2, G8, G9)",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Proven leadership experience in an open cut mining environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "open cut mining environment",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K1",
      "evidence": "Strong knowledge of WHS legislation and statutory obligations",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Excellent communication skills and demonstrated ability to mentor others",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP9",
      "evidence": "demonstrated ability to mentor others",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Competent user of Microsoft Office Suite",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "Strong commitment to safety with a history of positive safety outcomes",
      "required": "required"
    }
  ],
  "MacKellar__Maintenance_Supervisor.docx": [
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Lead by example to ensure maintenance activities are completed safely and effectively",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Coordinate maintenance and repairs in line with safety, time, and budget requirements",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Complete accurate maintenance documentation, reporting, and daily activity records",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D14",
      "evidence": "maintenance and repairs in line with safety, time, and budget requirements",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Build and maintain strong working relationships and high-performing teams",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Drive continuous improvement initiatives and implement practical solutions",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Promote and maintain a strong, positive safety culture across the team",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Trade qualification in Diesel Fitting or equivalent",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous experience as a Maintenance Supervisor on a mine site",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q3",
      "evidence": "Current Mining Supervisor — G1, G8, G9 (formerly S1, S2, S3)",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q8",
      "evidence": "Current Carry out the Risk Management Process — G2 (RIIRIS402D)",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q6",
      "evidence": "Current Queensland Coal Board Medical (or willingness to obtain)",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q1",
      "evidence": "Current Standard 11 (or willingness to obtain)",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Current Queensland Driver Licence",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP5",
      "evidence": "Lead by example",
      "required": "required"
    }
  ],
  "National Group .docx": [
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Deliver preventative maintenance and maximise equipment availability",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and supervise the maintenance team",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Assist on tools as required",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Demonstrate commitment to safety, continuous improvement and technical excellence",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Contribute to improvements for productivity and cost management",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Australian trade certificate",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "minimum 5 years post-trade experience",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "minimum 5 years post-trade experience",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q2",
      "evidence": "S1/S2/S3 and G2 tickets",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E12",
      "evidence": "Experience on Liebherr, Komatsu, CAT mobile mining equipment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Liebherr, Komatsu, CAT mobile mining equipment",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q6",
      "evidence": "Current QLD ResHealth Medical",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q1",
      "evidence": "Standard 11",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP6",
      "evidence": "Outstanding troubleshooting and diagnostic skills",
      "required": "required"
    }
  ],
  "Production Supervisor Yancoal.docx": [
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Ensuring compliance with the requirements of the Mine Safety and Inspection Act and Mines Safety Inspection Regulations",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Focus on creating a culture of care by being a visible safety leader",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "engaging, developing and coaching your team",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Promoting continuous improvement by challenging work practices and encouraging employee participation",
      "required": "not_specified"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Well-developed written and verbal communication skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP14",
      "evidence": "Ability to create positive working relationships and be adaptable to various communication styles",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP11",
      "evidence": "adaptable to various communication styles",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Previous experience in the operation of plant and machinery within a mining or heavy industry environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E10",
      "evidence": "mining or heavy industry environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous Supervisory experience within an open cut mining environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "open cut mining environment",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Intermediate computer skills with proficiency in Microsoft Office suite, SAP and similar systems",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Possess and maintain a current drivers licence",
      "required": "required"
    }
  ],
  "Regroup Australia.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and manage all aspects of mine production execution",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D9",
      "evidence": "Coordinate personnel, equipment and resources",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D3",
      "evidence": "Allocate tasks and manage shift rosters",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D18",
      "evidence": "manage shift rosters",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Support continuous improvement initiatives",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Supervise and coach team members",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Contribute to commercial and strategic site outcomes",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Minimum 3 years supervisory experience in mining",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "supervisory experience in mining",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Strong leadership, planning and organisational skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "Commitment to safety and positive team culture",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q14",
      "evidence": "National Police Clearance",
      "required": "required"
    }
  ],
  "Senior Production Supervisor MacKellar.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and coordinate multiple Production Supervisors to deliver daily mine plans and production targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "daily mine plans and production targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Analyse daily performance results and work with supervisors to address productivity, utilisation, and compliance gaps",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Provide hands-on leadership, coaching, and mentoring to Production Supervisors and Leading Hands",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Ensure all work areas operate in line with the site Safety and Health Management System",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Contribute operational insights into short- and medium-term planning, including scheduling, resourcing, and constraints",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Work closely with Technical Services, Drill & Blast, and Maintenance to align operational readiness and priorities",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Build a high-performance culture through strong people leadership, communication, and accountability",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D18",
      "evidence": "Maintain clear, consistent communication between site leadership and frontline teams",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Drive continuous improvement by identifying inefficiencies and implementing practical solutions",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Experience in a comparable role within a large-scale mining operation",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E8",
      "evidence": "large-scale mining operation",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q3",
      "evidence": "Current G1, G2, G8, and G9 Supervisor competencies",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "Proven leadership experience in an open-cut mining environment",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K1",
      "evidence": "Strong knowledge of WHS legislation and statutory obligations",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP11",
      "evidence": "A flexible, solutions-focused mindset with strong problem-solving capability",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP6",
      "evidence": "strong problem-solving capability",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP14",
      "evidence": "The ability to mentor, influence, and lead teams effectively",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Well-developed written and verbal communication skills",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Confidence using the Microsoft Office suite",
      "required": "required"
    }
  ],
  "Sojitz.docx": [
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Direct supervision of Run of Mine activities ensuring safe and productive execution of scheduled works",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D9",
      "evidence": "Ensure pit set up including traffic management, lighting and dump conditions is in place",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "Pit walls are kept on design and tidy",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "Pit floors are level and on grade",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "Haul roads maintained in good condition",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D18",
      "evidence": "Minimal delay to the shift handover by actively monitoring and motivating crews",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D9",
      "evidence": "Monitor plant and equipment to ensure operated in a manner to prevent damage and abuse",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q16",
      "evidence": "Current Queensland Generic Induction",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Current Drivers Licence",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP14",
      "evidence": "Strong interpersonal & negotiation skills to successfully liaise with stakeholders",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "Excellent safety mindset with the ability to positively influence the culture on-site",
      "required": "required"
    }
  ],
  "Supervisor Blast Crew  Goonyella Mine BMA.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and support Blast crew to deliver safe and efficient operations",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Oversee daily shot preparations, timing, QA/QC and blast initiation",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "QA/QC and blast initiation",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Collaborate with D&B Engineers, Shotfirers and Production teams",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Contribute to safety, teamwork and continuous improvement culture",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D17",
      "evidence": "Support training and coaching of team members",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "training and coaching of team members",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Champion inclusive working environment",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q20",
      "evidence": "Shotfirer accreditation and QLD tickets",
      "required": "required"
    },
    {
      "category": "STATUTORY_POSITION",
      "code": "SP9",
      "evidence": "Shotfirer accreditation",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous supervisory experience in D&B/blasting on a coal mine",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "D&B/blasting",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K8",
      "evidence": "Strong knowledge of drill & blast planning, field operations and safety",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP14",
      "evidence": "Ability to build and maintain relationships",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP12",
      "evidence": "Calm, inclusive, and proactive decision-making",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP16",
      "evidence": "inclusive working environment",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "Commitment to positive safety culture",
      "required": "required"
    }
  ],
  "TerraCom.docx": [
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Lead and mentor maintenance trades and operators",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and mentor maintenance trades and operators",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Execute maintenance priorities safely and efficiently",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Coordinate planned and breakdown maintenance activities",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D3",
      "evidence": "Task allocation and daily work planning",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Drive compliance with site systems and statutory obligations",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Provide performance feedback and management; Monitor attendance and leave",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Contribute to continuous improvement initiatives",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Work with Maintenance Superintendent and Production teams",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Relevant Mechanical or Electrical trade qualification",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Demonstrated supervisory experience in mining maintenance",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Strong experience maintaining heavy mobile mining equipment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "Ability to coordinate major equipment maintenance",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP13",
      "evidence": "Strong time management and prioritisation skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Interpersonal and communication capability",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Proficiency in PRONTO and Microsoft Office",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP6",
      "evidence": "Positive, solutions-focused leadership style",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "Strong commitment to safety and team culture",
      "required": "required"
    }
  ],
  "Thiess Maintenance Mackay.docx": [
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Ensure maintenance activities are delivered within allocated budgets and resource constraints",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Support the Maintenance Manager and Superintendents in the implementation of safety initiatives and plans",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D13",
      "evidence": "Actively participate in incident investigations and the implementation of corrective actions",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Build and maintain strong relationships with key internal and external stakeholders",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "A mechanical trade certificate",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q10",
      "evidence": "tertiary qualification in Mechanical Engineering",
      "required": "desirable"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "Extensive post-trade or relevant mobile maintenance experience within a mining environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "mining environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous experience in a supervisory or leadership role",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "strong commitment to health, safety, environment and community standards",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Well-developed written and verbal communication skills",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K9",
      "evidence": "Proven capability in maintenance planning and condition monitoring",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP12",
      "evidence": "The ability to perform effectively in a high-pressure operational environment",
      "required": "required"
    }
  ],
  "Thiess.docx": [
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "A trade qualification or equivalent experience",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "Substantial experience in infrastructure maintenance within a mining or camp environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Demonstrated leadership experience in a site-based maintenance team",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K9",
      "evidence": "Exposure to maintenance planning and scheduling",
      "required": "desirable"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q2",
      "evidence": "Required Coal Mining competencies",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K1",
      "evidence": "Strong understanding of the Coal Mining Safety and Health Act 1999",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Excellent communication, problem-solving and stakeholder engagement skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP6",
      "evidence": "problem-solving",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP14",
      "evidence": "stakeholder engagement skills",
      "required": "required"
    }
  ],
  "WorkPac.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and supervise production crews",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Promote and enforce safety systems and procedures",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Drive operational performance and continuous improvement",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D4",
      "evidence": "Facilitate pre-start meetings and safety briefings",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Coach and mentor team members",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Monitor production outcomes and maintain accurate records",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Excavator and Dragline experience (minimum 5 years)",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "minimum 5 years",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q1",
      "evidence": "Current Standard 11",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q3",
      "evidence": "Mining Supervisor competencies (G1/G2/G8/G9)",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Proven leadership in open-cut mining",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "open-cut mining",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Strong communication and mentoring capability",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Microsoft Office Suite",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "Demonstrated commitment to safety",
      "required": "required"
    }
  ],
  "YanCoal.docx": [
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Sound communication, analytical and problem solving skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP6",
      "evidence": "analytical and problem solving skills",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Basic computer literacy",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP15",
      "evidence": "Ability to self-manage and prioritise work load",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP13",
      "evidence": "prioritise work load",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP7",
      "evidence": "Ability to exercise initiative and work both independently and co-operatively",
      "required": "required"
    },
    {
      "category": "DUTY",
      "code": "D4",
      "evidence": "Skilled in hazard identification and responsive to safety issues",
      "required": "not_specified"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K6",
      "evidence": "Sound understanding of risk awareness, hazard identification",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "strong commitment to safety performance",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K4",
      "evidence": "Well-developed knowledge of equipment maintenance practices",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous experience in the supervision of staff within a mining or heavy industry environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E10",
      "evidence": "mining or heavy industry environment",
      "required": "required"
    },
    {
      "category": "DUTY",
      "code": "D3",
      "evidence": "Experienced at prioritising tasks and allocation of same to crew members",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q2",
      "evidence": "Current or willing to obtain Supervisor competencies",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q1",
      "evidence": "Current Standard 11 Mine Induction",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Current Queensland Driver's licence",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Trade Qualification",
      "required": "required"
    }
  ],
  "Development Supervisor.docx": [
    {
      "category": "DUTY",
      "code": "D17",
      "evidence": "Broadmeadow is pleased to offer leadership development opportunities as a Development Supervisor",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E4",
      "evidence": "Demonstrated experience working in underground coal",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "Proven experience working in Longwall or Development environments",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "high level of interpersonal skills, including collaboration and conflict resolution",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP6",
      "evidence": "Strong decision making and problem-solving skills",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Demonstrated leadership and team supervisory skills",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K6",
      "evidence": "Understanding of risk management and how it is applied within mining",
      "required": "required"
    }
  ],
  "Jennchem.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "assist in pumpable crib and ventilation work",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q1",
      "evidence": "Current Standard 11 Statement of Attainment",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q6",
      "evidence": "Current QLD Coal Board Medical",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Current Drivers Licence",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Trade Certificate",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q3",
      "evidence": "G1-G8-G9 & G2 (Supervisors)",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E4",
      "evidence": "Operator experience in underground coal",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "Installation of Ventilation Control Devices; Pumpable Cribs; Secondary Support; Backfilling Operations",
      "required": "desirable"
    }
  ],
  "CSI_Mining_Services.docx": [
    {
      "category": "DUTY",
      "code": "D3",
      "evidence": "Organise and schedule mining crew to meet daily production targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "daily production targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Management of production and mechanical breakdown issues",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Provide comprehensive reporting on production achievements, challenges and issues",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Provide effective guidance, coaching and mentoring to site personnel",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Maintain and foster a working environment which promotes safety",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Development of working relationships with key stakeholders on site",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Work closely with maintenance to minimise downtime and ensure fast turnaround on breakdowns",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Directly monitor fleet productivity in real time, taking immediate corrective action when output drops below plan targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Identify and remove bottlenecks in haulage, loading, and dumping operations to maximise operating time",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "Minimum 5 years' experience in a Mining and Production Environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E5",
      "evidence": "Mining and Production Environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous experience successfully leading a team",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP6",
      "evidence": "Demonstrated strong problem solving, lateral thinking and analytical skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP13",
      "evidence": "Excellent time management and daily routine rituals",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Strong communication skills with ability to coach and mentor others",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP9",
      "evidence": "ability to coach and mentor others",
      "required": "required"
    }
  ],
  "Glencore 2.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Manage a team of approximately 10 employees and contractors",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D9",
      "evidence": "Ensuring reagent is available for both concentrators",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D9",
      "evidence": "Mill media addition and management for the zinc concentrator",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D9",
      "evidence": "Ownership and management of a small fleet of vehicles and equipment",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Take ownership and accountability to meet agreed targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Provide mentoring to and effectively communicate with your crew",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D17",
      "evidence": "Oversee and maintain compliance for the services crew with safety and training",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous experience with frontline leadership",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "minimum of 5 years working in the operational side of the mining industry",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E5",
      "evidence": "operational side of the mining industry",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP5",
      "evidence": "ability to lead by example and a strong work ethic",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "genuine interest in leading safe teams",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Experience in budget control, Microsoft Office Suite, Ellipse, SAP and/or similar software",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K8",
      "evidence": "Technical knowledge in Filtration plant operations",
      "required": "desirable"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "Filtration plant operations",
      "required": "desirable"
    }
  ],
  "Glencore Light Vehicle.docx": [
    {
      "category": "DUTY",
      "code": "D18",
      "evidence": "Responsible for ensuring shift handover is successfully managed",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "optimization of assigned resources and continuous improvement to minimize cost and waste",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Trade Qualified",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K4",
      "evidence": "Thorough knowledge of asset maintenance methodologies",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K4",
      "evidence": "Working knowledge of contemporary equipment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "Demonstrated experience in Light Vehicle Repair Industry",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E5",
      "evidence": "5 years underground mining experience",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Proficient in Microsoft Office Suite",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K6",
      "evidence": "Demonstrated knowledge of risk management, safety systems and legislative requirements for mining operations",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E8",
      "evidence": "Experience supervising and developing large work teams",
      "required": "required"
    }
  ],
  "Glencore MPS mech.docx": [
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Ensure safe and timely completion of mechanical maintenance tasks",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Manage crew performance and development",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Manage shutdowns and planned maintenance activities",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Plan and control maintenance operations",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Conduct compliance audits",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Build an effective team through coaching and mentoring",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "Minimum 5 years trade experience",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Mechanical fitter trade qualification",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E13",
      "evidence": "Experience managing contracting teams and small projects",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Heavy industrial fixed plant maintenance experience",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q2",
      "evidence": "S1/S2/S3 competencies",
      "required": "desirable"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Strong decision-making and communication skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP12",
      "evidence": "Strong decision-making",
      "required": "required"
    }
  ],
  "Glencore Primary Smelting.docx": [
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Coordinate and manage operational safety, production and risk for IsaSmelt furnaces",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Build teamwork and positive team culture",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Develop skills and capability within the team",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Challenge and manage operational variation",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "Maintain housekeeping standards",
      "required": "not_specified"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K8",
      "evidence": "Sound knowledge of Smelting (IsaSmelt advantageous)",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "IsaSmelt",
      "required": "desirable"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Supervisory and leadership experience",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP5",
      "evidence": "Lead by example with strong work ethic",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "Safety as a core value",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "Minimum 4 years in smelting or mining industry",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E5",
      "evidence": "smelting or mining industry",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K8",
      "evidence": "Technical knowledge and organisational skills",
      "required": "required"
    }
  ],
  "Macmahon.docx": [
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Lead safe work practices by driving a proactive safety culture and ensuring full compliance with site standards",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "full compliance with site standards",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Execute the mine plan, ensuring production activities align with short term schedules and operational targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Provide leadership and coaching to operators to build capability, maintain engagement and support performance",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Ensure accurate reporting through shift logs, production data, environmental checks and incident documentation",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "environmental checks",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D13",
      "evidence": "incident documentation",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Extensive surface mining experience as a Production Supervisor, Leading Hand or Senior Operator",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E5",
      "evidence": "surface mining experience",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "strong, proven commitment to safety",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "excellent communication skills across all levels",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K4",
      "evidence": "Background and technical knowledge of a range of equipment",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K1",
      "evidence": "Detailed knowledge of mining and safety regulations",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q19",
      "evidence": "Certification in Frontline Management",
      "required": "required"
    }
  ],
  "Metro Mining.docx": [
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Supervise and coordinate daily mining activities to meet production targets and quality standards",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "quality standards",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Ensure adherence to safety protocols, environmental regulations, and operational procedures",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "environmental regulations",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Monitor equipment performance and maintenance schedules to minimise downtime",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Maintain accurate records of production activities, equipment usage, and safety incidents",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Conduct regular performance evaluations and provide feedback to team members to support their professional development",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E5",
      "evidence": "Relevant surface mining qualification or equivalent experience and knowledge",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q18",
      "evidence": "Cert IV Training & Assessment",
      "required": "desirable"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q2",
      "evidence": "S1, S2 & S3 competencies required",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q8",
      "evidence": "RII Certificates in Articulated Dump Trucks, Dozer, Excavator, Grader",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "Minimum 5 years' previous experience in a similar role/industry",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Intermediate to advanced Microsoft Office skills",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Proven work history in a mining operation with experience operating mobile mining plant",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K1",
      "evidence": "Strong knowledge of safety regulations, environmental standards, and best practices in mining operations",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP14",
      "evidence": "Ability to build positive relationships with your team",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP6",
      "evidence": "Effective problem-solving skills, clear verbal communication skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP12",
      "evidence": "make informed decisions under pressure",
      "required": "required"
    }
  ],
  "Projects_Crew_Supervisor.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Supervise and coordinate daily crew activities on project-specific mining operations",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead a small team to complete tasks safely, on time, and within budget",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Ensure compliance with safety procedures, environmental standards, and operational requirements",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "environmental standards",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D3",
      "evidence": "Allocate tasks and resources efficiently to optimise productivity and meet project deadlines",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D4",
      "evidence": "Conduct regular safety briefings, toolbox talks, and maintain high safety standards",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Monitor progress against project plans, adjusting activities and resources",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Report on team performance, safety issues, and operational concerns to senior leadership",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Identify and resolve operational issues including equipment failures, safety hazards, and resource constraints",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "Minimum 5 years of experience in mining",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E5",
      "evidence": "experience in mining",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous experience as a Crew Supervisor or similar leadership role",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Strong leadership and team management skills",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K8",
      "evidence": "Solid understanding of mining operations including project-based work",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K6",
      "evidence": "In-depth knowledge of safety regulations, environmental compliance, and risk management",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q2",
      "evidence": "S1, S2, S3",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q12",
      "evidence": "Work at Heights; Confined Space",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Manual Drivers Licence — C class",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E9",
      "evidence": "project-specific mining operations",
      "required": "required"
    }
  ],
  "RSA Contractors .docx": [
    {
      "category": "DISPOSITION",
      "code": "DP3",
      "evidence": "Demonstrate respect and positive workplace behaviours",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Prioritise safety in all operations",
      "required": "not_specified"
    },
    {
      "category": "DISPOSITION",
      "code": "DP11",
      "evidence": "Be adaptable and solve operational problems",
      "required": "not_specified"
    },
    {
      "category": "DISPOSITION",
      "code": "DP15",
      "evidence": "Work independently and as part of a team",
      "required": "not_specified"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Communicate clearly with crews and management",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Experience operating heavy mining machinery",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Demonstrated experience supervising open pit mining operations (gold preferred)",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "gold preferred",
      "required": "desirable"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K8",
      "evidence": "Competent in reading pit/dump plans, survey data, drill and blast plans",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q2",
      "evidence": "S1/S2/S3 competencies",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q1",
      "evidence": "Standard 11",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Australian Driver's Licence",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q13",
      "evidence": "White Card",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Strong communication and interpersonal skills",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Microsoft Office proficiency",
      "required": "required"
    }
  ],
  "Rio.docx": [
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Maintaining a strong level of control over daily operating tasks",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Working towards increasing equipment productivity, reliability and availability to achieve production targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Focusing on executing the weekly operational plan",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Coaching, mentoring and developing team members",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "establishing a strong culture of operational excellence",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous leadership experience in a highly regulated operational environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "Sizing and Beneficiation plant experience with exposure across ship loading operations",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q14",
      "evidence": "Marine Security Identification Card or the ability to obtain one",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP14",
      "evidence": "Strong stakeholder engagement, communication and interpersonal skills",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Intermediate computer skills, including experience using Microsoft Office Suite applications as well as SAP",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q8",
      "evidence": "RIIWHS301 Conduct Safety and Health Investigations",
      "required": "desirable"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q8",
      "evidence": "RIICOM301 Communicate Information",
      "required": "desirable"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q18",
      "evidence": "Certificate IV in Training and Assessment - TAE40110",
      "required": "desirable"
    }
  ],
  "Stellar Recruitment.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Supervise and support a small team of field technicians",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Participate in field work alongside the team",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Coordinate logistics for field activities and mobilisation",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "Undertake and oversee environmental monitoring",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Ensure safe activities in line with regulations",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Liaise with technical and management teams",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous experience supervising small teams in exploration programs",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "exploration programs",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP5",
      "evidence": "Strong hands-on capability",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E5",
      "evidence": "Experience in small or growing organisations (mining exploration preferred)",
      "required": "desirable"
    },
    {
      "category": "DISPOSITION",
      "code": "DP13",
      "evidence": "Strong organisational and logistical coordination skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP15",
      "evidence": "Ability to work autonomously in remote locations",
      "required": "required"
    }
  ],
  "Thiess_supervisor_mining.docx": [
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Build and maintain relationships with all stakeholders including Technical Services and Maintenance teams",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D13",
      "evidence": "Manage, report, and investigate all incidents within the mining operation and apply corrective actions",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D4",
      "evidence": "Complete safety observations and critical control audits within own work area",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Execute weekly plan and highlight any shortfalls that could disrupt operations",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D18",
      "evidence": "Attend daily production meeting and provide accurate summary of the previous 24 hours",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Support 'Speak Up' culture, encouraging employees to align with expected behaviours",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D17",
      "evidence": "Support and develop operators ensuring competencies are kept up to date",
      "required": "not_specified"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Proven leadership and people management skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP13",
      "evidence": "Excellent organisational, communication, and presentation skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP6",
      "evidence": "Prioritising and problem-solving skills",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K8",
      "evidence": "A solid understanding of the processes involved with hard rock mining",
      "required": "required"
    }
  ],
  "Brightstar Resources.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Supervision of underground diamond drillers",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Dewatering checks; Pump maintenance",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Mine site and camp inspections",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Experience in a similar role",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q5",
      "evidence": "Statutory Underground Shift Supervisor ticket",
      "required": "required"
    },
    {
      "category": "STATUTORY_POSITION",
      "code": "SP8",
      "evidence": "Statutory Underground Shift Supervisor ticket",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q17",
      "evidence": "VOC for Integrated Tool Carrier",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP15",
      "evidence": "Ability to work independently with strong problem solving abilities",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP6",
      "evidence": "strong problem solving abilities",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E8",
      "evidence": "Past experience in supervising small underground crews",
      "required": "required"
    }
  ],
  "Evolution Mining.docx": [
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Certificate III in Engineering - Mechanical Trade",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q5",
      "evidence": "S123 Supervisor training",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "commitment to safety. You have a sharp eye for hazards and risk mitigation",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP12",
      "evidence": "Strong execution skills. You make smart tactical decisions in a dynamic environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Solid supervisory experience",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP3",
      "evidence": "lead and motivate a crew in an industrial setting",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "current C Class Driver's License",
      "required": "required"
    }
  ],
  "Glencore Electrical.docx": [
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Provide safety leadership and ensure compliance with electrical installation legislation and Mt Isa Mines policies",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "ensure compliance with electrical installation legislation",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Supervise and administer the Electrical Maintenance team including contractors at George Fisher Mine",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Develop and apply the weekly work schedule",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Develop a positive team culture through mentoring and coaching to build employee role competency",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Optimise assigned resources and drive continuous improvement to minimise cost and waste",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Develop and adhere to budget; manage team administration",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Trade Qualification – Electrician (licensed)",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q5",
      "evidence": "S123 statutory competency",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "5+ years mining experience",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "5+ years Electrical Fixed Assets experience",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous supervisor experience leading large work teams",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E8",
      "evidence": "leading large work teams",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K3",
      "evidence": "Demonstrated knowledge of risk management and safety systems",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K6",
      "evidence": "risk management",
      "required": "required"
    }
  ],
  "Maintenance_Supervisor.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and supervise a team of maintenance technicians, providing guidance, support and mentorship",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "providing guidance, support and mentorship",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Ensure all site and workshop activities comply with health, safety, training, environmental and statutory requirements",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "environmental and statutory requirements",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Manage and conduct personal risk assessments and Job Safety Analyses (JSAs)",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D14",
      "evidence": "Conduct preventative maintenance inspections proactively",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Oversee maintenance execution to ensure compliance with quality standards",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "compliance with quality standards",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D3",
      "evidence": "Assign tasks effectively to optimise resource utilisation",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Maintain accurate maintenance records including work orders, daily reports and equipment history",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Manage and review inventory of spare parts, tooling and equipment",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Heavy Duty Diesel Fitter/Mechanic trade qualifications",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Demonstrated Supervisor experience with underground and heavy-duty equipment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "underground and heavy-duty equipment",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Proficiency with Computerised Maintenance Management Systems (CMMS)",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP13",
      "evidence": "Strong planning and organisational skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP7",
      "evidence": "High level of initiative with ability to perform under pressure",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP12",
      "evidence": "ability to perform under pressure",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Strong leadership capability and communication skills",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Valid manual driver's licence",
      "required": "required"
    }
  ],
  "South32 Cannington Mine.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Supervise mechanical construction and installation activities across underground and surface capital projects",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D9",
      "evidence": "Coordinate contractors and site crews to deliver works safely and in line with approved schedules",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Oversee installation of mechanical equipment, piping systems, structural components and ventilation infrastructure",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "Monitor quality control, alignment, installation tolerances and commissioning readiness",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Manage work orders and track progress using SAP and reporting systems",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Participate in planning and coordination meetings with engineering, operations and project stakeholders",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Identify and mitigate execution risks impacting schedule, cost or safety",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Drive strong contractor performance and accountability on site",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Promote a culture of safety leadership and continuous improvement",
      "required": "not_specified"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "practical, safety-focused mechanical leader",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "Minimum 5+ years experience within a mining mechanical environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E5",
      "evidence": "mining mechanical environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "5+ years experience in a supervisory or leading hand role",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E9",
      "evidence": "Proven experience supervising underground capital projects",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "Experience delivering ventilation systems, pump stations, or fixed plant installations",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Trade qualification in Mechanical Fitting / Boilermaking / Heavy Mechanical or equivalent",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K8",
      "evidence": "Strong understanding of mechanical installation standards and QA/QC processes",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E13",
      "evidence": "Experience working with contractors in a project delivery environment",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Working knowledge of SAP and Microsoft Office systems",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP6",
      "evidence": "Ability to resolve day-to-day technical and site coordination challenges",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Strong communication skills across multidisciplinary project teams",
      "required": "required"
    }
  ],
  "Underground_Shift_Supervisor.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Provide day to day supervision, mentorship and leadership to the underground team",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "mentorship and leadership",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Monitor and supervise underground mining activities",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Promote positive safety behaviours and build a culture of accountability, ownership and safety first thinking",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Use digital tools (e.g. INX) to record and monitor tasks",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Communicate effectively with PYBAR team members and relevant stakeholders",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Minimum 2 years' experience as Shift Supervisor or similar",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "Minimum 10 years' experience in Underground Hardrock mining",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E5",
      "evidence": "Underground Hardrock mining",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "Development experience (essential)",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP14",
      "evidence": "Strong stakeholder engagement and leadership capabilities",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q7",
      "evidence": "Current First Aid Certificate",
      "required": "desirable"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q15",
      "evidence": "Queensland Explosives Security Clearance",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q5",
      "evidence": "QMS123/G189",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "digital tools (e.g. INX)",
      "required": "not_specified"
    }
  ],
  "Boral Narangba.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Supervise and manage staff and contractors, including coaching, mentoring and managing shift schedules and work plans",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "coaching, mentoring",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D3",
      "evidence": "managing shift schedules and work plans",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D17",
      "evidence": "Safety management: training staff on safe working practices and conducting regular safety audits",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D4",
      "evidence": "conducting regular safety audits",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Effective management of production and maintenance activities",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Promote and enforce safety processes and protocols to meet performance outcomes",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "Support key functionalities of the quarry including maintenance, plant performance, safety, environment and quality control",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E6",
      "evidence": "Demonstrated experience in hard rock quarry operations, mining and/or fixed and mobile plant operations",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K4",
      "evidence": "Strong knowledge of hard rock quarrying and crushing processes",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP7",
      "evidence": "Strong leadership attributes including initiative to identify, manage and solve issues",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K7",
      "evidence": "Experience in LEAN Manufacturing (highly regarded)",
      "required": "desirable"
    }
  ],
  "Boral.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Supervision and management of staff and contractors",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D4",
      "evidence": "Safety management including audits and compliance",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "audits and compliance",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Effective management of production and maintenance activities",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Ensure operational targets are met safely and efficiently",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E6",
      "evidence": "Hard rock quarry, mining or plant operations experience",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K4",
      "evidence": "Strong knowledge of quarrying and crushing operations",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Strong leadership attributes",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K7",
      "evidence": "LEAN Manufacturing experience (desirable)",
      "required": "desirable"
    }
  ],
  "Byrne Bros.docx": [
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Safe and efficient operation of quarry plant and equipment including excavators, loaders, forklifts and water carts",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Supervision and coordination of quarry personnel when required",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D4",
      "evidence": "Conducting pre-start meetings and toolbox talks",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Ensuring compliance with company policies, safety systems and site procedures",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Carrying out minor maintenance and assisting with repairs to plant and equipment",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "Maintaining a clean, safe and organised work environment",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Ensuring accurate recording of materials and operation of the weighbridge where required",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Providing excellent customer service to internal and external customers",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E6",
      "evidence": "Previous experience in quarry operations or similar heavy industry",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "Strong commitment to workplace safety",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Experience operating heavy plant and machinery",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Good communication and organisational skills",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q5",
      "evidence": "Mining Supervisor S123 qualification",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q7",
      "evidence": "Current First Aid Certificate",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q12",
      "evidence": "Relevant High Risk Work Licences",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Current driver's licence",
      "required": "required"
    }
  ],
  "Heidelberg Materials.docx": [
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Coordinate all maintenance activities including shutdowns with internal and external teams",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Ensure all plant and equipment are operating well within the statutory requirements",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Monitor improvements to maintenance tasks and processes and plant performance",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D12",
      "evidence": "Be responsible for Fixed Plant budget and cost control",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Mentor and develop a team of established apprentices",
      "required": "not_specified"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K4",
      "evidence": "Possess a strong mechanical aptitude in crushing plants and equipment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous experience in a similar role",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q9",
      "evidence": "Have a Boilermaker/Fitter qualification",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "Have experience in pneumatic and hydraulic systems",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "familiar with using SAP and have a strong grasp of MS Excel",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP12",
      "evidence": "team player who can multi-task and make quick effective decisions under pressure",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP14",
      "evidence": "positive presence in building strong and effective relationships with key internal and external stakeholders",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP6",
      "evidence": "natural problem solver and enjoy carrying out root cause analysis and troubleshooting",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q12",
      "evidence": "Competencies in Confined Spaces/Working at Heights/EWP and Forklift/High Risk Work licences",
      "required": "required"
    }
  ],
  "Quarry supervisor copy.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and motivate a medium-sized team of quarry workers and subcontractors to work safely and productively",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Make sensible, safe and efficient decisions to optimize quarry resource and equipment efficiencies",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "Monitor material flow and quality, adjusting processes to meet production targets and maintain product specifications",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "maintain product specifications",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "Contribute to a positive safety culture by ensuring procedures are followed and documented",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D10",
      "evidence": "Strive to improve production processes and the quality of materials produced",
      "required": "not_specified"
    },
    {
      "category": "DISPOSITION",
      "code": "DP5",
      "evidence": "Hands on - lead by example",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Greater than 5 years of hands-on supervisory experience working in a quarry",
      "required": "desirable"
    },
    {
      "category": "EXPERIENCE",
      "code": "E6",
      "evidence": "quarry",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q12",
      "evidence": "Certification in different types of plant and equipment, health and safety, and risk management systems",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K10",
      "evidence": "Familiarity with TMR quarry product specifications",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "Experience in crushing and screening plants",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K4",
      "evidence": "Strong mechanical aptitude and a mechanical trade background",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP13",
      "evidence": "Ability to lead by example, prioritize tasks, and meet timeframes and deadlines",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Excellent communication and leadership skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "Strong safety focus and a proactive approach to maintaining a positive safety culture",
      "required": "required"
    }
  ],
  "Quarry_Supervisor_NITRO_CRUSHING.docx": [
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Supervise and coordinate mobile crushing operations, ensuring efficiency and compliance with safety standards",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "compliance with safety standards",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Operate and oversee mobile crushing equipment including jaw and cone crushers, screens, and conveyors",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "Lead, train, and mentor a team of maintainer/operators, fostering a strong safety and performance culture",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D4",
      "evidence": "Conduct routine inspections, identify operational issues, and assist with maintenance tasks",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "Ensure a clean, level, and well-maintained work area, including proper material blending and effective benching",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Communicate effectively with site management and stakeholders to optimise operations",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Previous experience in a supervisory role within mobile crushing, quarrying, or mining operations",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E6",
      "evidence": "mobile crushing, quarrying",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K4",
      "evidence": "Strong knowledge of mobile crushing equipment operation and maintenance",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Current open Australian driver's license",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q17",
      "evidence": "Nationally accredited tickets for wheel loader and/or excavator operation",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q5",
      "evidence": "S1/S2/S3 mining supervisor ticket",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Strong leadership skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP7",
      "evidence": "Proactive approach to safety, compliance, and operational excellence",
      "required": "required"
    }
  ],
  "Supervisor_Rev_2_0625.pdf": [
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Undertake quarrying and sales activities to achieve key objectives in Customer Service, Quality, WHS and Environmental Management",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D15",
      "evidence": "Quality, WHS and Environmental Management",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D4",
      "evidence": "Conduct and record prestart meetings when required",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Direct and supervise daily roles of the workforce",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D17",
      "evidence": "Ensure all workers (including contractors) have appropriate skills, expertise and competencies for delegated tasks",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Ensure loader operators are aware of correct loading requirements and weights of trucks (Chain of Responsibility)",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D17",
      "evidence": "Provide appropriate training to ensure workers comply with quality, safety and environmental standards",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D9",
      "evidence": "Carry out checks to ensure contractor's plant and equipment is fit for purpose",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "Ensure policies, procedures and objectives are implemented and observed within the operation",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Assist Site Senior Executive with task preparation, planning and development of Safe Work Procedures",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Act as secondary support to SSE and Weighbridge Controller in their absence",
      "required": "not_specified"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q8",
      "evidence": "RIIRIS301E Apply risk management processes",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q8",
      "evidence": "RIIWHS301E Conduct safety and health investigations",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q8",
      "evidence": "RIICOM301E Communicate information",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E6",
      "evidence": "Proven hands-on experience in fixed and mobile crushing/screening and quarrying",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K4",
      "evidence": "Strong mechanical aptitude",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Excellent verbal and written communication skills",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "Computer skills including MS Office products",
      "required": "required"
    }
  ],
  "UG Supervisor.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Underground Outbye Supervisors … to complement our elite team at Broadmeadow Mine in Outbye Services",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Outbye Services (Ventilation, Secondary support & Road works)",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "Minimum 12mths installing & maintaining VCDs/ Secondary support or UG Roadworks experience",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E4",
      "evidence": "underground coal operations … Broadmeadow Mine",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E11",
      "evidence": "installing & maintaining VCDs/ Secondary support or UG Roadworks",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q3",
      "evidence": "S1, S2, S3 and G2 (Supervisors)",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "demonstrate a strong safety focus",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP3",
      "evidence": "Positive attitude",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q17",
      "evidence": "Relevant underground equipment tickets and signed off training transcript",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "Good communication skills",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q6",
      "evidence": "QLD Coal Board Medical or Ability to Obtain",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Valid Driver's License or ID",
      "required": "required"
    }
  ],
  "BHP.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Site Responsible Person for Technology resources on site (permanent and contractors)",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "ensures your team works within Safe Systems of Work in a changing work environment",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D3",
      "evidence": "Manages and coordinates tasks and resources available on site to ensure incidents and events can be resolved",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "Review Maintenance work tasks/schedules and work with planners ensuring good work management practices are followed",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Collaborate with other departments (Security, Infrastructure, Workshops, Remote Teams, Applications, Networks and vendors)",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "Works with the Mineral Australia Coal Technology Delivery Team representatives, Project Managers and I&S Engineering",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D13",
      "evidence": "Acts as the escalation contact for Technology site operations issues",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E10",
      "evidence": "background in Operations Technology in large-scale environments, preferably mining",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K5",
      "evidence": "SAP Work Management, Standardised Work, BHP Operating System and cost-control",
      "required": "desirable"
    }
  ],
  "Production Supervisor.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "managing and leading a large team of operators",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "ensure operational production standards are met",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "effectively plan, monitor and coordinate personnel, equipment and resources to achieve Dawson's set targets and schedules",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D9",
      "evidence": "coordinate personnel, equipment and resources",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "coaching and mentoring an established crew",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "effectively working with other departments on site whilst maintaining strong relationships",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Demonstrated experience with Truck and Shovel operations",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K1",
      "evidence": "working knowledge of relevant legislation",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q2",
      "evidence": "Supervisor & Risk Facilitator competencies (S1, 2, 3 & G2)",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q4",
      "evidence": "OCE ticket is desirable but not mandatory",
      "required": "desirable"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q18",
      "evidence": "Trainer & Assessor certification is desirable",
      "required": "desirable"
    },
    {
      "category": "EXPERIENCE",
      "code": "E8",
      "evidence": "running a large team within an open cut mining operation",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "open cut mining operation",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP14",
      "evidence": "strong interpersonal and leadership skills",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "drive for safety",
      "required": "required"
    }
  ],
  "Production supervisor copy.docx": [
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "lead a crew of around 20 operators within our truck and shovel mining operations",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E8",
      "evidence": "crew of around 20 operators",
      "required": "required"
    },
    {
      "category": "DUTY",
      "code": "D11",
      "evidence": "coordinating and monitoring personnel, equipment and resources to meet site targets and schedules",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "ensure production targets and operational standards are consistently achieved",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D2",
      "evidence": "guide and develop your team … coaching and mentoring a skilled team",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D16",
      "evidence": "collaborating closely with other departments on site",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "Experience running a large team within an open cut mining operation",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "open cut mining operation",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E7",
      "evidence": "Demonstrated background operating heavy machinery including shovels and / or excavators",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP1",
      "evidence": "Unwavering commitment to safety",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP2",
      "evidence": "exceptional interpersonal skills",
      "required": "required"
    }
  ],
  "BUMA Nanango.docx": [
    {
      "category": "DUTY",
      "code": "D7",
      "evidence": "Oversee the daily operations of the mine, ensuring safe and efficient production in line with Mine Safety and Inspection requirements",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D6",
      "evidence": "create a strong safety culture by setting a positive example and making proactive decisions",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D5",
      "evidence": "ensure full compliance with the Mine Safety and Inspection Act and Regulations",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D1",
      "evidence": "Lead and manage personnel and equipment to optimise production activities and meet operational targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D8",
      "evidence": "optimise production activities and meet operational targets",
      "required": "not_specified"
    },
    {
      "category": "DUTY",
      "code": "D3",
      "evidence": "Effectively allocate tasks and manage workloads within the production team",
      "required": "not_specified"
    },
    {
      "category": "EXPERIENCE",
      "code": "E2",
      "evidence": "5+ years of production experience in an open-cut coal mining operation",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E1",
      "evidence": "2+ years of supervisory experience in an open-cut coal mining environment",
      "required": "required"
    },
    {
      "category": "EXPERIENCE",
      "code": "E3",
      "evidence": "open-cut coal mining",
      "required": "required"
    },
    {
      "category": "KNOWLEDGE",
      "code": "K1",
      "evidence": "In-depth knowledge of QLD Coal Mining legislation",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q11",
      "evidence": "Current C Class Driver's Licence",
      "required": "required"
    },
    {
      "category": "QUALIFICATIONS",
      "code": "Q2",
      "evidence": "S1,2,3 and G2 Certificate",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP5",
      "evidence": "Lead from the front as a Production Supervisor at Meandu Mine",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP4",
      "evidence": "proven ability to motivate teams, drive performance, and achieve business targets",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP7",
      "evidence": "making proactive decisions",
      "required": "required"
    },
    {
      "category": "DISPOSITION",
      "code": "DP13",
      "evidence": "ability to prioritise tasks",
      "required": "required"
    }
  ]
};
