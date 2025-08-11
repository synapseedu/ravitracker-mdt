import type { Patient } from './types';

const patient: Patient = {
  id: 'newbould',
  name: 'John Newbould',
  dob: '1943-07-23',
  mrn: '0843683',
  referralDate: '2025-07-16',
  referring: 'Dr Tony Kull',
  consulting: 'Dr Peter Hansen',
  contact: 'Patient: 0407 227 844 (Kristina); Email: hoppy00coach@hotmail.com',
  weight: '77 kg', // from TTE 16/7/25 :contentReference[oaicite:0]{index=0}
  height: '165 cm', // from TTE 16/7/25 :contentReference[oaicite:1]{index=1}
  status: 'public',
  badges: ['TAVI'],

  pdfs: {
    tte: [
      'Newbould TTE 16.7.25.pdf', // 16/07/2025: Severe AS — MG 67 mmHg, PG 104 mmHg, AVA 0.8 cm² (AVAi 0.41), trivial AR; EF 55% (Simpson’s), ~50% visual; mod LA dilatation; mild LVH. :contentReference[oaicite:2]{index=2}
      'Newbould TTE 12.24.pdf',    // 16/12/2024: Severe calcific AS — Vmax 4.2 m/s, MnGd 34 mmHg, AVA 0.84 cm²; EF 60–65%; severely dilated LA. :contentReference[oaicite:3]{index=3}
    ],
    angio: [
      'Newbould angio.pdf', // 31/07/2025 RNSH cath: minor CAD in all vessels; right‑dominant; right radial access; recommendation: medical therapy and proceed with TAVI work‑up. :contentReference[oaicite:4]{index=4}
    ],
    ecg: [
      'Newbould ECG.pdf', // Sinus rhythm; appearances consistent with possible 1° AV block on strip. :contentReference[oaicite:5]{index=5}
    ],
    ct: [
      'Newbould CT TAVI.pdf', // 22/07/2025 PRP TAVI CT: access mins—L CFA 7 mm, R CFA 6 mm; EIA 10 mm bilat; mild–mod tortuosity; aorto‑iliac plaque <50% encroachment; chest: atelectasis only; abdo: 30 mm R renal parapelvic cyst; diverticular disease; spine DJD/previous surgery; R THR. :contentReference[oaicite:6]{index=6}
    ],
    referral: [
      'Newbould referral .pdf', // 16/07/2025 Kull→Hansen: “very severe” AS; arrange TAVI; booked angio & ordered TAVI CT; meds listed. :contentReference[oaicite:7]{index=7}
    ],
    medtronic: [
      'Newbould medtronic.pdf', // 3mensio/Evolut analysis (reviewed 23/07/2025): annulus mean Ø 29.6 mm (area‑derived Ø 28.5; perimeter 91.7 mm); LVOT mean Ø 29.0; SOV ~35–36 mm; STJ 26–27 mm; annular angulation ≈54°. :contentReference[oaicite:8]{index=8}
    ],
    bloods: [
      'Newbould bloods.pdf', // 20/05/2025: Hb 136 g/L, Plts 156 x10^9/L, Cr 80 µmol/L (eGFR 80), Albumin 43 g/L; CK 655 H; AST 53 H; GGT 66 H. :contentReference[oaicite:9]{index=9}
    ],
  },

  background: [
    'Severe aortic stenosis (2025)',
    'Rheumatoid arthritis',
    'Laminectomy with spinal fusion (2024)',
    'Hypertension',
    'Hyperlipidaemia',
    'Hyponatraemia',
    'BPH; erectile dysfunction',
  ],
  medications: [
    'Leflunomide (Arava)',
    'Atorvastatin 20 mg daily',
    'Duodart',
    'Lercanidipine 10 mg daily',
    'Moxonidine (Physiotens) 0.2/0.4 mg bd',
    'Salt tablets tds',
    'Sildenafil',
  ], // per referral letter. :contentReference[oaicite:10]{index=10}

  social:
    'Lives with wife; supportive neighbours and family in Sydney. Independent with ADLs; still driving. Non‑smoker; ~3 standard drinks nightly. Retired salesman. Currently overseas; returns 11/09/2025.',
  functional:
    'Progressively worsening SOBOE with heavy tasks over last month. Manages 18 stairs at home but needs to pause at the top. Occasional oedema. Denies chest pain, syncope, PND, orthopnoea.',
  cognitive: {
    MOCA: '30/30 (with GP)',
  },

  tteData: {
    'LV EF': '55 %',
    AVA: '0.8 cm² (AVAi 0.41)',
    'Peak Gradient': '104 mmHg',
    'Mean Gradient': '67 mmHg',
    SVI: '—',
    'Peak AV velocity': '—',
    AR: 'Trivial',
    MR: 'Nil',
    Comments: 'Severe aortic stenosis; mild LVH; moderately dilated LA.', // 16/07/2025 echo. :contentReference[oaicite:11]{index=11}
  },

  angio: 'Minor coronary artery disease; right‑dominant; right radial access.', // 31/07/2025 cath. :contentReference[oaicite:12]{index=12}
  ecg: 'Sinus rhythm (normal QRS), ?first‑degree AV block on strip.', // :contentReference[oaicite:13]{index=13}
  ctIncidentals:
    'Aorto‑iliac plaque <50% encroachment with mild–moderate tortuosity; L CFA 7 mm / R CFA 6 mm; chest atelectasis only; 30 mm right renal parapelvic cyst; diverticular disease; spinal degenerative change; prior right THR.', // :contentReference[oaicite:14]{index=14}

  bloods: {
    Hb: '136',
    Plts: '156',
    INR: '—',
    Cre: '80',
    eGFR: '80',
    Albumin: '43',
  }, // :contentReference[oaicite:15]{index=15}

  investigationSummary: {
    tte:
      '16/07/2025 (Kull): Severe AS — MG 67, PG 104, AVA 0.8 (AVAi 0.41); trivial AR; EF 55% (Simpson’s), ~50% visually; mod LA enlargement; mild LVH. 12/2024 PRP echo: severe calcific AS (Vmax 4.2 m/s, MnGd 34, AVA 0.84); EF 60–65%; severe LA enlargement. ',
    ct:
      '22/07/2025 PRP CT‑TAVI: Access vessels adequate but small (L CFA 7 mm; R CFA 6 mm). Mild–moderate iliac/descending aortic tortuosity; aorto‑iliac plaque <50% encroachment. No suspicious pulmonary nodules; atelectatic bases. Incidental 30 mm right renal parapelvic cyst; diverticular disease; multilevel spondylosis; prior R THR. :contentReference[oaicite:17]{index=17}',
    angio:
      '31/07/2025 RNSH cath (Performing: Dr Peter Hansen): Minor CAD in LM/LAD/LCx/RCA; right‑dominant; right radial access; recommendation—medical therapy; proceed with TAVI work‑up. :contentReference[oaicite:18]{index=18}',
    ecg:
      '12‑lead strip shows sinus rhythm; morphology suggests possible 1° AV block. :contentReference[oaicite:19]{index=19}',
    medtronic:
      '3mensio/Evolut (reviewed 23/07/2025): Annulus mean Ø 29.6 mm (area‑derived Ø 28.5; perimeter 91.7); LVOT mean Ø 29.0; SOV ~35–36; STJ 26–27; annular angulation ≈54°. :contentReference[oaicite:20]{index=20}',
    consults: [
      'Referring cardiology — Dr Tony Kull (16/07/2025): “Very severe” AS; requested TAVI at RNSH; arranged angiogram + TAVI CT; provided current meds. Recommendation: proceed with TAVI work‑up. :contentReference[oaicite:21]{index=21}',
    ],
  },
};

export default patient;
