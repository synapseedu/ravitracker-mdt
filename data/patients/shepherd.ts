import type { Patient } from './types';

const patient: Patient = {
  id: 'shepherd',
  name: 'Graham Shepherd',
  dob: '1942-09-15',
  mrn: 'ME00466832',
  referralDate: '2025-07-02',
  referring: 'Dr Tony Kull',
  consulting: 'Dr Peter Hansen',
  contact: 'Home: 4390 8664; Wife (Julie): 04037 40003',
  weight: '86.2 kg',
  height: '166 cm',
  status: 'private',
  badges: ['TAVI'],
  pdfs: {
    tte: ['SHEPHERD_GRAHAM_TTE WUP _09072025_GS150942.pdf'],
    ecg: ['shepherd ecg.pdf'],
    ct: ['SHEPHERD Graham - 88.1623019.pdf'],
    referral: ['SHEPHERD Graham - TAVI referral from Tony Kull.pdf'],
    agedCare: ['shepherd dr warrier.pdf'],
    ctsx: ['shepherd Dr Brereton.pdf'],
    // If available in your repo, include the cath below and I'll auto-summarise it:
    angio: ['Shepherd Angio Gosford 06.2025.pdf'],
  },
  background: [
    'Severe aortic stenosis (tri‑leaflet)',
    'Paroxysmal atrial fibrillation',
    'History of second‑degree AV block (on bisoprolol previously)',
    'Chronic kidney disease (known to Dr Simon Roger)',
    'Hypertension',
    'Arthritis; polyarticular gout',
  ],
  medications: [
    'Allopurinol 100 mg — ½ tab every other day',
    'Aspirin (Cartia) 100 mg daily',
    'Atorvastatin 80 mg mane',
    'Dapagliflozin 10 mg daily',
    'Dutasteride–tamsulosin MR daily',
    'Lactobacillus probiotic daily',
    'Spironolactone 50 mg daily',
    'Irbesartan 300 mg mane',
    'Thiamine 100 mg daily',
  ],
  allergies: ['Morphine'],
  social:
    'Retired butcher; lives with wife in Budgewoi. Drinks 4–6 beers daily (longstanding). Non‑smoker. Independent with mobility (no aids).',
  functional:
    'SOBOE and fatigue — NYHA II. Independent ADLs; wife considering 4‑wheel walker purchase on discharge.',
  tteData: {
    'LV EF': '60–65 %',
    AVA: '1.1 cm²',
    AVAi: '0.57 cm²/m²',
    'Peak Gradient': '66 mmHg',
    'Mean Gradient': '35 mmHg',
    SVI: '56 mL/m²',
    'Peak AV velocity': '4.06 m/s',
    AR: 'Trivial',
    MR: 'Mild–moderate',
    Comments:
      'Tri‑leaflet valve with markedly thickened/calcified cusps and restricted opening; severe by peak velocity and AVAi. LAVI ~50 mL/m²; PASP ~39 mmHg.',
  },
  angio:
    'Severe calcific three‑vessel coronary artery disease (per treating team note/angiography).',
  ecg: 'Sinus rhythm (first‑degree AV block previously noted clinically).',
  ctIncidentals:
    'Marked aortic valve calcification (Agatston ~2191). Ascending aorta dilated to 44 mm. Bovine arch with tortuous, calcified great vessels; suspected significant R‑ICA origin stenosis and vertebral artery disease on addendum.',
  cognitive: {
    MOCA: '23/30',
  },
  bloods: {
    Hb: '93',
    Plts: '220',
    Cre: '305',
    eGFR: '16',
    Albumin: '34',
    Hct: '0.27',
    WBC: '5.7',
  },
  investigationSummary: {
    tte:
      '09/07/2025 (Choong): EF 60–65%; AV Vmax 4.06 m/s; PG/MG 66/35 mmHg; AVA 1.1 cm² (AVAi 0.57); SVi 56; mild–mod MR; trivial AR — severe by peak V and AVAi.',
    ct:
      '09–10/07/2025: Valve calcium score 2191; ascending aorta 44 mm; bovine arch; tortuous, calcified great vessels; addendum—R‑ICA origin at least mod–severe (possible high‑grade) stenosis; vertebral artery disease.',
    ecg:
      'Sinus rhythm on tracing',
    angio:
      'Awaiting cath PDF to summarise; clinical note states severe calcific three‑vessel CAD.',
    referral:
      'Dr Tony Kull referral requesting TAVI work‑up with severe symptomatic AS.',
    consults: [
      'Geriatrics (Dr Warrier): appropriate to proceed from geriatrics perspective.',
      'CTSx (Dr Brereton): surgical salvage opinion available if needed.',
      'Renal (Dr Simon Roger): supports proceeding with TAVI; hold spironolactone/irbesartan 5 days pre‑CT and pre‑TAVI; dialysis not anticipated (per summary).',
    ],
  },
};

export default patient;
