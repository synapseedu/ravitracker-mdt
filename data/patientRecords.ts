export const patientRecords = {
  watson: {
    id: 'watson',
    name: 'BARRY WATSON',
    dob: '1952-12-09',
    mrn: '0106881',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Rogers',
    contact: '0412 500 375',
    email: 'sueandbazz@gmail.com',
    weight: '125 kg',
    height: '170 cm',
    pdfs: {
      tte: ['Watson TTE 26.3.25.pdf'],
      angio: ['Watson angio.pdf'],
      ecg: ['Watson ECG.pdf'],
      ct: ['Watson CT TAVI.pdf', 'Watson medtronic.pdf'],
      respiratory: ['Watson respiratory Dr.pdf'],
      cts: ['Watson Dr Bassin.pdf'],
      referral: ['Watson Dr Rogers referral.pdf'],
      bloods: ['Watson bloods.pdf'],
    },
    history: [
      'Severe obesity (125 kg, was 140 kg)',
      'CKD (creatinine 200)',
      'Permanent AF',
      'OSA on CPAP',
      'HTN',
      'Gout',
      'Back pain, lumbar disc disease',
      'Peripheral neuropathy',
      'Osteopaenia',
    ],
    medications: [
      'Apixaban 5 mg',
      'Dapagliflozin 10 mg',
      'Atorvastatin 10 mg',
      'Motilium PRN',
      'Telmisartan 40 mg',
      'Amlodipine 5 mg',
      'Vitamin D',
      'Pantoprazole 40 mg',
      'Xalacom eye drops',
      'Trelegy Ellipta',
      'Fish oil',
      'Panadol',
      'Furosemide 40 mg mane (new)',
    ],
    social: 'Lives at home with wife and sons (wife has low vision). Quit smoking 34 years ago (15 pack-years). Drinks 1–2 mid-strength beers/day (reduced).',
    functional: 'Uses walking stick due to back pain. Independent with pADLs, shares household tasks. Still drives. Worsening SOBOE—shops slowly, worse with hills/stairs. Occasional dizziness, no syncope, chest pain or oedema. Occasional poor CPAP tolerance. MOCA 28/30.',
    tteSummary: [
      'LV EF 40% — AVA 0.7 cm² (AVAi 0.3)',
      'Peak gradient 51 mmHg — AR Mild',
      'Mean gradient 37 mmHg — SVI 24.4 ml/m²',
      'Peak AV velocity 3.6 m/s — MR Mild',
      'Comments: Tricuspid aortic valve, thickened & calcified leaflets with markedly restricted motion; severe aortic stenosis. Reviewed by Dr Choong (clips 28, 29, 32 confirm severe AS).',
    ],
    angioSummary: 'Mild non-obstructive coronary artery disease',
    ecgSummary: 'Atrial fibrillation',
    ctIncidentals: 'HRCT chest (11 Mar 2025): no evidence of parenchymal dysfunction',
    respiratorySummary: "Barry’s exertional symptoms relate to cardiac failure, obesity, aortic stenosis, and OSA. CPAP restarted (download pending). Mouth leak—chinstrap advised. Review 6 months with CPAP oximetry. No respiratory disease requiring treatment. Discussed intermittent fasting & keto.\n- Dr Alex Erdstein",
    ctsSummary: `Thank you for referring Barry for consideration of aortic valve intervention. He has severe symptomatic aortic valve stenosis with a mean gradient of 33 mmHg, AVA 1.0 cm², and LVEF 40%. He is highly comorbid (severe obesity, CKD, AF, OSA). Coronary angiography shows no significant obstructive disease.
I believe he is high-risk for open surgery and should undergo TAVI if feasible. I will forward his details to our structural heart team for evaluation.
- Levi Bassin`,
    bloods: { Hb: 162, Plts: 142, Cre: 205, eGFR: 27, Albumin: null },
  },
  austin: {
    id: 'austin',
    name: 'GAETANE AUSTIN',
    dob: '1941-11-18',                             // 18 Nov 1941
    mrn: 'ME00457693',
    referralDate: '',                              // not on MDT form
    structuralPhysician: 'Dr Peter Hansen',
    referrer: 'Dr Peter Vale',
    contact: '—',
    weight: '90 kg',
    height: '161 cm',
    pdfs: {
        tte: ['TTE AUSTIN_GAETANE_18111941_13.02.2025_GA181141.pdf'],
        angio: ['Austin Angio.pdf'],
        ecg: ['Austin ECG 02.25.pdf'],
        ct: ['GA 18.11.41.pdf'],
        agedCare: ['Austin Aged Care.pdf'],
        moca: ['Austin MOCA.pdf'],
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'Severe aortic stenosis',
        'Stent to LAD (25 Feb 2025)',
        'Hypertension',
        'Dyslipidaemia',
        'Chronic atrial fibrillation (failed cardioversion 2012)',
        '↑ BMI',
        'Severe shoulder osteoarthritis; right foot arthritis (surg 2014)',
        'Cervical laminectomy 2012',
        'Haemochromatosis carrier (mild ↑ iron stores)',
        'Left reverse total-shoulder replacement 2019',
    ],
    medications: [
        'Dabigatran 110 mg bd',
        'Irbesartan 300/25 mg mane',
        'Irbesartan 150 mg nocte',
        'Metoprolol 50 mg bd',
    ],
    social:
        'Lives in Fiji, helps with family business; daughters deeply involved in care; has home carers.',
    functional:
        'NYHA III — SOB on mild exertion; walks ≈ 500 m but limited by breath/hip pain.',

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '65 %',
        AVA: '0.6 cm²',
        'Peak Gradient': '97 mmHg',
        'Mean Gradient': '63 mmHg',
        SVI: '32.7 ml/m²',
        'Peak AV velocity': '4.93 m/s',
        AR: 'Mild',
        Comments: 'Tri-leaflet valve; heavily calcified; severe AS (paradoxical LF-LG).',
    },
    angio:
        'Severe proximal LAD stenosis; severe AS. CT (MM) advised SAVR±CABG not ideal; LAD stent 02/2025.',
    ecg: 'Atrial fibrillation, LBBB, 68 bpm.',
    ctIncidentals: 'No significant incidental findings.',
    bloods: {
        MOCA: '12/30',
        Frailty: '4/10',
        Hb: '129',
        Plts: '253',
        INR: '1.2',
        Cre: '76',
        eGFR: '63',
    },
    agedCare:
        'MOCA 12/30 indicates moderate-to-high delirium risk; family aware.',
,
  bromley: {
    id: 'bromley',
    name: 'COLIN BROMLEY',
    dob: '1936-10-23',
    mrn: '0635605',
    referralDate: '11/07/2025',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Mooney / Dr Gunalingam',
    contact: '—',
    weight: '—',
    height: '—',

    pdfs: {
        tte: ['Bromley TTE 16.1.25.pdf', 'Bromley Wyong TTE 8.7.25.pdf'],
        angio: ['Bromley angio.pdf'],
        ecg: ['Bromley ECG.pdf'],
        ct: ['Bromley medtronic.pdf'],
        pft: ['Bromley PFT.pdf'],
        agedCare: ['Bromley aged care.pdf'],
        respiratory: [
            'Bromley respiratory Dr Hunter 2024.pdf',
            'Bromley respiratory Dr Hunter 2025.pdf',
        ],
        vascular: ['Bromley vascular Dr Tchen 2025.pdf'],
        correspond: [
            'Bromley Dr Gunnaligam 1.25.pdf',
            'Bromley Dr Gunnalingah clearance for SPC.pdf',
            'Bromley Dr Gunnalingam 2.25.pdf',
        ],
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'CABG + mitral & tricuspid rings (2018)',
        'Paroxysmal AF',
        'Hypertension',
        'Hypercholesterolaemia',
        'Mild COPD',
        'Peripheral vascular disease (fem-pop bypasses 1995 & 2005)',
        'Suprapubic catheter (Jun 2025)',
    ],
    medications: [
        'Frusemide 80 mg IV mane / 40 mg midday',
        'Apixaban 2.5 mg bd',
        'Atorvastatin 40 mg',
        'Entresto 24/26 mg bd',
        'Aspirin',
        'Bisoprolol 2.5 mg mane',
        'Spironolactone 12.5 mg',
        'Hydrochlorothiazide 25 mg',
        'Paracetamol PRN',
        'Coloxyl + Senna',
    ],
    social:
        'Lives independently with wife; daughter nearby and helps. Ex-smoker (quit 30 y), 2 standard drinks/week, still drives.',
    functional:
        'Progressive dyspnoea leading to Wyong admission (Jul 2025). Intermittent light-headedness; no angina or syncope. Now improved post-diuresis.',

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '30 %',
        AVA: '0.6 cm²',
        'Peak Gradient': '34 mmHg',
        'Mean Gradient': '18 mmHg',
        'Peak AV velocity': '3.7 m/s',
        DVI: '0.13',
        MR: 'Mild–moderate',
        AR: 'Trivial',
        Comments:
            'DSE 22 Jul 2025: features consistent with true severe AS; LVEF augmented to ≈45 % at peak.',
    },
    angio:
        'Patent LIMA→LAD & SVG→PDA. Isolated D1 90 %, LCx 50–80 %. PCI on LCx under consideration.',
    ecg: 'Atrial fibrillation',
    ctIncidentals:
        'Favours transfemoral access (may require Shockwave); multiple mildly enlarged right mediastinal & supraclavicular nodes – follow-up planned.',
    pft:
        'FEV₁ 62 %, FVC 97 % (post-bronchodilator); mild obstruction, severely reduced DLCO.',
    bloods: { Hb: 112, Plts: 341, Cre: 123, eGFR: 45, Albumin: 32, MOCA: '20/30' },
    agedCare: 'Dr Kumar (Wyong): fit for TAVI, no geriatric barriers.',
,
  clark-nelson: {
    id: 'clark-nelson',
    name: 'NELSON CLARK',
    dob: '1947-02-22',                                // :contentReference[oaicite:20]{index=20}
    mrn: '2363156',                                   // :contentReference[oaicite:21]{index=21}
    referralDate: '26/07/2025',                       // :contentReference[oaicite:22]{index=22}
    structuralPhysician: 'Dr Hansen',                 // :contentReference[oaicite:23]{index=23}
    referrer: 'Dr Brereton / Dr Williams',            // :contentReference[oaicite:24]{index=24}
    contact: '0431 655 057',                          // :contentReference[oaicite:25]{index=25}
    weight: '66 kg', height: '170 cm',                // :contentReference[oaicite:26]{index=26}
    pdfs: {
        referral: [],                                   // none supplied
        tte: ['Clark.N RNSH TTE 27.7.25.pdf'],
        angio: ['Clark.N angio.pdf'],
        ecg: [],                                        // no stand-alone ECG pdf
        ct: ['Clark.N CT TAVI.pdf', 'Clark medtronic.pdf'],
        breast: ['Clark breast surgery 30.7.25.pdf'],
        cts: ['Clark.N CTSx.pdf'],
        carotid: ['Clark.N OT.pdf'],
        pft: [],                                        // no PFT file
    },

    /* history & meds --------------------------------------------------*/
    history: [
        'COPD',
        'Mixed aortic / mitral valve incompetence',
        'GORD',
        'Dyslipidaemia',
        'Type 2 diabetes mellitus',
        'Hypertension',
        'Atrial fibrillation',
        'TIAs; bilateral carotid stents (2012)',
        'Hodgkin lymphoma → mediastinal radiotherapy; diaphragmatic paralysis & lung fibrosis',
        'Current smoker (≈10/day)',
    ],                                                // :contentReference[oaicite:27]{index=27}
    medications: [
        'Clexane 60 mg BD',
        'Ezetimibe 10 mg od',
        'Frusemide 40 mg mane',
        'Linagliptin 2.5 mg mane',
        'Nebivolol 1.25 mg od',
        'Rosuvastatin 40 mg od',
        'Tiotropium inhaler',
    ],                                                // :contentReference[oaicite:28]{index=28}
    social:
        'Lives at home with wife; functionally independent & very active – was mowing lawns for 5 h pre-admission; still drives; current smoker (≈10/day); minimal ETOH.', // :contentReference[oaicite:29]{index=29}
    functional:
        'Admitted with acute SOB + NSTEMI; now euvolaemic after IV diuresis. Previously no chest pain or ET limitation; occasional mild ankle oedema at night; denies PND/orthopnoea.', // :contentReference[oaicite:30]{index=30}

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '55–60 %',
        AVA: '1.2 cm²',
        AVAi: '0.7',
        'Peak Gradient': '42 mmHg',
        'Mean Gradient': '68 mmHg',
        'Peak AV velocity': '4.1 m/s',
        SVI: '67 mL/m²',
        AR: 'Moderate',
        MR: '—',
        Comments:
            'Trileaflet valve; severely calcified & restricted leaflets; moderate AR.', // :contentReference[oaicite:31]{index=31}
    },
    angio:
        'Gosford 22/07/2025: 60 % distal LM; 50 % proximal RCA mild distal disease.', // :contentReference[oaicite:32]{index=32}
    ecg: 'New-onset atrial fibrillation',                                         // :contentReference[oaicite:33]{index=33}
    ctIncidentals:
        '9 mm ovoid focus in left breast – referred for mammogram ± USS',           // :contentReference[oaicite:34]{index=34}
    pft:
        'Normal spirometry (FEV₁ 71 %, FVC 84 %, FEV₁/FVC 84 %).',                 // :contentReference[oaicite:35]{index=35}
    carotid:
        'Bilateral ICA stents patent; mild–moderate calcified plaque; <50-% ECA stenoses.', // :contentReference[oaicite:36]{index=36}
    bloods: {
        Hb: 122, Plts: 159, Cre: 93, eGFR: 67, Albumin: 34, MOCA: '25/30',
    },                                                                            // :contentReference[oaicite:37]{index=37}
    ctsComment:
        'Discussed CABG vs TAVI; preference for TAVI in context of prior mediastinal radiotherapy.', // :contentReference[oaicite:38]{index=38}
,
  dunbar: {
    id: 'dunbar',
    name: 'THOMAS DUNBAR',
    dob: '1938-01-23',
    mrn: 'ME00467507',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Natasha Huon',
    referralDate: '22/07/2025',
    contact: '0447 281 456',
    address: '3/20 Charles St, Freshwater NSW 2096',
    heightCm: 169,
    weightKg: 66,
    pdfs: {
        tte: ['DUNBAR_THOMAS_TTE_24.07.2025_TD230138.pdf'],
        angio: ['Dunbar Angio.pdf'],
        ecg: ['Dunbar ecg.pdf'],
        ct: ['DUNBAR Thomas - CT_TAVI.pdf', 'Dunbar medtronic.pdf'],
        bloods: ['Dunbar bloods.pdf'],
        agedCare: ['Dunbar Aged Care.pdf'],
    },

    /* Past medical history -------------------------------------------------- */
    background: [
        'Severe symptomatic aortic stenosis (AS) & moderate-to-severe MR',
        'Coronary artery disease; stent thrombosis Oct 2024 post knee replacement',
        'Heart failure with LVEF 20-25 %',
        'BiV ICD upgrade 2025',
        'Chronic kidney disease (eGFR ≈ 45; Cr 135-140)',
        'Previous pleural effusion (drained)',
        'Aphasia',
    ],

    /* Medications ----------------------------------------------------------- */
    medications: [
        'Ramipril 1.25 mg nocte',
        'Rosuvastatin 40 mg daily',
        'Spironolactone 12.5 mg daily',
        'Pantoprazole',
    ],

    /* Social & functional --------------------------------------------------- */
    social: `Lives with wife, independent in iADLs.  
Passed driving test but not currently driving due to cardiac issues.`,
    functional: `NYHA III.  SOBOE.  ED admission 31 / 07 / 25.`,

    /* Echocardiography (24 / 07 / 25) -------------------------------------- */
    tteData: {
        'LV EF': '20 %',
        'Peak Gradient': '24 mmHg',
        'Mean Gradient': '13 mmHg',
        'Peak AV velocity': '2.46 m/s',
        SVI: '24 mL/m²',
        AR: 'Trivial',
        MR: 'Moderate',
        Comment:
            'Low-flow, low-gradient severe AS with markedly calcified functionally bicuspid valve; poor LV EF.',
    },

    /* Other investigations -------------------------------------------------- */
    angio: `25 / 07 / 2025 – CTO of non-dominant RCA; mild residual disease, no in-stent restenosis.`,
    ecg: 'AV dual-paced rhythm',
    ctIncidentals: 'Access & valve selection not documented; see CT_TAVI reports.',
    bloods: {
        Hb: '139',
        Plts: '271',
        Urea: '11.2',
        Creatinine: '125',
        eGFR: '45',
        Albumin: '41',
        Haematocrit: '0.43',
        WBC: '7.3',
    },

    agedCareNote:
        'Word-finding difficulties but no major cognitive impairment observed.  From geriatric POV, suitable for TAVI; note risk of peri-op delirium given prior episodes.',

    procedurePlan: 'Planned TAVI; valve choice and access to be finalised.',
,
  edwards: {
    id: 'edwards',
    name: 'FREDERICK EDWARDS',
    dob: '1937-12-22',
    mrn: '2354436',
    referralDate: '11/11/2024',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Rao',
    contact: '0427 699 169',

    pdfs: {
        referral: ['Edwards Referral.pdf'],
        tte: ['Edwards TTE.pdf'],
        toe: ['Edwards TOE.pdf'],
        angio: ['Edwards RHC and LHC.pdf'],
        ecg: ['Edwards ECG.pdf'],
        cts: ['Edwards Dr Mathur letter.pdf'],
    },

    /* Hx / meds -------------------------------------------------- */
    background: [
        'CABG 1996',
        'Stroke 1995',
        'Long-standing chronic atrial fibrillation',
        'Gastro-oesophageal reflux disease',
    ],
    medications: [
        'Apixaban',
        'Entresto',
        'Bisoprolol',
        'Somac (Sozol)',
        'Spironolactone',
        'Magnesium',
    ],
    social:
        'Lives in Warren with supportive daughter nearby; still drives; cognitively excellent.',
    functional:
        'Mild exertional dyspnoea. Denies orthopnoea, PND or oedema.',

    /* Investigations --------------------------------------------- */
    tteData: {
        'LV EF': '40–45 %',
        MR: 'Severe (atrial-functional)',
        Comments: 'See TTE PDF – posteriorly directed severe MR',
    },
    toeSummary: [
        'Severe posteriorly directed MR – EROA 0.42 cm², RV 66 mL',
        'Ischaemic (secondary) MR with restricted posterior leaflet motion',
        'Feasible for MitraClip/TEER – likely 1 NT-W centrally, 2nd clip if needed',
    ],
    rhc: 'Mean PAP 30 mmHg, PCWP 19 mmHg, PVR 3.2 WU (mixed pre-/post-capillary PH)',
    angio:
        'Native significant RCA & LAD disease; patent LIMA; occluded SVG → R-PDA',
    ecg: 'Atrial fibrillation',
    bloods: { Hb: 140, Plts: 111, Cre: 82, eGFR: 75 },

    ctsSummary: `I think intervention for his valvular pathology would be appropriate, but timing is debatable as he only complains of mild exertional dyspnoea.

If the Heart Team felt intervention appropriate, first-line would be MitraClip ± TriClip. If TOE anatomy proved unfavourable, re-operative surgery at his age and with prior CABG would need careful consideration.

— Dr Manu Mathur`,
,
  gaffney: {
    id: 'gaffney',
    name: 'MARIAN GAFFNEY',
    dob: '1943-07-18',
    mrn: 'ME00143507 (RNSH 042 90 35)',
    referralDate: '—',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Usaid Allahwala',
    contact: '02 9877 0498',
    weight: '73 kg',
    height: '155 cm',
    pdfs: {
        referral: [], // none supplied
        tte: [
            'GAFFNEY_MARIAN_ sev as tte _08072025_MG180743.pdf',
            'TTE GAFFNEY_MARIAN_18071943_11022025_MG180743 (1).pdf',
        ],
        angio: ['Gaffney Angio.pdf'],
        ecg: [],
        ct: ['MG 18.7.43.pdf'],
        gastro: ['gaffney gastro.pdf'],
        endocrine: ['gaffney endocrine.pdf', 'gaffney dr warrier.pdf'],
        respiratory: ['Gaffney Garrick Don rv.pdf'],
        otherDocs: ['gaffney endorine.pdf'], // any extras
        bloods: [], // no blood-PDF
    },

    /* history & medications -----------------------------------------*/
    background: [
        'Type 2 diabetes mellitus',
        'Chronic lymphocytic leukaemia (Dr Raymond McKinley)',
        'Multinodular goitre ± mild hyperthyroidism',
        'Acromegaly – pituitary resection Sep 2023 (Dr Little)',
        'Hypertension',
        'Colonic polyps',
        'Ventricular ectopy (Dr Allahwala)',
        'Hypercholesterolaemia',
        'GORD',
    ],
    medications: [
        'Azopt 1 % eye-drops BD',
        'Metoprolol 50 mg BD',
        'Rosuvastatin 5 mg ON',
        'Metformin XR 1 g ON',
        'Ferrograd-C twice weekly',
        'Magnesium 500 mg OD',
        'Clopidogrel 75 mg OD',
        'Pantoprazole 40 mg BD',
        'Poly-Gel eye-gel PRN',
    ],
    social:
        'Lives alone; retired secretary. Mobilises with stick. Non-smoker; very occasional alcohol.',
    functional:
        'NYHA III, worsening SOBOE over 6–12 months. Exercise tolerance ≈ 100 m.',

    /* investigations -----------------------------------------------*/
    tteData: {
        'LV EF': '65 %',
        AVA: '—',
        'Peak Gradient': '64 mmHg',
        'Mean Gradient': '38 mmHg',
        SVI: '38 ml/m²',
        'Peak AV velocity': '4.00 m/s',
        MR: 'Mild',
        AR: 'Trivial',
        Comments:
            'Tri-leaflet AV, markedly calcified & restricted; Doppler severe AS. Mitral annular & leaflet calcification with mild stenosis (mean 6 mmHg).',
    },
    angio: 'Patent LCx stent; mild disease elsewhere.',
    ecg: 'Sinus rhythm, first-degree PR, ventricular ectopics',
    ctIncidentals:
        '7 mm lung nodule – slow growth over years (Dr Garrick Don); follow-up in rooms. No CT-TAVI report yet.',
    bloods: {
        MOCA: '27/30',
        Frailty: '4',
        Hb: '135',
        Plts: '143',
        Cre: '49',
        eGFR: '88',
        Albumin: '40',
        WBC: '11.1',
    },

    consultTexts: {
        gastro:
            'Abdominal X-ray showed faecal compaction; treated with laxatives. No barrier to TAVI.',
        endocrine:
            'Acromegaly & thyroid disease under Dr Clifton-Bligh / Dr Warrier – no TAVI contraindication.',
        respiratory:
            'Slow-growing lung nodule reviewed by Dr Garrick Don; life-expectancy > 12 months.',
    },
,
  lingard: {
    id: 'lingard',
    name: 'MAGGIE LINGARD',
    dob: '1958-09-24',
    mrn: '0520968',
    referralDate: '17/04/2025',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Wong',
    contact: '0458 476 412',
    pdfs: {
        referral: ['Lingard referral.pdf'],
        tte: ['Lingard TTE march 2025.pdf'],
        angio: ['Lingard angio.pdf'],
        ecg: [],
        ct: ['Lingard CT TAVI.pdf', 'Lingard medtronic.pdf'],
        bloods: [],
        cardiothoracic: ['Lingard Dr Bassin.pdf'],
        renal: ['Lingard Dr Kumar Jan 2025.pdf'],
    },
    background: [
        'Hypertension',
        'Hypercholesterolaemia',
        'Depression',
        'Bladder incontinence',
        'Spinal stenosis with L1 compression',
        'Obstructive sleep apnoea (on CPAP)',
        'CKD stage 3',
    ],
    medications: [
        'Apixaban 5 mg bd',
        'Endep 10 mg nocte',
        'Frusemide 20 mg daily',
        'Ivabradine 5 mg',
        'Atorvastatin 20 mg',
        'Mirtazapine 30 mg mane',
        'Zan‑Extra 10/10 mg',
        'Sertraline 100 mg nocte',
    ],
    social: 'Lives at home with dog; son in Sydney/Central Coast. Non‑smoker, nil alcohol. No driving.',
    functional:
        'Mobilises with 4‑wheel walker at home and wheelchair outdoors. Independent with personal ADLs (NDIS supports). Symptoms: progressive SOBOE, fatigue, occasional chest discomfort & dizziness, orthopnoea (45°), occasional oedema, no syncope.',
    tteData: {
        'LV EF': '55%',
        AVA: '0.6 cm²',
        AVAi: '0.3',
        'Peak Gradient': '73 mmHg',
        'Mean Gradient': '42 mmHg',
        'Peak AV velocity': '4.2 m/s',
        MR: 'Normal',
    },
    angio: 'Minor coronary artery disease',
    ecg: 'Atrial fibrillation',
    ctIncidentals: 'Nil significant incidentals',
    bloods: { Hb: '118', Creatinine: '110', eGFR: '45' },
    consultTexts: {
        cardiothoracic: `I had a good discussion with Maggie and her son, and my advice would be that she should undergo a TAVI if it is technically suitable. However, if there are anatomical constraints to a TAVI, I would be happy to consider open surgery.
- Levi Bassin`,
    },
,
  low: {
    id: 'low',
    name: 'DONALD LOW',
    dob: '1944-11-26',
    mrn: 'ME00195919',
    rnsn: '070-93-28',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Shubhada Kharwadkar',
    contact: '0415 522 577',
    heightCm: 170,
    weightKg: 78,
    pdfs: {
        tte: [
            'Low Royal Northshore Hospital TOE review for MitraClip.pdf',
            'Low_Donald_TOE_report.pdf',
        ],
        angio: ['Low Angio.pdf'],
        ecg: ['Low ECG.pdf'],
        crt: ['Low Don CRT report.pdf'],
        haemodynamics: ['Low PH 13.6.25.pdf'],
        renal: ['Low renal and aged care.pdf'],
        cardiothoracic: ['Low Dr Brereton 26111944.pdf'],
    },

    /* Past medical history -------------------------------------------------- */
    background: [
        'Ischaemic heart disease',
        'Atrial fibrillation',
        'CRTD in situ',
        'CABG 2016 (Dr John Brereton)',
        'Chronic kidney disease (Dr Patrick Lan)',
        'Hypertension',
        'Prostate cancer – radiotherapy 2019',
    ],

    /* Medications ----------------------------------------------------------- */
    medications: [
        'Bisoprolol 5 mg bd',
        'Entresto 24/26 mg bd',
        'Frusemide 80 mg bd',
        'Warfarin',
    ],

    /* Social & functional --------------------------------------------------- */
    social: 'Lives with wife; independent.',
    functional: 'SOBOE and peripheral oedema.',

    /* TTE / TOE ------------------------------------------------------------- */
    tteData: {
        'LV EF': '20 %',
        MR: 'Severe secondary (ventricular mechanism)',
        TR: 'Severe secondary',
    },

    /* Other investigations -------------------------------------------------- */
    angio: `20 / 06 / 2025 – patent native LCx, patent LIMA–LAD. 
Haemodynamics: RA 27 (19) mmHg, PA 39/24 (31) mmHg, PCWP 26 (24) mmHg, CO 3.54 L/min, PVR 1.98 WU.`,
    ecg: 'Ventricular paced rhythm (BiV)',
    bloods: {
        Hb: '131',
        Plts: '83',
        INR: '2.2',
        Creatinine: '322',
        eGFR: '15',
    },

    renalNote: `Discussed potential dialysis scenarios. If cardiac intervention improves EF,
renal function may improve but could also deteriorate; patient accepts risk.`,

    cardiothoracicNote: `Open double-valve surgery at age 82 with creatinine > 300 and severe LV dysfunction
would demand post-op dialysis and possibly ECMO. Percutaneous mitral intervention
is preferred; surgery may be reconsidered if TEER fails. – Dr John Brereton`,

    procedurePlan: `**Urgent TEER (MitraClip)**  
• Atrial functional MR (A3/P3), broad jet, restricted posterior leaflet  
• Strategy: two central clips + medial clip (P5 Pascal)  
• Admit pre-procedure for dobutamine; may need ASD closure  
• Liaise with renal; MRI post-procedure if device compatible  
**Approved at feasibility 15 / 07 / 2025**`,
,
  mcguire: {
    id: 'mcguire',
    name: 'STEPHEN McGUIRE',
    dob: '1953-07-22',
    mrn: 'ME00252119',
    referralDate: '—',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Gemma Figtree',
    contact: '0413 382 919',
    weight: '90 kg',
    pdfs: {
        referral: ['McGuire Figtree Referral.pdf'],
        tte: ['MCGUIRE_STEPHEN_TTE 31.03.2025 _SM220753.pdf'],
        stress: ['MCGUIRE_STEPHEN_ STRESS ECHO _08042025_SM220753.pdf'],
        angio: ['McGure angio.pdf'],
        ecg: [],
        ct: ['Stephen McGuire CT TAVI Report.pdf'],
        bloods: ['Mcmullen bloods.pdf'], // none supplied → placeholder kept for layout
        correspond: ['McGuire Manu letter.pdf'],
        other: [
            'McGuire Edwards report.pdf',
            'SM 22.7.53.pdf',
            'SM220753 Edwards BT0 ABC - NSW.pdf',
        ],
    },

    /* history & medications ----------------------------------------- */
    background: [
        'STEMI 2012 – stenting mid Cx + RCA',
        'Hypertension',
        'Hypercholesterolaemia',
        'Asthma',
    ],
    medications: ['Clopidogrel', 'Candesartan', 'Rosuvastatin', 'Ezetimibe'],
    social: 'Independent; lives at home with wife.',
    functional: 'SOBOE, one syncopal event, NYHA II',

    /* investigations ------------------------------------------------ */
    tteData: {
        'LV EF': '60 %',
        AVA: '0.9 cm²',
        'Peak Gradient': '65 mmHg',
        'Mean Gradient': '40 mmHg',
        SVI: '34.3',
        'Peak AV velocity': '4.16 m/s',
        MR: 'Mild–Moderate',
        AR: 'Nil',
        Comments:
            'Severely calcified AV with restricted opening – severe AS.',
    },
    stressEcho: (
        <>
            Moderate exercise capacity (mid-stage III), limited by breathlessness and 6/10 chest
            tightness.<br />
            Negative stress ECG.<br />
            Rest echo: normal LV size, inferolateral / inferior hypokinesis, normal EF.<br />
            Severe AS, mild/moderate aortic-root dilatation, positive for ischaemia.
        </>
    ),
    angio:
        'Mild–moderate CAD; 2012 stents mid Cx & RCA (patent).',
    ecg: 'Sinus rhythm.',
    ctIncidentals: (
        <>
            Sievers Type 0/I bicuspid AV with anomalous arch.<br />
            Calcium score 3990; no sub-annular calcification.
        </>
    ),
    bloods: { Hb: '151', Plts: '201', Cre: '90', eGFR: '76', Albumin: '44' },
    frailtyScore: '3',
    consults: {
        'Cardiothoracic Surgeon': 'Dr Manu Mathur (see letter PDF)',
    },
,
  mcmullen: {
    id: 'mcmullen',
    name: 'JOHN McMULLEN',
    dob: '1938-04-05',
    mrn: '2359358',
    referralDate: '16/06/2025',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Armit Michael',
    contact: 'Julie 0433 213 626',
    email: 'juliemcmullen022@gmail.com',
    pdfs: {
        referral: ['Mcmullen referral.pdf'],
        tte: ['Mcmullen TTE.pdf', 'Mcmullen TTE RNSH 16.7.25.pdf'],
        angio: ['Mcmullen angio.pdf'],
        ecg: [],
        ct: ['Mcmullen medtronic.pdf'],
        hrct: ['Mcmullen HRCT chest.pdf'],
        gastro: ['McMullen gastro consultation 20.7.25.pdf'],
        geriatrician: ['Mcmullen geriatrician.pdf'],
        respiratory: ['McMullen respiratory.pdf'],
        bloods: ['Mcmullen bloods.pdf'],
    },

    /* history & meds (from MDT) ------------------------------------ */
    background: [
        'CABG 2003 (SVG-OM graft)',
        'COPD',
        'Mild cognitive impairment',
        'Previous CVA',
        'Awaiting cataract surgery (4 Jul 2025)',
        'Ongoing dysphagia & 7 kg weight loss – gastro review booked 11 Jul 2025',
    ],
    medications: [
        'Clopidogrel 75 mg',
        'Frusemide 40 mg',
        'Perindopril 2.5 mg',
        'Atorvastatin 40 mg',
        'Metoprolol 25 mg daily',
        'Oxybutynin daily',
    ],
    social:
        'Lives with son (carer); supportive daughter nearby. Ex-smoker (quit 30 y). Nightly port; occasional club drinks.',
    functional:
        'Independent pADLs; uses 4-wheel walker outdoors (several falls last year). Walks 500 m to club but slower. Progressive SOBOE & fatigue; denies chest pain, oedema, syncope, PND.',

    /* investigations ----------------------------------------------- */
    tteData: {
        'LV EF': '25–30 %',
        AVA: '0.7 cm²',
        AVAi: '0.4',
        'Peak Gradient': '45 mmHg',
        'Mean Gradient': '33 mmHg',
        'Peak AV velocity': '3.4 m/s',
        MR: 'Mild–Moderate',
        AR: 'Trivial',
        SVI: '29',
        DVI: '0.25',
        Comments:
            'Probable bicuspid AV (raphe L-R); severe low-flow, low-gradient AS.',
    },
    angio:
        'CTO of native RCA & LCx (supplied by grafts/collaterals). LAD iFR 0.55 – haemodynamically significant.',
    ecg: 'Sinus bradycardia.',

    // No formal findings yet in MDT → keep CT incidentals empty
    ctIncidentals: '—',

    bloods: { Hb: '112', Plts: '260', Cre: '83', eGFR: '73' },
,
  moelle: {
    id: 'moelle',
    name: 'ELEONORA (NORA) MOELLE',
    dob: '1933-02-21',
    mrn: 'ME00464356',
    referralDate: '', // not supplied
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Prof Andrew Boyle',
    contact:
        'St Ives Aged Care Facility  4963 2894; Daughter Barbara 0411 146 464, barbara.meaney@gmail.com',
    pdfs: {
        referral: [
            'MOELLE ELEONORA referral.pdf',
            'Moelle Eleonora Prof Boyle 2024.pdf',
        ],
        tte: ['Moelle echo.pdf', 'MOELLE TOE Report.pdf'],
        angio: ['Moelle ANgio.pdf'],
        ecg: ['Moelle ecg.pdf'],
        ct: [], // CT not performed
        bloods: [],
        agedCare: ['Moelle aged care pt 1.pdf', 'Moelle Aged care pt2.pdf'],
    },

    /* Past medical history -------------------------------------------------- */
    background: [
        'Atrial fibrillation – paroxysmal',
        'Left inguinal hernia repair',
        'Osteoarthritis (knee)',
        "Bowen's disease",
        'Right knee replacement',
        'Osteoporosis',
        'Right cervical radiculopathy',
        'Bilateral hearing impairment – hearing aids',
        'Right supraspinatus tendon tear – total',
        'Cystocoele',
        'Left leg ulceration',
        'Left cataract removal & IOL implant',
        'Left vision abnormal',
        'L2 vertebral crush fracture',
    ],

    /* Medications ----------------------------------------------------------- */
    medications: ['Rivaroxaban (Xarelto)', 'Furosemide 20 mg once daily'],

    /* Social & functional --------------------------------------------------- */
    social: `Born in North Italy; moved to Australia 1961.
2 sons, 1 daughter.  Lives in aged-care facility.
Walks with a four-wheeled walker; still cooks independently.
Completed a PhD in visual arts/pottery at age 83.
Speaks three languages.`,
    functional: `Peripheral oedema, visible JVP, mild SOBOE.
Walks around the block; physiotherapist notes increased exertional tachycardia.
MOCA 15/30.`,

    /* TTE/TOE --------------------------------------------------------------- */
    tteData: {
        'LV EF': '65 %',
    },

    /* Other investigations -------------------------------------------------- */
    angio: `Unobstructed coronary arteries.  Haemodynamics: RA 12/13 (11), RV 32/6 (9),
PA 31/12 (21), PCWP 14/23 (17), CO 3.1 L/min, PVR 1.23 WU.`,
    ecg: 'Atrial fibrillation',
    bloods: {
        Hb: '128',
        Plts: '187',
        INR: '1.0',
        Creatinine: '77',
        eGFR: '58',
    },

    /* Aged-care assessment -------------------------------------------------- */
    agedCareNote:
        'Geriatric review: good candidate; no barriers from aged-care perspective to proceeding with MitraClip.',

    /* Procedure plan -------------------------------------------------------- */
    procedurePlan: `Planned TEER (MitraClip) – complex case
• Flail prolapse leaflet, central jet, severe MR, multi-segment prolapse, central indentation
Clipping strategy: 2 wide clips; reassess residual MR; treat any remaining prolapse.
Expect some residual MR post-procedure.`,
,
  mooney: {
    id: 'mooney',
    name: 'GRAHAME MOONEY',
    dob: '1942-12-31',
    mrn: 'ME00465771',
    referralDate: '—',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr James Rogers',
    contact: '0438 247 099',
    weight: '80 kg',
    height: '175 cm',

    pdfs: {
        tte: ['MOONEY_GRAHAME TTE _25.06.2025_GM311242.pdf'],
        angio: ['Mooney Angio.pdf'],
        ecg: ['Mooney ecg.pdf'],
        ct: ['GM 13.12.42.pdf'],                          // ← moved here
        agedCare: ['Mooney aged care.pdf'],
        correspond: [
            'Graham Rogers 03.07.25 re grahame mooney.pdf',
            'Grahame Mooney dr rogers.pdf',
        ],
        other: ['Mooney diagnostics.pdf'],                // ← GM file removed
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'Severe symptomatic aortic stenosis',
        'Cervical myelopathy (AW laminectomy booked, Dr Jonathan Parkinson)',
        'Anxiety related to numbness',
        'Prostatectomy',
    ],
    medications: [
        'Aspirin',
        'Amlodipine',
        'Rosuvastatin / Ezetimibe',
        'Pregabalin',
    ],
    social:
        'Lives with wife; retired building designer; still drives. No formal carers (gardener only).',
    functional:
        'SOBOE; ET ≈ 500 m on flat but struggles on inclines. Low energy, exertional fatigue, hip pain and unsteady gait (cervical myelopathy).',

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '65 %',
        AVA: '0.82 cm²',
        'Peak Gradient': '45 mmHg',
        'Mean Gradient': '25 mmHg',
        SVI: '32 ml/m²',
        'Peak AV velocity': '3.34 m/s',
        MR: 'Trivial',
        AR: 'Mild',
        Comments:
            'Tri-leaflet valve, markedly calcified with restricted opening. Paradoxical severe AS (low-flow/low-gradient, normal EF). DVI 0.23.',
    },
    ctIncidentals: 'See CT TAVI PDF for full measurements / access assessment.',
    angio: 'Unobstructed coronaries (see PDF).',
    ecg: 'Atrial-paced rhythm',
    bloods: { MOCA: '19/30', Hb: '165', Plts: '196', Cre: '82', eGFR: '76', Albumin: '45', INR: '1.0' },
    frailty: '3',
    agedCareNote:
        'Aged-Care ID AC25519885 — awaiting services; no barrier to TAVI from geriatric viewpoint.',
    consults: {
        Neurosurgery: 'AW laminectomy planned 28 Jul 2025 (Dr Jonathan Parkinson)',
        Anaesthesia: 'Dr Andrew Limburg (SNNS)',
    },
,
  nas: {
    id: 'nas',
    name: 'ARNOLD NAS',
    dob: '1947-07-30',
    mrn: 'ME00463006',
    referralDate: '',                      // none on MDT
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Clyne Fernandes',
    contact: '0412 036 125',
    weight: '88 kg',
    height: '188 cm',

    /* PDFs grouped by section */
    pdfs: {
        ct: [
            'NAS Arnold - CT 88.1598294.pdf',
        ],
        angio: ['Arnold NAS Angio.pdf'],
        toe: [
            'Nas TOE workup.pdf',
            'Royal North Shore Hospital TOE review for TriClip suitability Arnold Nas.pdf',
        ],
        rhc: ['Nas RHC Workup.pdf'],
        ecg: ['Nas ECG.pdf'],
        bloods: [],
        summary: ['Nas Tricuspid patient summary.docx'],
        referral: ['Nas Arnold 03.10.2024 Dr Fernandes symptom history.pdf'],
        consult: ['Nas Dr Mathur rv.pdf'],
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'Severe atrial functional tricuspid regurgitation',
        'Atrial fibrillation',
        'Sleep apnoea (CPAP)',
        'HFpEF',
        'BPH',
    ],
    familyHistory: [
        'Both parents CVA in 70 s',
        'Brother: hypertension & prostate cancer',
    ],
    medications: [
        'Dabigatran 110 mg bd',
        'Entresto 24/26 mg nocte',
    ],
    social:
        'Retired aircraft engineer. Lives with wife (dementia; Arnold is primary carer). Four children — daughter nearby. Independent for ADLs; no stairs.',
    functional:
        'Increased SOB, ET ≈ 100 m, slow on inclines, fluctuating fatigue; no orthopnoea/PND.',

    /* investigations --------------------------------------------------*/
    bloods: {
        Date: '28 Mar 2025',
        Hb: '154',
        Plts: '249',
        Creatinine: '90',
        eGFR: '72',
    },
    rhc: (
        <>
            <b>PASP:</b> 44/20 (29)&nbsp;&nbsp;&nbsp;
            <b>PCWP:</b> 19/20 (19)
        </>
    ),
    angio: (
        <>
            LAD 40 % stenosis.<br />
            Only minor irregularities elsewhere.
        </>
    ),
    ctSummary:
        '4D cardiac CT: right-atrial enlargement, reflux into hepatic veins (possible RH dysfunction), possible early hepatic fibrosis.',
    toeSummary: (
        <>
            Trileaflet TV (Type I) — moderate–severe secondary TR.<br />
            RV markedly dilated, moderate hypokinesis; LA/RA dilated.<br />
            Mild secondary MR; aortic sclerosis.<br />
            GLIDE 2 — TEER difficult if septal-anterior clip needed.<br />
            Anatomy suitable for TriClip.
        </>
    ),

    /* consults --------------------------------------------------------*/
    consultText:
        'Dr Manu Mathur: surgical risk low. Patient prefers TriClip but is open to heart-team decision.',
,
  newlands: {
    id: 'newlands',
    name: 'PATRICIA NEWLANDS',
    dob: '1940-11-08',
    mrn: 'ME00038341',
    referralDate: '17/06/2025',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Chrishan Nalliah',
    contact: '0424 955 140',
    weight: '70 kg',
    height: '172 cm',

    pdfs: {
        tte: ['Newlands echo 15.5.25.pdf'],
        angio: ['newlands angio.pdf'],
        ecg: ['Newlands ecg.pdf'],
        ct: ['PN 8.11.40 Severely calcified valve with annular and LVOT Ca..pdf'],
        bloods: ['Newlands Bloods.pdf'],
        geriatrics: ['Newlands Aged Care.pdf'],
        discharge: ['Newlands RNSH discharge summary.pdf'],
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'New-onset atrial fibrillation (2025)',
        'Pulmonary embolism',
        'HFrEF (LVEF 30 %)',
        'Severe aortic stenosis',
        'Recurrent UTI (K. pneumoniae, Keflex completed)',
        'GORD',
        'Hypothyroidism',
        'Breast cancer (L 2006, R 2011, both treated)',
        'Multiple plastic surgeries after 1964 MVA',
    ],
    medications: [
        'Bisoprolol 1.25 mg od',
        'Apixaban 10 mg bd',
        'Digoxin 125 µg od',
        'Frusemide 40 mg bd',
        'Atorvastatin 20 mg mane',
        'Cholecalciferol cap od',
        'Levothyroxine 100 µg mane',
        'Macuvision',
        'Magnesium 1 g bd',
        'Pantoprazole 40 mg od',
        'Panadol Osteo 1 tab tds',
        'Spironolactone 12.5 mg mane',
    ],
    social:
        'Lives alone with carers & Meals-on-Wheels; mobilises with 4-WW. Non-smoker; 3–4 gin-&-tonics/week. Recent RNSH admission for decompensated HF.',
    functional:
        'SOBOE, markedly reduced exercise tolerance, fatigue, mild bilateral oedema to mid-shins.',

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '30 %',
        AVA: '0.7 cm²',
        'Peak Gradient': '51 mmHg',
        'Mean Gradient': '32 mmHg',
        SVI: '26.5 ml/m²',
        'Peak AV velocity': '3.6 m/s',
        MR: 'Severe',
        AR: 'Trivial',
        Comments:
            'Tri-leaflet, severely calcified valve; low-flow / low-gradient severe AS (pseudostenosis unlikely).',
    },
    angio: 'Unobstructed coronary arteries.',
    ecg: 'Atrial fibrillation',
    ctIncidentals:
        'Severely calcified AV with annular & LVOT calcification (see PDF).',
    bloods: {
        MOCA: '26/30',
        Hb: '112',
        Plts: '263',
        Cre: '105',
        eGFR: '42',
        Albumin: '34',
    },
    frailtyScore: '4',
    gerisNote: 'No barrier to TAVI from geriatric perspective.',
,
  ross: {
    id: 'ross',
    name: 'WENDY ROSS',
    dob: '1942-06-11',
    mrn: '0068643',
    referralDate: '18/06/2025',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Wang',
    contact: '0435 023 246',
    weight: '58 kg',
    height: '147 cm',
    pdfs: {
        referral: ['Ross referral.pdf'],
        tte: ['Ross TTE.pdf'],
        angio: ['Ross angio.pdf'],
        ecg: ['Ross ECG.pdf'],
        ct: ['Ross CT TAVI.pdf', 'Ross medtronic.pdf'],
        pelvicUS: ['Ross pelvic ultrasound.pdf'], // NEW
        bloods: ['Ross Bloods.pdf'],
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'Myocardial infarction >20 years ago (no stents)',
        'Aortic root dilatation',
        'Hypertension',
        'Hypercholesterolaemia',
        'Osteoarthritis',
        'Bilateral total knee replacements',
        'Osteopenia',
    ],
    medications: [
        'Catapress 100 mcg nocte',
        'Lipitor 40 mg OD',
        'Telmisartan 80 mg OD',
        'Dothiepin 75 mg OD',
    ],
    social:
        'Lives at home in a unit. Supportive children nearby. Non-smoker; drinks 2–3 champagnes on Fridays at the club. Uses public transport; retired seamstress.',
    functional:
        'Independent ADLs and mobility; walks three blocks (limited by pain). Occasional dizziness and nocturnal chest discomfort (uses GTN once / month, denies syncope). Minimal SOBOE. Main complaint: hypertension. Denies oedema, PND, orthopnoea.',

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '55 %',
        AVA: '0.9 cm²',
        'Peak Gradient': '74 mmHg',
        'Mean Gradient': '51 mmHg',
        'Peak AV Velocity': '4.29 m/s',
        MR: 'None',
        AR: 'Mild',
        Comments: 'Severe aortic stenosis with mild regurgitation.',
    },
    angio:
        'Mild–moderate CAD: 40 % proximal LAD, 90 % OM4 (small calibre, collateralised), 40–50 % proximal RCA.',
    ecg: 'Sinus rhythm.',
    ctIncidentals:
        'Dilated ascending thoracic aorta and proximal arch. Sub-pleural nodule (LLL) – CT follow-up in 12 months.',

    pelvicReport: (
        <>
            Thickening of the endometrial complex noted on CT.<br />
            While the endometrial canal is distended with fluid there is no obvious thickening of the
            endometrium itself and no obvious focal endometrial lesion. A complex cystic area in the anterior
            myometrium is noted. There is also no obvious ovarian or adnexal abnormality.
        </>
    ),

    bloods: {
        MOCA: '27/30',
        Hb: '136',
        Plts: '234',
        Cre: '72',
        eGFR: '67',
        Albumin: '43',
    },
    consults: { 'Aged Care': 'N/A', 'Cardiothoracic': 'N/A' },
,
  russ: {
    id: 'russ',
    name: 'GARY RUSS',
    dob: '1946-07-10',
    mrn: 'ME00465605',
    referralDate: '',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Helestrand',
    contact: '04 0419 5268',
    weight: '73.2 kg',
    height: '168 cm',

    pdfs: {
        tte: ['RUSS_GARY_ TTE 26.06.2025_GR100746.pdf'],
        angio: ['Russ angio.pdf'],
        ecg: ['Russ ECG.pdf'],
        ct: [
            'Gary Russ CT NSR Report.pdf',
            'GR 10.7.46 Highly calcified valve with some annular and LVOT calcification. High R femoral bifurcation..pdf',
        ],
        geriatrics: ['Russ Aged care.pdf'],
        oncology: ['Gary Oncology 10.2024.pdf'],
        neurology: ['Russ G Neuro 26Jun25.pdf'],
        cardiothoracic: ['Russ Surgical rv.pdf'],
        bloods: [],
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'Severe aortic stenosis',
        'Metastatic melanoma (immunotherapy through Aug 2025)',
        'Parkinson disease (dx 2016, Prof Aggarwal)',
        'CVA Aug 2023 (mild right hemiparesis)',
        'Prostate cancer',
        'Hypercholesterolaemia',
        'GORD',
    ],
    allergies: 'Nil known',
    medications: [
        'Aspirin 100 mg od',
        'Metoprolol 25 mg bd',
        'Rosuvastatin 20 mg od',
        'Maxolon PRN',
        'Melatonin PRN',
        'Stalevo',
        'Sinemet',
        'Zoladex',
    ],
    social:
        'Lives with daughter (primary carer) in Hornsby. House has 32 stairs; 4-WW and stick. Ex-smoker (quit 2003). No driving.',
    functional:
        'NYHA II, SOBOE. Requires help with most heavy ADLs; manages washing; house modified for disability.',

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '65 %',
        AVA: '0.9 cm²',
        'Peak Gradient': '76 mmHg',
        'Mean Gradient': '47 mmHg',
        SVI: '51 ml',
        'Peak AV velocity': '4.3 m/s',
        MR: 'Trivial',
        AR: 'Mild',
        Comments:
            'Tri-leaflet, heavily calcified valve. Markedly restricted opening — Doppler severe AS. Mild AR.',
    },
    angio: 'Unobstructed coronaries (see PDF for full report).',
    ecg: 'Normal sinus rhythm',
    ctIncidentals:
        'Highly calcified valve with annular & LVOT calcification. High right femoral bifurcation. No other significant findings.',
    bloods: {
        MOCA: '24/30',
        Hb: '141',
        Plts: '212',
        Cre: '86',
        eGFR: '74',
        Albumin: '43',
    },
    frailtyScore: '4',

    /* consult summaries ----------------------------------------------*/
    consultTexts: {
        geriatrics:
            'No barrier to TAVI from geriatric perspective; neurologist clearance advised.',
        oncology:
            'Immunotherapy can be paused / rescheduled. Proceed after course completion in July.',
        neurology:
            'Parkinson disease well controlled; happy to proceed with TAVI under conscious sedation (MMSE 28/30 in Jul 2024).',
        cts:
            'Dr Brereton: suitable for surgical salvage if required.',
    },
,
  shepherd: {
  id: 'shepherd',
  name: 'GRAHAM SHEPHERD',
  dob: '1942-09-15',
  mrn: 'ME00466832',
  referralDate: '02/07/2025',
  structuralPhysician: 'Dr Hansen',
  referrer: 'Dr Tony Kull',
  contact: '4390 8664 / 04037 40003 (wife Julie)',
  weight: '86.2 kg',
  height: '166 cm',

  pdfs: {
    referral: ['SHEPHERD Graham - TAVI referral from Tony Kull.pdf'],
    tte: ['SHEPHERD_GRAHAM_TTE WUP _09072025_GS150942.pdf'],
    angio: ['Shepherd Angio Gosford 06.2025.pdf'],
    ecg: ['shepherd ecg.pdf'],
    ct: [
      'SHEPHERD Graham - 88.1623019.pdf',
      'GS 15.9.42.pdf', // Medtronic / device CT
    ],
    geriatrics: ['shepherd dr warrier.pdf'],
    cardiothoracic: ['shepherd Dr Brereton.pdf'],
    renal: ['Graham Shepherd - Renal plan 03.07.2025 08.58.40 - GR.pdf'],
    bloods: [],
  },

  /* history & medications -----------------------------------------*/
  background: [
    'Severe aortic stenosis',
    'Paroxysmal atrial fibrillation',
    'Second-degree heart block (bisoprolol related)',
    'CKD (Dr Simon Roger)',
    'Hypertension',
    'Arthritis',
    'Polyarticular gout',
  ],
  allergies: 'Morphine',
  medications: [
    'Allopurinol 100 mg ½ tab alt days',
    'Aspirin 100 mg od',
    'Atorvastatin 80 mg od',
    'Dapagliflozin 10 mg od',
    'Duodart 0.5/0.4 mg MR od',
    'Probiotic daily',
    'Spironolactone 50 mg od',
    'Irbesartan 300 mg od',
    'Thiamine 100 mg od',
  ],
  social:
    'Retired butcher; non-smoker; 4–6 beers daily × 56 yrs. Lives with wife; walks unaided (4-WW to be purchased).',
  functional: 'SOBOE, fatigue – NYHA II',

  /* investigations -----------------------------------------------*/
  tteData: {
    'LV EF': '60 %',
    AVA: '1.1 cm²',
    'Peak Gradient': '66 mmHg',
    'Mean Gradient': '35 mmHg',
    SVI: '56 ml',
    'Peak AV velocity': '4.06 m/s',
    MR: 'Mild–moderate',
    AR: 'Trivial',
    Comments:
      'Markedly restricted leaflets; peak velocity & AVAi in severe range. Trivial AR.',
  },
  angio: (
    <>
      Dominant RCA.<br />
      LM: minor disease. LAD: 60 % ostial / 90 % mid; severe diagonal disease.<br />
      LCx: 80 % distal. RCA: 80 % calcific ostial + moderate PDA disease.<br />
      <strong>Conclusion:</strong> severe calcific three-vessel CAD.
    </>
  ),
  ecg: 'Sinus rhythm, 1° AV block',
  ctIncidentals: (
    <>
      Gynaecomastia; small hiatus hernia; mesenteric fat stranding with 9 mm node; diverticular
      disease; mild bladder-wall thickening; apical/right-middle-lobe scarring.
    </>
  ),
  bloods: {
    MOCA: '23/30',
    Hb: '93',
    Plts: '220',
    Cre: '305',
    eGFR: '16',
    Albumin: '34',
    Haematocrit: '0.27',
    WBC: '5.7',
  },
  frailtyScore: '4',

  consultTexts: {
    geriatrics: 'Dr Warrier: patient appropriate for TAVI.',
    cts:
      'Dr Brereton: suitable for surgical “bail-out”; favours TAVI as primary strategy.',
    renal:
      'Dr Simon Roger: supports TAVI; cease spironolactone & irbesartan 5 days pre-procedure; dialysis acceptable if required.',
  },
,
  smithm: {
    id: 'smith',
    name: 'MARILYN SMITH',
    dob: '1948-05-13',
    mrn: '0554971',
    referralDate: '22/05/2025',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Tony Kull',
    contact: '0484 871 858',
    weight: '75 kg',
    height: '154 cm',
    pdfs: {
        referral: ['Smith.M referral.pdf'],
        tte: ['Smith.M TTE RNSH 11.7.25.PDF', 'SmitM TTE 6.2.25.pdf'],
        angio: ['Smith.M angio 2023.pdf'],
        ecg: ['Smith.M ECG.pdf'],
        ct: ['Smith.M CT TAVI.pdf', 'Smith.M medtronic.pdf'],
        bloods: [],
        cardiothoracic: ['Smith.M Dr bassin.pdf'],
        renal: ['Smith.M renal letters.pdf'],
    },

    /* Past medical history -------------------------------------------------- */
    background: [
        'ESRF – haemodialysis via left-arm fistula (Mon/Wed/Fri; Prof Roger)',
        'Valvular heart disease (Dr Kull)',
        'Type 2 diabetes mellitus',
        'Hypercholesterolaemia',
        'Hypertension',
        'Obstructive sleep apnoea',
        'Previous type 2 NSTEMI',
        'Visual aura without headache',
        'Hysteroscopy + D&C',
        'Chronic cough/runny nose – Dr Lee (resp); told not emphysema',
    ],

    /* Medications ----------------------------------------------------------- */
    medications: [
        'Carvedilol 3.125 mg',
        'Sevelamer',
        'Pariet',
        'Aspirin',
        'Vytorin 10/20 mg',
        'Rocaltrol',
        'Sifrol',
        'Progout',
    ],

    /* Social & functional --------------------------------------------------- */
    social: `Lives alone with cat. Son near Byron Bay; granddaughter in Sydney visits often.
Independent with ADLs; mobilises with 4-wheel walker for distance.
HCP Level 2 (2 h/week cleaning & shopping); community nurses (leg ulcer healed 19 / 6 / 25).
Ex-smoker (15 pack-years; quit 30 y ago). Occasional alcohol.`,
    functional:
        'Heaviness in chest on exertion (sometimes during dialysis); occasional fatigue/breathlessness; dizziness when bending over. MOCA 30/30.',

    /* TTE 11 / 7 / 25 ------------------------------------------------------- */
    tteData: {
        'LV EF': '55–60 %',
        AVA: '0.9 cm²',
        AVAi: '0.5',
        'Peak Gradient': '60 mmHg',
        'Mean Gradient': '33 mmHg',
        'Peak AV velocity': '3.9 m/s',
        SVI: '51.4',
        AR: 'Moderate',
        MR: 'Mild',
    },

    /* Other investigations -------------------------------------------------- */
    angio: 'Minor coronary artery disease',
    ecg: 'Sinus rhythm; normal PR interval and QRS',
    ctIncidentals: 'Left coronary slightly low; right sinus-of-Valsalva undersized',
    bloods: {
        Hb: '115',
        Plts: '227',
        Creatinine: '717',
        eGFR: '4',
        Albumin: '37',
    },

    consultTexts: {
        cardiothoracic: `CT chest shows an essentially porcelain aorta → prohibitive surgical risk.
Symptoms presently well managed; continue medical therapy.
If symptoms progress, consider very high-risk surgery or TAVI.
– Dr Levi Bassin (2023)`,
    },
,
  sorentino: {
    id: 'sorentino',
    name: 'CARLOS SORENTINO',
    dob: '1945-09-26',
    mrn: 'ME00309577 (RNSH 0669062)',
    referralDate: '12/06/2025',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Kozor',
    contact: '0400 737 045',
    weight: '115 kg',
    height: '182 cm',
    pdfs: {
        referral: ['Sorentino Health summary.pdf', 'SOrentino Cardio IP review.pdf'],
        tte: ['SORENTINO_CARLOS TTE 10062025_CS260945 (1).pdf'],
        angio: ['Sorrentino Angio.pdf'],
        ecg: ['Sorentino ECG.pdf'],
        ct: ['CS 26.9.45.pdf'],
        cardiothoracic: [
            'SorentinoCarlos OP report.pdf',
            'Mr Carlos Sorentino Dr Brereton Letter 21 July 2025.pdf', // ← added
        ],
        bloods: [],
    },

    /* clinical data (unchanged) -------------------------------------*/
    background: [
        'CABG ×4 (2000, SAN)',
        'CAD / ischaemic heart disease',
        'Insulin-dependent type 2 diabetes',
        'Left carotid endarterectomy 2019',
        'Hypertension',
        'OSA → CPAP',
        'Chronic back pain (L5/S1 laminectomy; radiculopathy)',
    ],
    medications: [
        'Aspirin 100 mg od',
        'Clopidogrel 75 mg od',
        'Rosuvastatin 10 mg od',
        'Metformin 1 g nocte',
        'Duodart 0.5/0.4 mg',
        'Amitriptyline 10 mg od',
        'Amlodipine 10 mg od',
        'Protaphane 40 u bd',
        'Atenolol 50 mg od',
        'Tramadol SR 150 mg bd',
        'Ramipril 10 mg od',
        'Diazepam 5 mg prn',
    ],
    social:
        'Lives with wife (Lucy) and son. Ex-smoker (45 PY), quit age 60. Social alcohol use; no recreational drugs. Independent with ADLs; still drives.',
    functional:
        'Walks ≈ 500 m but limited by back / hip pain. Worsening SOBOE, chest discomfort, overall slowing.',
    tteData: {
        'LV EF': '65–70 %',
        AVA: '0.91 cm²',
        'Peak Gradient': '49 mmHg',
        'Mean Gradient': '27 mmHg',
        SVI: '33 ml/m²',
        'Peak AV velocity': '3.50 m/s',
        MR: 'Mild',
        AR: 'Trivial',
        Comments:
            'Tri-leaflet AV; markedly calcified & restricted. Paradoxical severe AS (low-flow/low-gradient, normal EF).',
    },
    angio:
        'Severe native-vessel disease. Patent SVG→OM2 & SVG→RPDA; occluded LAD & LCx, atretic LIMA. Med-manage; consider CTO-PCI if symptomatic.',
    ecg: 'Sinus rhythm, first-degree AVB, RBBB',
    ctIncidentals: 'No dedicated CT-TAVI report yet.',
    bloods: {
        MOCA: 'N/A',
        Frailty: '3',
        Hb: '136',
        Plts: '216',
        Cre: '81',
        eGFR: '79',
        Albumin: '45',
    },

    /* updated Cardiothoracic consult --------------------------------*/
    consults: {
        'Cardiothoracic Surgeon': `His appearance at almost 80 years of age suggests that he would be much better served by percutaneous than open means.

I fully agree with your proposed management of TAVI first up, followed by intervention on the left anterior descending, or if it came to it, an off-pump right-mammary–radial composite to the distal LAD as a last resort.

Rescue intervention in the context of a complication of the TAVI would be complex and difficult, but the Sorrentino family would rather pursue this than a nihilistic approach.

Thanks for the opportunity to review him; he came to see me a few days before seeing Dr Manu Mathur, but I am sure that Manu would think likewise.

– John Brereton`,
    },
,
  tefler: {
  id: 'telfer',
  name: 'JANET TELFER',
  dob: '1940-09-19',
  mrn: '0722105',
  referralDate: '—',
  structuralPhysician: 'Dr Hansen',
  referrer: 'Dr Vernon',
  contact: '0421 826 573',
  weight: '66 kg',
  height: '162 cm',
  pdfs: {
    referral: ['Telfer structural consult.pdf'],
    tte: ['Telfer RNSH TTE.pdf'],
    angio: ['Telfer angio.pdf'],
    ecg: ['Telfer ECG.pdf'],
    ct: ['Telfer CT TAVI.pdf', 'Telfer medtronic.pdf'], // ← added medtronic file
    agedCare: ['Telfer aged care.pdf'],
  },

  background: ['Severe aortic stenosis', 'Hypertension', 'Hypothyroidism'],
  medications: ['Lercanidipine 10 mg', 'Levothyroxine 50 µg'],
  social:
    'Lives at home with son, never smoked; 2–3 std EtOH some weeks, long periods abstinent; recently caravanned up north coast',
  functional:
    'Was walking 30 min on flat, now 15 min; admission with vertigo 18 Jul 2025; occasional lower-limb oedema; denies chest pain, PND, orthopnoea',
  tteData: {
    'LV EF': '61%',
    AVA: '0.7 cm²',
    AVAi: '0.4',
    'Peak Gradient': '113 mmHg',
    'Mean Gradient': '75 mmHg',
    'Peak AV velocity': '5.3 m/s',
    MR: 'Trivial',
    AR: 'Mild',
    Comments:
      'Heavily calcified (prob. trileaflet) AV; Doppler consistent with severe AS; at least mild AR',
  },
  angio: 'Mild coronary artery disease',
  ecg: 'Sinus rhythm',
  ctIncidentals: (
    <>
      11 mm segment-7 hypodense liver lesion (likely cyst).<br />
      Segment-8 sub-capsular lesion – probable scarring.<br />
      5 mm solid pulmonary nodule – low-risk lifelong non-smoker.
    </>
  ),
  bloods: { MOCA: '29/30', Hb: '134', Plts: '192', Cre: '52', eGFR: '84', Albumin: '35' },
  consults: { 'Aged Care': 'Dr Liu', 'Cardiothoracic Surgeon': 'Dr Brereton' },
,
  vandevelde: {
    id: 'vandevelde',
    name: 'JANICE VAN DE VELDE',
    dob: '1936-06-01',
    mrn: 'ME00225818',
    referralDate: '',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Choong',
    contact: '0418 440 644',
    altContact: 'Daughter Jacqui — 0413 301 088',
    weight: '59 kg',
    height: '157 cm',

    pdfs: {
        tte: ['J VAN DE VELDE TTE.pdf'],
        toe: [
            'J VAN DE VELDE toe.pdf',
            'Royal North Shore Hospital TOE review for MitraClip Janice Van De Velde.pdf',
        ],
        angio: ['Vaqn de Velde angio 26.2.25.pdf'],
        rhc: [],                                   // values in MDT but no dedicated PDF
        agedCare: ['VanDeVelde Aged Care review.docx'],
        correspond: [
            'Van de Velde Bhindi Rooms.pdf',
            'Van De Velde Garrick Don.pdf',
            'VAN DE VELDE Janice Dr Warrier.pdf',
            'VandeVelde Dr Choong 10.07.25.pdf',
        ],
        summary: ['Van De VeldeTricuspid patient summary.docx'],
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'Atrial fibrillation → Apixaban 2.5 mg bd',
        'TAVI Oct 2020 (Bhindi)',
        'Osteoarthritis',
        'Breast cancer – on follow-up (Prof Lim / Dr Mo)',
        'Chronic kidney disease',
        'Hypertension',
        'Pulmonary fibrosis',
    ],
    medications: [
        'Apixaban 2.5 mg bd',
        'Metoprolol (Minax) 25 mg bd',
        'Entresto 49/51 mg bd',
        'Furosemide 20 mg od',
        'Digoxin 62.5 µg od',
    ],
    social:
        'Lives with good functional level; mobilises with 4-WW. Supported by daughter Jacqui. No cognitive concerns.',
    functional:
        'ET 25–50 m; denies SOB, palpitations, chest pain or oedema.',

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '60 %',
        TAPSE: '1.5 cm',
        ePASP: '49 mmHg',
        Comments:
            'TAVI prosthesis well-seated; trivial posterior PVL. Severe secondary TR (coaptation gap 5 mm). Mild MR. RV: low-normal radial & reduced longitudinal function.',
    },
    toeSummary:
        'Severe secondary TR (central S-P & S-A jets), coaptation gap 5 mm. TriClip planned — see TOE PDFs.',
    rhc: (
        <>
            <b>RHC&nbsp;Feb 2025 (Dr Choong):</b>&nbsp;
            PASP 55 / 19 (32)&nbsp;&nbsp;PCWP 11&nbsp;&nbsp;CO 4.3&nbsp;&nbsp;PVR 4.9&nbsp;&nbsp;TPG 21
        </>
    ),
    angio:
        '26 Feb 2025: moderate diffuse CAD; see PDF for vessel detail.',
    bloods: {
        Date: '28 Feb 2025',
        Hb: '127',
        Plts: '181',
        Cre: '128',
        eGFR: '32',
    },
    moca: '26/30',
    agedCareNote:
        'Dr Warrier (17 Jun 2025): medically suitable for TriClip; counselled re risk of post-op delirium with GA.',

};

export type PatientRecord = typeof patientRecords[keyof typeof patientRecords];
