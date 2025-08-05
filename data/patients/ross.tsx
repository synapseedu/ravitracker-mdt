import type { Patient } from './types';
import React from 'react';

const patient: Patient = {
  id: 'ross',
  name: 'Wendy Ross',
  dob: '1942-06-11',
  referring: 'Dr Wang',
  consulting: 'Dr Hansen',
  status: 'public',
  badges: ['TAVI'],
  mrn: '0068643',
  referralDate: '18/06/2025',
  contact: '0435 023 246',
  weight: '58 kg',
  height: '147 cm',
  pdfs: {
    referral: ['Ross referral.pdf'],
    tte: ['Ross TTE.pdf'],
    angio: ['Ross angio.pdf'],
    ecg: ['Ross ECG.pdf'],
    ct: ['Ross CT TAVI.pdf', 'Ross medtronic.pdf'],
    pelvicUS: ['Ross pelvic ultrasound.pdf'],
    bloods: ['Ross Bloods.pdf'],
  },
  background: [
    'Myocardial infarction >20 years ago (no stents)',
    'Aortic root dilatation',
    'Hypertension',
    'Hypercholesterolaemia',
    'Osteoarthritis',
    'Bilateral total knee replacements',
    'Osteopenia',
  ],
  medications: [
    'Catapress 100 mcg nocte',
    'Lipitor 40 mg OD',
    'Telmisartan 80 mg OD',
    'Dothiepin 75 mg OD',
  ],
  social:
    'Lives at home in a unit. Supportive children nearby. Non-smoker; drinks 2–3 champagnes on Fridays at the club. Uses public transport; retired seamstress.',
  functional:
    'Independent ADLs and mobility; walks three blocks (limited by pain). Occasional dizziness and nocturnal chest discomfort (uses GTN once / month, denies syncope). Minimal SOBOE. Main complaint: hypertension. Denies oedema, PND, orthopnoea.',
  tteData: {
    'LV EF': '55 %',
    AVA: '0.9 cm²',
    'Peak Gradient': '74 mmHg',
    'Mean Gradient': '51 mmHg',
    'Peak AV Velocity': '4.29 m/s',
    MR: 'None',
    AR: 'Mild',
    Comments: 'Severe aortic stenosis with mild regurgitation.',
  },
  angio:
    'Mild–moderate CAD: 40 % proximal LAD, 90 % OM4 (small calibre, collateralised), 40–50 % proximal RCA.',
  ecg: 'Sinus rhythm.',
  ctIncidentals:
    'Dilated ascending thoracic aorta and proximal arch. Sub-pleural nodule (LLL) – CT follow-up in 12 months.',
  pelvicReport: (
    <>
      Thickening of the endometrial complex noted on CT.<br />
      While the endometrial canal is distended with fluid there is no obvious thickening of the
      endometrium itself and no obvious focal endometrial lesion. A complex cystic area in the anterior
      myometrium is noted. There is also no obvious ovarian or adnexal abnormality.
    </>
  ),
  bloods: {
    MOCA: '27/30',
    Hb: '136',
    Plts: '234',
    Cre: '72',
    eGFR: '67',
    Albumin: '43',
  },
  consultTexts: { 'Aged Care': 'N/A', Cardiothoracic: 'N/A' },
};

export default patient;
