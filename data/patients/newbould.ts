import type { Patient } from './types';

const patient: Patient = {
  id: 'newbould',
  name: 'John Newbould',
  dob: '1943-07-23',
  mrn: '0843683',
  referralDate: '2025-07-16',
  referring: 'Dr Tony Kull',
  consulting: 'Dr Peter Hansen',
  contact: 'Patient (via Kristina): 0407 227 844; Email: hoppy00coach@hotmail.com',
  weight: '77 kg',
  height: '165 cm',
  status: 'public',
  badges: ['TAVI'],
  pdfs: {
    tte: ['Newbould TTE 16.7.25.pdf', 'Newbould TTE 12.24.pdf'],
    angio: ['Newbould angio.pdf'],
    ecg: ['Newbould ECG.pdf'],
    ct: ['Newbould CT TAVI.pdf', 'Newbould medtronic.pdf'],
    bloods: ['Newbould bloods.pdf'],
    referral: ['Newbould referral .pdf'],
  },

  background: [
    'Severe calcific aortic stenosis (2025)',
    'Rheumatoid arthritis',
    'Laminectomy with spinal fusion (2024)',
    'Hypertension',
    'Hyperlipidaemia',
    'Hyponatraemia',
    'Benign prostatic hyperplasia; erectile dysfunction',
  ],

  medications: [
    'Leflunomide (Arava)',
    'Atorvastatin 20 mg daily',
    'Duodart',
    'Lercanidipine 10 mg daily',
    'Moxonidine (Physiotens) 0.2/0.4 mg bd',
    'Salt tablets tds',
    'Sildenafil as required',
  ],

  social:
    'Lives with wife. Supportive neighbours; family in Sydney. Independent with ADLs and mobility. Non-smoker; ~3 standard drinks nightly. Retired salesman. Overseas cruise — due back 11/09/2025.',
  functional:
    'Progressively worsening SOBOE with heavy tasks over the last month; can climb 18 stairs but needs to pause at the top. Occasional oedema. Denies chest pain, syncope, PND or orthopnoea.',

  tteData: {
    'LV EF': '55 %',
    AVA: '0.8 cm²',
    'Peak Gradient': '104 mmHg',
    'Mean Gradient': '67 mmHg',
    SVI: '—',
    'Peak AV velocity': '—',
    AR: 'Trivial',
    MR: 'Nil',
    Comments: 'Severe aortic stenosis.',
  },

  angio:
    '31/07/2025: Minor coronary artery disease; right radial access; medical management recommended; proceed with TAVI workup (Dr Peter Hansen).',
  ecg: 'Sinus rhythm; possible first-degree AV block noted clinically.',

  ctIncidentals:
    'CT‑TAVI (22/07/2025): Mild–moderate aorto‑iliac tortuosity; dense calcific plaque at both CFAs (<50% encroachment); min vessel diameters approx: L/R EIA 10 mm, L CFA 7 mm, R CFA 6 mm. Accessory renal arteries; 30 mm left mid‑polar renal cyst; advanced lumbar spondylosis; prior right THR; mild left hip OA. Aorto‑iliac measurements suitable as given.',

  cognitive: {
    MOCA: '30/30 (with GP)',
  },

  bloods: {
    Hb: '136',
    Plts: '156',
    INR: '—',
    Cre: '80',
    eGFR: '80',
    Albumin: '43',
    CRP: '1.7',
  },

  investigationsSummary: {
    tte: [
      {
        date: '2025-07-16',
        summary:
          'Severe AS: MG 67 mmHg, PG 104 mmHg, AVA 0.8 cm² (AVDI 0.12); EF ~55% (Simpson); trivial AR; no MR.',
        source: ['Newbould TTE 16.7.25.pdf'],
      },
      {
        date: '2024-12-16',
        summary:
          'Severe calcific AS (PkVel 4.2 m/s, MnGd 34 mmHg, AVA 0.84 cm²); severely dilated LA; mildly dilated RA; PASP ~44 mmHg.',
        source: ['Newbould TTE 12.24.pdf'],
      },
    ],
    ct: [
      {
        date: '2025-07-22',
        summary:
          'Aorto‑iliac: mild–moderate tortuosity; bilateral CFA dense calcific plaque (<50% encroachment). Min diameters: asc aorta 32 mm; arch 25 mm; desc aorta 25 mm; mid‑abdo aorta 17 mm; L/R EIA 10 mm; L CFA 7 mm; R CFA 6 mm. Accessory renal arteries; 30 mm left renal polar cyst; thorax without suspicious nodule.',
        source: ['Newbould CT TAVI.pdf'],
      },
      {
        date: '2025-07-23',
        summary:
          '3mensio (Medtronic) sizing: annulus mean 29.6 mm (area 639 mm²; derived Ø ~28.5–29.2 mm); SOV ~35.6 mm; STJ ~26–27 mm; coronary heights: L 17.9 mm, R 23.0 mm; annular angulation ≈54°.',
        source: ['Newbould medtronic.pdf'],
      },
    ],
    angio: [
      {
        date: '2025-07-31',
        summary:
          'Diagnostic coronary angiography: minor CAD in all vessels; recommendation — medical therapy and continue TAVI work‑up.',
        source: ['Newbould angio.pdf'],
      },
    ],
    ecg: [
      {
        date: '2025-07',
        summary: 'Sinus rhythm on resting 12‑lead; borderline prolonged PR cannot be excluded.',
        source: ['Newbould ECG.pdf'],
      },
    ],
    bloods: [
      {
        date: '2025-05-20',
        summary:
          'Hb 136 g/L; Plt 156 x10^9/L; Creat 80 μmol/L; eGFR 80 mL/min/1.73 m²; Albumin 43 g/L; CRP 1.7 mg/L; mild enzyme elevations (GGT 66, LDH 267, AST 53).',
        source: ['Newbould bloods.pdf'],
      },
    ],
  },

  consults: [
    {
      date: '2025-07-16',
      clinician: 'Dr Tony Kull (Interventional Cardiologist)',
      outcome:
        'Severe AS, minimally symptomatic; recommended to start arranging TAVI; booked angiogram and PRP CT. Echo MG 67 mmHg, AVA 0.8 cm²; EF 50–55%.',
      source: ['Newbould referral .pdf'],
    },
    {
      date: '2025-07-31',
      clinician: 'Dr Peter Hansen (Structural/Interventional Cardiologist)',
      outcome: 'Angiogram showed minor CAD; continue medical therapy and proceed with TAVI work‑up.',
      source: ['Newbould angio.pdf'],
    },
  ],
};

export default patient;
