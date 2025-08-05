import type { Patient } from './types';

const patient: Patient = {
  id: 'edwards',
  name: 'Frederick Edwards',
  dob: '1937-12-22',
  mrn: 'ME003210',
  referralDate: '15/05/2025',
  consulting: 'Dr Bhindi',
  referring: 'Dr Rao',
  contact: '—',
  weight: '82 kg',
  height: '175 cm',
  status: 'public',
  badges: ['MitraClip'],
  pdfs: {
    tte: ['Edwards TTE.pdf'],
    toe: ['Edwards TOE.pdf'],
    angio: ['Edwards RHC and LHC.pdf'],
    ecg: ['Edwards ECG.pdf'],
    referral: ['Edwards Referral.pdf'],
    cts: ['Edwards Dr Mathur letter.pdf'],
  },
  background: [
    'Severe degenerative mitral regurgitation',
    'Ischaemic cardiomyopathy',
    'Permanent atrial fibrillation',
    'Hypertension',
    'Type 2 diabetes mellitus',
    'Chronic kidney disease stage 3',
  ],
  medications: [
    'Apixaban 5 mg bd',
    'Metoprolol 50 mg bd',
    'Frusemide 40 mg mane',
    'Perindopril 5 mg mane',
    'Atorvastatin 40 mg nocte',
    'Metformin 1 g bd',
  ],
  social: 'Lives with spouse; ex-smoker (40 pack years, quit 1990); minimal alcohol.',
  functional:
    'NYHA III with exertional dyspnoea and orthopnoea; walks 100 m with rests.',
  tteData: {
    'LV EF': '35 %',
    MR: 'Severe',
    TR: 'Mild',
    'LA Volume': '120 ml',
    'Pulmonary Pressure': '45 mmHg',
    Comments:
      'Flail P2 scallop causing severe MR; moderately depressed LV function.',
  },
  toeData: {
    'MR Etiology': 'Degenerative flail P2',
    EROA: '0.6 cm²',
    'Regurgitant Volume': '60 ml',
    Comments: 'Favourable anatomy for MitraClip.',
  },
  angio: 'Non-obstructive coronaries; mild pulmonary hypertension.',
  ecg: 'Atrial fibrillation, rate controlled.',
  ctIncidentals: 'No significant incidental findings.',
  bloods: { Hb: '125', Plts: '220', Cre: '95', eGFR: '60', INR: '1.1', Albumin: '38' },
  agedCare: 'MOCA 26/30 – suitable for procedure.',
};

export default patient;
