import type { Patient } from './types';

const patient: Patient = {
  id: 'gaffney',
  name: 'Marian Gaffney',
  dob: '1943-07-18',
  mrn: 'ME00143507',
  referralDate: '',
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
    ecg: [],
    ct: [],
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
    'Acromegaly — pituitary tumour resection Sep 2023 (Dr Little); follow-up with Prof Rory Clifton-Bligh',
    'Hypertension',
    'Hypercholesterolaemia',
    'GORD',
    'Colonic polyps',
    'Ventricular ectopy (cardiology follow-up with Dr Allahwala; 2022 TTE mild AS/AR)',
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
    'Lives alone; retired secretary; mobilises with a stick; non-smoker; very occasional alcohol.',
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
    'Patent stent in ostial LCx with mild disease elsewhere; right dominant; radial access.',

  ecg: 'Sinus rhythm, first-degree PR; ventricular ectopics (per notes).',

  ctIncidentals: 'Medtronic planning report summarised below.',

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
    tte:
      'TTE (08/07/2025): EF 65%; AVA 0.7 cm² (AVAi 0.41); PG/MG 64/38 mmHg; SVI 38 mL/m²; severe calcific trileaflet AS; trivial AR; mild MR; posterior MAC with mild MS (mean 6 mmHg; PHT 77 ms; MVA ≈2.8 cm²).',
    angio:
      'Angiogram (Jul 2025): Ostial LCx stent widely patent; mild LAD/RCA disease; right dominant — proceeding with TAVI work-up.',
    medtronic:
      'CT / Medtronic planning: Annulus area ~329 mm² (derived Ø ~20.5–20.8 mm); annular angulation ~41°; LM height ~10.6 mm, R ~17.9 mm; SOV ~29/27/28 mm; STJ ~21–22 mm; femoral access borderline small (R EIA 4.9×5.9 mm, L EIA 5.6×6.5 mm).',
    respiratory:
      'Respiratory (lung nodule): 7 mm nodule with very slow interval growth; life expectancy >12 months; outpatient follow-up — no barrier to TAVI.',
  },

  consults: [
    {
      date: '2025-07',
      clinician: 'Dr Usaid Allahwala (Interventional Cardiology)',
      outcome:
        'Coronary angiography shows patent LCx stent with only mild residual disease; proceed with TAVI work-up.',
      source: ['Gaffney Angio.pdf'],
    },
    {
      date: '2025-07',
      clinician: 'Dr Peter Hansen (Structural Cardiology)',
      outcome: 'Consulting physician for TAVI pathway.',
      source: ['GAFFNEY_MARIAN TTE 08072025_MG180743.pdf'],
    },
    {
      date: '2025-07',
      clinician: 'Dr Garrick Don (Respiratory)',
      outcome:
        'Slow-growing 7 mm lung nodule; follow-up arranged; not expected to limit TAVI candidacy.',
      source: ['Gaffney respiratory.pdf'],
    },
    {
      date: '2025-07',
      clinician: 'Dr Warrier (Aged Care / Geriatrics)',
      outcome:
        'Appropriate for TAVI from geriatrics perspective; may need rehab post-procedure given functional decline.',
      source: ['gaffney dr warrier.pdf'],
    },
    {
      date: '2025-07',
      clinician: 'Prof Rory Clifton-Bligh (Endocrinology)',
      outcome: 'Ongoing follow-up for acromegaly; no barriers to TAVI noted.',
      source: ['gaffney endorine.pdf'],
    },
    {
      date: '2025-07',
      clinician: 'Gastroenterology',
      outcome:
        'Assessed for bowel symptoms; abdominal X-ray showed fecal compaction—treated with laxatives.',
      source: ['gaffney gastro.pdf'],
    },
  ],
};

export default patient;
