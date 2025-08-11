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
    tte: [
      'Bogle Gosford TTE 23.5.25.pdf', // Severe AS; AVA 0.81 cm² (AVAi); max PG 140 mmHg; mean PG 72 mmHg; mild–moderate AR/MR; mildly dilated ascending aorta (4.0 cm); trivial pericardial effusion.
    ],
    angio: [
      'Bogle angio.pdf', // 23/07/2025 RNSH cath: mild non‑obstructive CAD; mild LAD/LCx/RCA disease; right‑dominant system; radial access.
    ],
    ecg: [
      'Bogle ECG.pdf', // 12/06/2025: sinus rhythm; normal QRS (unconfirmed automated report visible on trace).
    ],
    ct: [
      'Bogle CT TAVI.pdf', // 08/07/2025 PRP: mild aorto‑iliac tortuosity; aorto‑iliac atherosclerosis without high‑grade stenosis; 3‑vessel arch; vessel calibres adequate (e.g., R EIA 8×9 mm; L EIA 7×8 mm); 14‑mm opacity abutting mediastinum; consider PET; ?Sievers I bicuspid R/L calcified raphe.
      'Norman bogle CT Tavi aortic root.pdf', // Additional CT aortic root measurements/images.
      'Norman bogle CT Tavi aortic root_1.pdf', // Additional CT aortic root measurements/images.
    ],
    oncology: [
      'Bogle oncology letters april 25.pdf', // Collated cancer history; no recurrence/metastases on 02/04/2025 CT noted.
      'Bogle oncology letters.pdf', // Medical oncology follow‑up: stable disease; notes literacy limitation (numbers/dates only) and social support from brother.
    ],
    referral: [
      'Bogle referral.pdf', // Coastal Cardiology letter (12/06/2025): severe AS (MG 72, AVA 0.8); bicuspid AV; CTCA Ca score 1272 with mild‑moderate CAD; TAVR referral to RNSH; started nebivolol 1.25 mg mane.
    ],
    medtronic: [
      'Bogle medtronic.pdf', // 3mensio/Evolut analysis: annulus mean Ø 24.1 mm (perimeter 75.8 mm; area‑derived Ø 23.7 mm); LVOT mean Ø 23.6 mm; STJ Ø 28.3 mm; SOV Ø ~35.7 mm; annular angulation ≈42°; ?Sievers I bicuspid.
    ],
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
    AVA: '0.81 cm² (AVAi)',
    'Peak Gradient': '140 mmHg',
    'Mean Gradient': '72 mmHg',
    SVI: '—',
    'Peak AV velocity': '—',
    AR: 'Mild–moderate',
    MR: 'Mild–moderate',
    Comments:
      'Severe calcific AS with mild–moderate AR. Mildly dilated ascending aorta. Trivial pericardial effusion.',
  },

  angio: 'Mild non‑obstructive coronary artery disease — mild LAD/LCx/RCA disease; right‑dominant.',
  ecg: 'Sinus rhythm with normal QRS complex.',
  ctIncidentals:
    '?Sievers Type I bicuspid with R/L Ca raphe. Aorto‑iliac atherosclerosis without high‑grade stenosis; mild tortuosity; 14‑mm mediastinal opacity near L inferior pulmonary vein (consider PET).',

  cognitive: {
    MOCA: 'Unable to read or write',
  },

  bloods: {
    Hb: '141',
    Plts: '135',
    INR: '—',
    Cre: '109',
    eGFR: '58',
    Albumin: '38',
  },

  investigationSummary: {
    tte:
      '21/05/2025 (Gosford): Severe AS (AVA 0.81 cm²; max PG 140; mean 72) with mild–moderate AR/MR; EF >55%; mild–moderate LVH; mildly dilated ascending aorta (4.0 cm); trivial effusion.',
    ct:
      '08/07/2025 PRP CT‑TAVI: Access vessels adequate (e.g., R EIA 8×9 mm; L EIA 7×8 mm), mild tortuosity; aorto‑iliac atherosclerosis without high‑grade stenosis; 3‑vessel arch; incidental 14‑mm mediastinal opacity for PET consideration; suggests ?Sievers I bicuspid (R/L raphe).',
    angio:
      '23/07/2025 RNSH cath: Mild non‑obstructive CAD (LAD/LCx/RCA mild disease); right dominant; radial access; proceed with AVR workup.',
    ecg:
      '12/06/2025: Sinus rhythm, normal QRS; automated unconfirmed read on strip.',
    medtronic:
      '3mensio/Evolut (reviewed 14/07/2025): Annulus mean Ø 24.1 mm (perimeter 75.8 mm); LVOT mean Ø 23.6 mm; STJ Ø 28.3 mm; SOV ≈35.7 mm; annular angulation ≈42°; ?Sievers I bicuspid; sizing grid provided.',
    consults: [
      'Radiation Oncology — Dr Roland Yeghiaian‑Alvandi (26/02/2025): 4.5 years post‑chemoradiation for locally advanced NSCLC; most recent CT (Dec) stable; discharged from radiation oncology clinic; follow‑up as needed.',
      'Medical Oncology — Dr Matthew Chan (09/04/2025 letter referenced; printed 30/06/2025): No evidence of recurrence or metastatic disease on 02/04/2025 CT; ongoing surveillance with Prof Michael Back; return if new symptoms; notes literacy limitation and family support.',
      'Referring Cardiology — Dr Karthik Rangasamy (12/06/2025): Severe symptomatic AS (MG 72; AVA 0.8); bicuspid AV; CTCA Ca score 1272 with mild–moderate CAD; recommended TAVR over surgery; referred to RNSH (Dr Bhindi); started nebivolol 1.25 mg mane.',
    ],
  },
};

export default patient;
