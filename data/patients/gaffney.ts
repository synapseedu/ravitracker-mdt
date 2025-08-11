import type { Patient } from './types';

const patient: Patient = {
  id: 'gaffney',
  name: 'Marian Gaffney',
  dob: '1943-07-18',
  mrn: 'ME00143507',
  referralDate: '', // not specified
  referring: 'Dr Usaid Allahwala',
  consulting: 'Dr Peter Hansen',
  contact: 'Phone: 02 9877 0498',
  weight: '73 kg',
  height: '155 cm',
  status: 'private',
  badges: ['TAVI'],

  pdfs: {
    tte: ['GAFFNEY_MARIAN TTE 08072025_MG180743.pdf'],
    angio: ['Gaffney Angio.pdf'],
    ecg: [], // no standalone ECG file provided
    ct: [],  // no CT-TAVI PDF provided (Medtronic plan below)
    medtronic: ['Gaffney medtronic.pdf'],
    respiratory: ['Gaffney respiratory.pdf'],
    agedCare: ['gaffney dr warrier.pdf'],
    endocrinology: ['gaffney endorine.pdf'],
    gastro: ['gaffney gastro.pdf'],
  },

  background: [
    'Severe symptomatic aortic stenosis',
    'Type 2 diabetes mellitus',
    'Chronic lymphocytic leukaemia (Dr Raymond McKinley)',
    'Multinodular goitre with mild hyperthyroidism',
    'Acromegaly — pituitary tumour resection Sep 2023 (Dr Little); follow‑up with Prof Rory Clifton‑Bligh',
    'Hypertension',
    'Hypercholesterolaemia',
    'GORD',
    'Colonic polyps',
    'Ventricular ectopy (cardiology follow‑up with Dr Allahwala; 2022 TTE mild AS/AR)',
  ],

  medications: [
    'Metoprolol 50 mg bd',
    'Rosuvastatin 5 mg nocte',
    'Metformin XR 1 g nocte',
    'Clopidogrel 75 mg daily',
    'Pantoprazole 40 mg bd',
    'Ferrograd C 325/500 mg — 1 tab twice weekly',
    'Magnesium 500 mg daily',
    'Azopt 1% eye drops — 1 drop bd both eyes',
    'PolyGel 0.3% eye gel — prn',
  ],

  social:
    'Lives alone; retired secretary; mobilises with a stick; non‑smoker; very occasional alcohol.',
  functional:
    'NYHA III. Worsening dyspnoea over 6–12 months; exercise tolerance ~100 m.',

  tteData: {
    'LV EF': '65 %',
    AVA: '0.7 cm²',
    AVAi: '0.41 cm²/m²',
    'Peak Gradient': '64 mmHg',
    'Mean Gradient': '38 mmHg',
    SVI: '38 mL/m²',
    'Peak AV velocity': '4.0 m/s',
    AR: 'Trivial',
    MR: 'Mild',
    Comments:
      'Trileaflet AV with marked calcification and restricted opening — severe AS. Marked posterior MAC with mild transmitral stenosis (mean diastolic PG 6 mmHg; PHT 77 ms; MVA ~2.8 cm²).',
  },

  angio:
    'Patent stent in ostial LCx with mild disease elsewhere; mild LAD and RCA disease; right dominant; radial access.',

  ecg: 'Sinus rhythm, first‑degree PR; ventricular ectopics (per notes).',

  ctIncidentals:
    'No dedicated CT-TAVI PDF supplied. Medtronic plan notes annulus derived Ø ≈20.5–20.8 mm, annular angulation ≈41°. See investigation summary for access and coronaries.',

  cognitive: {
    MOCA: '27/30',
    Frailty: '4',
    AUS: '2',
  },

  bloods: {
    Hb: '135',
    Plts: '143',
    Cre: '49',
    eGFR: '88',
    Albumin: '40',
    WBC: '11.1',
  },

  investigationSummary: {
    'TTE (08/07/2025)': {
      summary:
        'EF 65%; AVA 0.7 cm² (AVAi 0.41); PG 64 / MG 38 mmHg; SVI 38 mL/m²; severe calcific trileaflet AS; trivial AR; mild MR. Posterior MAC with mild MS (mean 6 mmHg; PHT 77 ms; MVA ~2.8 cm²).',
      links: ['GAFFNEY_MARIAN TTE 08072025_MG180743.pdf'],
    },
    'Angiogram (07/07/2025)': {
      summary:
        'Widely patent ostial LCx stent; mild proximal LAD; mild RCA; right dominant. Admitted for TAVI workup.',
      links: ['Gaffney Angio.pdf'],
    },
    'ECG': {
      summary: 'Sinus rhythm, 1° AV block, ventricular ectopy (from clinical notes).',
      links: [],
    },
    'CT / Medtronic': {
      summary:
        'Annulus area ~329 mm²; derived Ø 20.5–20.8 mm; annular angulation ≈41°. Left main height ~10.6 mm; right ~17.9 mm. SOV diameters ~29.4/26.7/28.2 mm; STJ ~21.1–21.7 mm. Femoral access: R EIA 4.9×5.9 mm; L EIA 5.6×6.5 mm (borderline small).',
      links: ['Gaffney medtronic.pdf'],
    },
    'Respiratory / Lung nodule': {
      summary:
        '7 mm pulmonary nodule; very slow interval growth on prior imaging; life expectancy >12 months; follow‑up with respiratory in rooms; not a barrier to TAVI.',
      links: ['Gaffney respiratory.pdf'],
    },
  },

  consults: [
    {
      specialty: 'Interventional Cardiology',
      clinician: 'Dr Usaid Allahwala',
      outcome:
        'Coronary angiography shows patent LCx stent with only mild residual disease; proceed with TAVI work‑up.',
      links: ['Gaffney Angio.pdf'],
    },
    {
      specialty: 'Structural Cardiology',
      clinician: 'Dr Peter Hansen',
      outcome:
        'Consulting physician for TAVI pathway (referral and echo overseen).',
      links: ['GAFFNEY_MARIAN TTE 08072025_MG180743.pdf'],
    },
    {
      specialty: 'Respiratory',
      clinician: 'Dr Garrick Don',
      outcome:
        'Slow‑growing 7 mm lung nodule; follow‑up arranged; not expected to limit TAVI candidacy.',
      links: ['Gaffney respiratory.pdf'],
    },
    {
      specialty: 'Aged Care / Geriatrics',
      clinician: 'Dr Warrier',
      outcome:
        'Appropriate for TAVI from geriatrics perspective; may need rehab post‑procedure given functional decline.',
      links: ['gaffney dr warrier.pdf'],
    },
    {
      specialty: 'Endocrinology',
      clinician: 'Prof Rory Clifton‑Bligh',
      outcome: 'Ongoing follow‑up for acromegaly; no barriers to TAVI noted.',
      links: ['gaffney endorine.pdf'],
    },
    {
      specialty: 'Gastroenterology',
      clinician: '—',
      outcome:
        'Assessed for bowel symptoms; abdominal X‑ray showed fecal compaction—treated with laxatives.',
      links: ['gaffney gastro.pdf'],
    },
  ],
};

export default patient;
