import type { Patient } from './types';

const patient: Patient = {
  id: 'stevenson',
  name: 'Robin Stevenson',
  dob: '1963-10-17',
  mrn: '1126816',
  referralDate: '2025-04-16',
  referring: 'Dr Malini Govindan',
  consulting: 'Prof Ravinay Bhindi',
  contact: 'M: 0432 024 989 • E: robinstevenson@icloud.com',
  weight: '66 kg',
  height: '178 cm',
  status: 'public',
  badges: ['TAVI'],

  pdfs: {
    referral: ['Stevenson referral + TTE.pdf'],
    tte: ['Stevenson referral + TTE.pdf'],
    angio: ['Stevenson angio.pdf'],
    ct: ['Stevenson CT TAVI.pdf', 'Stevenson medtronic.pdf'],
    bloods: ['Stevenson bloods.pdf'],
    pft: ['Stevenson PFT.pdf'],
    ultrasound: ['Stevenson ultrasound abdo.pdf'],
    cardioConsult: ['Stevenson Dr Bassin consult.pdf'],
    gpSummary: ['Stevenson GP health summary.pdf'],
    medtronic: ['Stevenson medtronic.pdf'],
  },

  background: [
    'Bicuspid aortic valve with severe aortic stenosis',
    'Single‑vessel coronary artery disease — mid RCA ~80% stenosis',
    'Infra‑renal abdominal aortic aneurysm (~3.5 cm) with small partially thrombosed left external iliac aneurysm',
    'COPD pattern on spirometry',
    'Current smoker; heavy alcohol use disorder',
    'Hashimoto’s thyroiditis; depression',
    'Fibular fracture in 2024 (fall); peri‑orbital haematoma in 2025',
  ],

  medications: [
    'Aspirin 100 mg daily',
    'Rosuvastatin 10 mg nocte',
    'Naltrexone 50 mg daily',
    'Sertraline (Zoloft) 50 mg daily',
    'Thiamine 100 mg tds',
    'Vitamin B12 100 mcg daily',
    'Ostelin Vitamin D 1000 IU — two capsules daily',
    'Champix (varenicline) starter as charted',
  ],

  social:
    'Lives alone; supportive ex‑partner. Migrated from Scotland ~15 years ago. Independent with ADLs. Still training. Smokes; alcohol 15–20 standard drinks/day (↑ since ceasing work).',

  functional:
    'Reports slowing down with exertional chest tightness and some dyspnoea on exertion; no presyncope reported.',

  tteData: {
    'LV EF': '43 %',
    AVA: '0.9 cm²',
    'Peak Gradient': '92 mmHg',
    'Mean Gradient': '61 mmHg',
    SVI: '—',
    'Peak AV velocity': '4.8 m/s',
    AR: 'Moderate',
    MR: 'Mild',
    Comments: 'Bicuspid aortic valve with severe aortic stenosis.',
  },

  angio:
    'Coronary angiography: significant single‑vessel disease — mid RCA ~80% stenosis; LM/LAD/LCx minor disease.',

  ecg: 'Sinus rhythm.',

  ctIncidentals:
    'CT/3mensio suggests Sievers type I bicuspid aortic valve with R/L calcified raphe. Annulus mean Ø ~27.1 mm (derived 27.4 mm). Coronary heights ~18.4 mm (L) and 17.8 mm (R). Iliac/femoral access diameters ~6.7–11.5 mm.',

  bloods: {
    Hb: '—',        // not in the 10/2024 panel
    Plts: '—',      // not in the 10/2024 panel
    INR: '—',
    Cre: '60',
    eGFR: '>90',
    Albumin: '46',
  },

  // Cognitive tests not supplied — leaving `cognitive` undefined.

  investigationSummary: {
    tte:
      'Dr Govindan rooms: severe AS (AVA 0.9 cm²; PG 92; MG 61); LVEF depressed ~43%; AR moderate; MR mild.',
    angio:
      'RNSH 16/07/2025: mid RCA ~80% stenosis (tortuous). LM/LAD/LCx minor disease. Plan: Heart Team discussion for severe AS with CAD.',
    ctTavi:
      '3mensio (26/07/2025): ?Sievers I bicuspid with R/L calcified raphe; annulus perimeter 86.2 mm (derived Ø 27.4 mm), area 577 mm²; SOV ~35–37 mm; STJ ~34 mm; coronary heights L ~18.4 mm, R ~17.8 mm; peripheral access: min diameters ~6.7–11.5 mm.',
    pft:
      'FEV1 59%, FVC 71%, FEV1/FVC 83% — obstructive/COPD pattern.',
    bloods:
      '10/2024 panel: creatinine 60 µmol/L, eGFR >90; albumin 46 g/L; markedly elevated GGT 471 U/L, AST 249 U/L, ALT 159 U/L; cholesterol 7.5 mmol/L.',
    ultrasound:
      'Abdominal aorta: infra‑renal dilatation ~35 mm (3.5 cm). Small partially thrombosed left external iliac aneurysm.',
    consults:
      'Cardiothoracic (Dr Levi Bassin, 25/07/2025): recommends surgical AVR (bioprosthetic) + CABG (SVG→RCA) given age and bicuspid valve; patient hesitant about open surgery but open to discussion.',
  },
};

export default patient;
