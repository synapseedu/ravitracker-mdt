import type { Patient } from './types';

const patient: Patient = {
  id: 'dunbar',
  name: 'Thomas Dunbar',
  dob: '1938-01-23',
  mrn: 'ME006159',
  referralDate: '24/07/2025',
  consulting: 'Dr Hansen',
  referring: 'Dr Natasha Huon',
  contact: '—',
  weight: '66 kg',
  height: '169 cm',
  status: 'private',
  badges: ['TAVI'],
  pdfs: {
    tte: ['DUNBAR_THOMAS_TTE_24.07.2025_TD230138.pdf'],
    angio: ['Dunbar Angio.pdf'],
    ecg: ['Dunbar ecg.pdf'],
    ct: ['DUNBAR Thomas - CT_TAVI.pdf', 'Dunbar medtronic.pdf'],
    bloods: ['Dunbar bloods.pdf'],
    agedCare: ['Dunbar Aged Care.pdf'],
  },
  background: [
    'Severe symptomatic aortic stenosis',
    'Hypertension',
    'Hyperlipidaemia',
    'Chronic kidney disease stage 3a',
    'Ex-smoker (quit 1980)',
  ],
  medications: [
    'Perindopril 5 mg mane',
    'Atorvastatin 40 mg nocte',
    'Aspirin 100 mg mane',
    'Frusemide 20 mg mane',
  ],
  social:
    'Lives with wife; retired electrician; ex-smoker (20 pack years); occasional wine.',
  functional:
    'NYHA II–III; walks ~200 m with dyspnoea; denies chest pain or syncope.',
  tteData: {
    'LV EF': '60 %',
    AVA: '0.8 cm²',
    'Peak Gradient': '70 mmHg',
    'Mean Gradient': '45 mmHg',
    'Peak AV velocity': '4.2 m/s',
    MR: 'Trace',
    AR: 'None',
    Comments: 'Calcific tri-leaflet valve consistent with severe AS.',
  },
  angio: 'Mild non-obstructive coronary artery disease.',
  ecg: 'Sinus rhythm with LVH.',
  ctIncidentals: 'Tortuous calcified iliac arteries; 3 mm lung nodule.',
  bloods: { Hb: '142', Plts: '210', Cre: '105', eGFR: '58', Albumin: '39' },
  agedCare: 'MOCA 25/30 – low delirium risk.',
};

export default patient;
