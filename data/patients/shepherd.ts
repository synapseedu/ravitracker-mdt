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
    tte: ['Shepherd TTE Choong.pdf'],
    angio: ['Shepherd Angio Gosford 06.2025.pdf'],
    ecg: ['shepherd ecg.pdf'],
    ct: ['SHEPHERD Graham - CT TAVI.pdf', 'Shepherd medtronic.pdf'],
    referral: ['SHEPHERD Graham - TAVI referral from Tony Kull.pdf'],
    medtronic: ['Shepherd medtronic.pdf'],
    geriatrics: ['shepherd dr warrier.pdf'],
    cardiothoracic: ['shepherd Dr Brereton.pdf'],
    renal: ['Shepherd - Renal plan 03.07.2025 08.58.40 - GR.pdf'],
  },

  background: [
    'Severe aortic stenosis',
    'Paroxysmal atrial fibrillation',
    '2nd-degree AV block with prior beta-blocker',
    'Chronic kidney disease (Dr Simon Roger)',
    'Hypertension, hyperlipidaemia',
    'Arthritis, polyarticular gout',
  ],

  medications: [
    'Allopurinol 50 mg on alternate days',
    'Aspirin 100 mg daily',
    'Atorvastatin 80 mg mane',
    'Dapagliflozin 10 mg daily',
    'Dutasteride/tamsulosin MR daily',
    'Probiotic (Lactobacillus) daily',
    'Spironolactone 50 mg daily',
    'Irbesartan 300 mg mane',
    'Thiamine 100 mg daily',
  ],

  social:
    'Retired butcher; lives independently with wife in Budgewoi. Drinks 4–6 beers daily (longstanding). Non-smoker. Mobilises independently; a 4WW is being arranged for discharge support.',

  functional:
    'SOBOE and fatigue; NYHA II by report.',

  // Echo values keyed exactly as they appear in many patient entries
  tteData: {
    'LV EF': '60–65 %',
    AVA: '1.1 cm²',
    'AVAi': '0.57 cm²/m²',
    'Peak Gradient': '66 mmHg',
    'Mean Gradient': '35 mmHg',
    SVI: '56 mL/m²',
    'Peak AV velocity': '4.06 m/s',
    AR: 'Trivial',
    MR: 'Mild–moderate',
    Comments:
      'Trileaflet valve; severe by velocity/index; markedly thickened and calcified leaflets; mild pulmonary hypertension.',
  },

  angio:
    'Severe calcific three-vessel CAD: LAD 60% ostial and 90% mid; LCx 80% distal; RCA 80% ostial.',

  ecg: 'Sinus rhythm (ECG on file).',

  ctIncidentals:
    'Aortic valve calcium score 2191; ascending aorta 44 mm. Addendum: at least moderate–severe right ICA origin stenosis; possible high-grade right vertebral origin stenosis.',

  cognitive: {
    MOCA: '23/30',
    Frailty: '4',
  },

  bloods: {
    Hb: '93',
    Plts: '220',
    Cre: '305',
    eGFR: '16',
    Albumin: '34',
  },

  investigationSummary: {
    tte:
      'TTE (09/07/2025, Dr Choong): EF 60–65%; Vmax 4.06 m/s; AVA 1.1 cm² (AVAi 0.57); PG/MG 66/35 mmHg. Trileaflet valve, severe by velocity/index; trivial AR; mild–mod MR.',
    angio:
      'Coronary angiogram (24/06/2025, Dr Kull): severe calcific three-vessel disease—LAD 60% ostial & 90% mid; LCx 80% distal; RCA 80% ostial.',
    ct:
      'CT TAVI (10/07/2025): valve calcium score 2191; ascending aorta 44 mm; addendum notes ≥moderate–severe R ICA stenosis and possible high-grade R vertebral origin stenosis.',
    ecg:
      'ECG on file—sinus rhythm noted.',
    consults: [
      'Geriatrics — Dr Warrier: appropriate to proceed with TAVI from geriatrics perspective.',
      'Cardiothoracic — Dr Brereton: suitable for surgical salvage.',
      'Renal — Dr Simon Roger: happy to proceed with TAVI; cease spironolactone and irbesartan 5 days pre-CT and 5 days pre‑TAVI; low likelihood of dialysis required.',
    ],
  },
};

export default patient;
