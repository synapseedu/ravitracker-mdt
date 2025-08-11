import type { Patient } from './types';

const patient: Patient = {
  id: 'bogle',
  name: 'Norman Bogle',
  dob: '1953-02-01',
  mrn: '0540233',
  referralDate: '2025-06-12',
  referring: 'Dr Rangasamy',
  consulting: 'Dr Bhindi',
  contact: 'Patient: 0458 648 246; Brother (Mark): 0419 242 490',
  weight: '—',
  height: '—',
  status: 'public',
  badges: ['TAVI'],
  pdfs: {
    tte: ['Bogle Gosford TTE 23.5.25.pdf'],
    angio: ['Bogle angio.pdf'],
    ecg: ['Bogle ECG.pdf'],
    ct: [
      'Bogle CT TAVI.pdf',
      'Norman bogle CT Tavi aortic root.pdf',
      'Norman bogle CT Tavi aortic root_1.pdf',
    ],
    oncology: ['Bogle oncology letters april 25.pdf', 'Bogle oncology letters.pdf'],
    referral: ['Bogle referral.pdf'],
    medtronic: ['Bogle medtronic.pdf'],
  },
  background: [
    'Severe symptomatic aortic stenosis',
    'Hypertension',
    'Hyperlipidaemia',
    'Left carotid artery occlusion (follow-up with Dr Bourke)',
    'Left retinal artery thrombosis',
    'Left oropharyngeal lesion — 25/01/2024 biopsy: squamous papilloma with mild atypia (reactive atypia favoured)',
    'Multiple prior benign ENT biopsies (RPA)',
    'Mouth squamous cell carcinoma (1989) — resection, radical neck dissection, chemoradiation; no recurrence as of March 2013',
    'Hepatic flexure adenocarcinoma — right hemicolectomy (2006) with chemotherapy',
    'Stage IV NSCLC with prior cerebellar metastasis (resected) — chemoradiation; CT 02/04/2025: no recurrence or metastases',
    'Peptic ulcer disease surgery with splenectomy (1990)',
    'Bowen’s disease of lip and multiple skin cancers',
    'May 2025 admission (Gosford) with demand ischaemia and myopericarditis during viral illness',
  ],
  medications: [
    'Aspirin 100 mg daily',
    'Colchicine 0.5 mg daily',
    'Ezetimibe/atorvastatin 10/40 mg daily',
    'Rabeprazole 20 mg daily',
    'Telmisartan 40 mg daily',
  ],
  social:
    'Lives alone in a unit (15 stairs). Supportive brother nearby. Independent with pADLs. Does not drive; uses public transport. Ex-smoker (quit ~30 years; 1 pack/day). Alcohol ~4–5 standard beers Mondays and Fridays.',
  functional:
    'Progressive fatigue over 6 months; minimal dyspnoea on exertion (can climb stairs). Occasional PND; mild orthopnoea (1–2 pillows). No oedema, syncope, or chest pain.',
  tteData: {
    'LV EF': '55 %',
    AVA: '0.81 cm²',
    'Peak Gradient': '140 mmHg',
    'Mean Gradient': '72 mmHg',
    SVI: '—',
    'Peak AV velocity': '—',
    AR: 'Mild–moderate',
    MR: 'Mild–moderate',
    Comments: 'Severe calcific AS with mild–moderate AR.',
  },
  angio: 'Mild non-obstructive coronary artery disease.',
  ecg: 'Sinus rhythm with normal QRS complex.',
  ctIncidentals:
    'CT TAVI suggests possible Sievers type I bicuspid (R/L) with calcified raphe.',
  cognitive: {
    MOCA: 'Unable to read or write',
    Frailty: '—',
  },
  bloods: {
    Hb: '141',
    Plts: '135',
    INR: '—',
    Cre: '109',
    eGFR: '58',
    Albumin: '38',
  },
  agedCare:
    'Lives independently; family support available. No formal aged-care assessment attached.',
  plan: 'MDT approved for Transfemoral TAVI. No concerning features for TF access or deployment. Reasonable baseline cognition/social supports; no life-limiting pathology identified.',
};

export default patient;
