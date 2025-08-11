import type { Patient } from './types';

const patient: Patient = {
  id: 'gaffney',
  name: 'Marian Gaffney',
  dob: '1943-07-18',
  mrn: 'ME00143507',
  referralDate: '', // not specified
  referring: 'Dr Usaid Allahwala',
  consulting: 'Dr Hansen',
  contact: '02 9877 0498',
  weight: '73 kg',
  height: '155 cm',
  status: 'private',
  badges: ['TAVI'],

  pdfs: {
    tte: [
      'GAFFNEY_MARIAN_ sev as tte _08072025_MG180743.pdf',
      'TTE GAFFNEY_MARIAN_18071943_11022025_MG180743 (1).pdf',
    ],
    angio: ['Gaffney Angio.pdf'],
    ecg: [],
    ct: [],

    // consult/supporting docs
    respiratory: ['Gaffney Garrick Don rv.pdf'],
    endocrinology: ['gaffney endorine.pdf'],
    gastro: ['gaffney gastro.pdf'],
    agedCare: ['gaffney dr warrier.pdf'],
  },

  background: [
    'Severe symptomatic aortic stenosis',
    'Type 2 diabetes mellitus',
    'Chronic lymphocytic leukaemia (Dr Raymond McKinley)',
    'Multinodular goitre with mild hyperthyroidism',
    'Acromegaly — pituitary tumour resection Sep 2023 (Dr Little; Dr Rory Clifton‑Bligh)',
    'Hypertension',
    'Hypercholesterolaemia',
    'GORD',
    'Colonic polyps',
    'Ventricular ectopy (Dr Allahwala)',
  ],

  medications: [
    'Azopt 1% eye drops 1 drop BD both eyes',
    'Metoprolol 50 mg BD',
    'Rosuvastatin 5 mg nocte',
    'Metformin XR 1 g nocte',
    'Ferrograd C 325/500 mg — 1 tab twice weekly',
    'Magnesium 500 mg daily',
    'Clopidogrel 75 mg daily',
    'Poly Gel 0.3% eye gel PRN',
    'Pantoprazole 40 mg BD',
  ],

  social:
    'Lives alone; retired secretary; mobilises with stick; non‑smoker; very occasional alcohol.',
  functional:
    'NYHA III. Worsening SOBOE over 6–12 months; estimated exercise tolerance ~100 m.',

  // Key echo numbers (8 Jul 2025)
  tteData: {
    'LV EF': '65 %',
    AVA: '0.7 cm²',
    'AVA index': '0.41 cm²/m²',
    'Peak Gradient': '64 mmHg',
    'Mean Gradient': '38 mmHg',
    SVI: '38 mL/m²',
    'Peak AV velocity': '4.0 m/s',
    AR: 'Trivial',
    MR: 'Mild',
    Comments:
      'Trileaflet AV with marked calcification and restricted opening → severe AS. Marked posterior MAC with mild MS (MG 6 mmHg, PHT 77 ms, MVA ~2.8 cm²).',
  },

  angio: 'Patent ostial LCx stent; mild disease elsewhere; right‑dominant system.',
  ecg: 'Sinus rhythm, first‑degree PR, ventricular ectopics.',

  ctIncidentals:
    '7 mm lung nodule noted on imaging; very slow growth over years. Plan: follow‑up with respiratory; life expectancy > 12 months per consult.',

  cognitive: {
    MOCA: '27/30',
    Frailty: '4',
  },

  bloods: {
    Hb: '135',
    Plts: '143',
    INR: '—',
    Cre: '49',
    eGFR: '88',
    Albumin: '40',
    WBC: '11.1',
  },

  // Per‑investigation summaries with sources
  investigationSummary: {
    tte:
      '08/07/2025: Severe calcific AS (AVA 0.7 cm², AVAi 0.41 cm²/m², MG 38 mmHg, PG 64 mmHg, SVi 38 mL/m²). Trivial AR. Mild MR with significant posterior MAC; mild MS (MG 6 mmHg, PHT 77 ms; MVA ≈2.8 cm²).',
    angio:
      '07/07/2025: Right‑dominant coronaries; patent ostial LCx DES (2/2025); mild disease in LAD/LCx/RCA; LM with separate LAD/LCx origins.',
    ctTavi:
      'Incidental 7 mm lung nodule; very slow change over years; outpatient follow‑up arranged (no immediate contraindication to TAVI).',
  },
  consults: [
    {
      date: '2025',
      clinician: 'Respiratory — Dr Garrick Don',
      outcome:
        '7 mm lung nodule with very slow growth; >12‑month life‑expectancy; outpatient review arranged; proceed once clinically appropriate.',
      source: ['Gaffney Garrick Don rv.pdf'],
    },
    {
      date: '2025',
      clinician: 'Endocrinology',
      outcome: 'No endocrine barriers to proceeding with TAVI.',
      source: ['gaffney endorine.pdf'],
    },
    {
      date: '2025',
      clinician: 'Gastroenterology',
      outcome:
        'Bowel symptoms related to compaction on AXR; managed with laxatives; no barrier to TAVI from GI perspective.',
      source: ['gaffney gastro.pdf'],
    },
    {
      date: '2025',
      clinician: 'Aged Care / Geriatrics — Dr Warrier',
      outcome: 'Appropriate to proceed with TAVI from geriatrics perspective.',
      source: ['gaffney dr warrier.pdf'],
    },
  ],
};

export default patient;
