import type { Patient } from './types';

const patient: Patient = {
  id: 'smithm',
  name: 'Marilyn Smith',
  dob: '1948-05-13',
  mrn: '0554971',
  referralDate: '2025-05-22', // per referral letter date
  referring: 'Dr Tony Kull',
  consulting: 'Dr Peter Hansen',
  contact: 'Patient: 0484 871 858',
  weight: '75 kg',
  height: '154 cm',
  status: 'public',
  badges: ['TAVI'],

  pdfs: {
    tte: [
      'Smith.M TTE RNSH 11.7.25.PDF', // 11/07/2025 RNSH: EF 55–60%; AVA 0.9 (AVAi 0.5); MG 33; PG 60; SVI 51.4; moderate AR; mild MR.
    ],
    angio: [
      'Smith.M angio 2023.pdf', // 29/03/2023 NSTEMI work-up: normal coronaries; left-dominant; radial access; no complications. :contentReference[oaicite:0]{index=0}
    ],
    ecg: [
      'Smith.M ECG.pdf', // 12‑lead strip uploaded (baseline). :contentReference[oaicite:1]{index=1}
    ],
    ct: [
      'Smith.M CT TAVI.pdf', // PRP CT‑TAVI 13/05/2025: detailed annulus/coronary heights + access vessels; aorto‑iliac plaque/tortuosity; formal impression provided. :contentReference[oaicite:2]{index=2}
    ],
    referral: [
      'Smith.M referral.pdf', // 22/05/2025 Kull→Hansen: severe AS; porcelain aorta; on haemodialysis; consider TAVI at RNSH. :contentReference[oaicite:3]{index=3}
    ],
    medtronic: [
      'Smith.M medtronic.pdf', // 3mensio/Evolut review 16/06/2025: L coronary slightly low (~9.8 mm); R SOV just undersized; annulus mean Ø 23.3; perimeter 72.5; STJ ~27; SOV ~29. :contentReference[oaicite:4]{index=4}
    ],
    ctsx: [
      'Smith.M Dr bassin.pdf', // 17/11/2023 Dr Levi Bassin (CTSx): porcelain aorta → open surgery prohibitive; manage medically unless more symptomatic; then consider high‑risk surgery or TAVI. :contentReference[oaicite:5]{index=5}
    ],
  },

  background: [
    'End‑stage renal failure on haemodialysis (Mon/Wed/Fri) via L arm fistula; still passes small urine',
    'Severe aortic stenosis (known to Dr Kull)',
    'Type 2 diabetes mellitus',
    'Hypercholesterolaemia',
    'Hypertension',
    'Obstructive sleep apnoea',
    'Previous type‑2 NSTEMI (2023) — normal coronaries on angiography',
    'Visual aura without headache',
    'Hysteroscopy + D&C',
    'Chronic cough and rhinitis — under Dr Lee (respiratory)',
  ],

  medications: [
    'Carvedilol 3.125 mg',
    'Sevelamer',
    'Pariet',
    'Aspirin',
    'Vytorin 10/20 mg',
    'Rocaltrol',
    'Sifrol',
    'Progout',
  ],

  social:
    'Lives alone with a cat; son near Byron Bay and granddaughter in Sydney (frequent visits). Independent in ADLs; 4WW for distances. HCP level 2 (2 h/week); community nurses for prior leg ulcer (healed 19/06/2025). Ex‑smoker (15 pack‑years, quit ~30 years). Occasional alcohol.',
  functional:
    'Exertional chest heaviness (sometimes during dialysis), intermittent fatigue/breathlessness; dizziness bending over.',

  // From MDT sheet (11/07/2025 – Dr Choong review, Dr Nasser report)
  tteData: {
    'LV EF': '55–60 %',
    AVA: '0.9 cm² (AVAi 0.5)',
    'Peak Gradient': '60 mmHg',
    'Mean Gradient': '33 mmHg',
    SVI: '51.4 ml/m²',
    'Peak AV velocity': '3.9 m/s',
    AR: 'Moderate',
    MR: 'Mild',
    Comments:
      'Trileaflet aortic valve; moderate cusp calcification with moderately restricted excursion. Moderate–severe aortic stenosis.',
  },

  angio:
    'Normal coronary arteries; left‑dominant circulation; radial access; no complications (29/03/2023). :contentReference[oaicite:6]{index=6}',
  ecg: 'Sinus rhythm with normal PR interval and QRS (per MDT).',
  ctIncidentals:
    'CT‑TAVI: annulus max 26 mm / min 21 mm; annulus area ~4.2 cm²; moderate valve calcification; trileaflet; RCA ostial height low (9.4–11.8 mm), LMCA 12.6–18 mm; aorto‑iliac plaque/tortuosity with femorals ~6–7 mm. Medtronic analysis notes L coronary slightly low (~9.8 mm) and R SOV just undersized. ',

  cognitive: {
    MOCA: '30/30 (with GP)',
  },

  bloods: {
    Hb: '115',
    Plts: '227',
    INR: '—',
    Cre: '717',
    eGFR: '4',
    Albumin: '37',
  },

  investigationSummary: {
    tte:
      '11/07/2025 (Choong review/Nasser report): EF 55–60%; severe AS physiology — MG 33, PG 60, AVA 0.9 (AVAi 0.5); SVI 51.4; AR moderate; MR mild; tri‑leaflet with moderate calcification; described overall as moderate–severe AS.',
    ct:
      '13/05/2025 PRP CT‑TAVI: Annulus 26×21 mm (area ~4.2 cm²); moderate annular/subannular calcification (non‑protruding); tri‑leaflet morphology; RCA ostial height low (9.4–11.8 mm), LMCA 12.6–18 mm; aorto‑iliac plaque with mild–moderate tortuosity; CFAs ~6–7 mm. Impression: borderline small sinuses and low RCA height; access feasible but small. :contentReference[oaicite:8]{index=8}',
    medtronic:
      '3mensio/Evolut (reviewed 16/06/2025): Annulus mean Ø 23.3 mm (perimeter 72.5; area‑derived Ø 22.7); LVOT mean Ø 23.5; STJ ~27 mm; SOV ~28–29 mm; LCA height ~9.8 mm (slightly low); “R SOV just undersized”; annular angulation ≈48°. :contentReference[oaicite:9]{index=9}',
    angio:
      '29/03/2023 Gosford cath (ACS/NSTEMI work‑up): normal coronaries in a left‑dominant system; radial access; no complications; concluded “Normal coronary arteries.” Operators: Dr Andrew Hill et al. :contentReference[oaicite:10]{index=10}',
    ecg:
      'Uploaded resting 12‑lead strip; clinical summary used: SR with normal PR & QRS (per MDT). :contentReference[oaicite:11]{index=11}',
    consults: [
      'Cardiothoracic Surgery — Dr Levi Bassin (17/11/2023): CT chest showed essentially porcelain aorta → open surgery prohibitive risk; symptoms well‑managed → recommend medical therapy; if symptoms worsen, consider very high‑risk surgery or TAVI. :contentReference[oaicite:12]{index=12}',
      'Referring Interventional Cardiology — Dr Tony Kull (22/05/2025): Severe AS; on haemodialysis; porcelain aorta → surgery too risky; symptoms mild but history of APO ×3; request consideration for TAVI at RNSH. :contentReference[oaicite:13]{index=13}',
    ],
  },
};

export default patient;
