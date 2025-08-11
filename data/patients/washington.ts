import type { Patient } from './types';

const patient: Patient = {
    id: 'washington',
    name: 'Bridget Washington',
    dob: '1934-11-08',
    mrn: '2277255',
    referralDate: '2025-07-17',
    referring: 'Dr Malcolm Anastasius / Prof Peter Vale',
    consulting: 'Dr Peter Hansen',
    contact: '—',
    weight: '47 kg',  // from TTE 15/07/2025 
    height: '160 cm', // from TTE 15/07/2025 
    status: 'private',
    badges: ['MitraClip', 'TriClip'],

    pdfs: {
        tte: [
            'Washington TTE.pdf', // 15/07/2025: EF ~65%; severe MR (anterior leaflet flail) with mean MV gradient 4 mmHg; severe TR (RVSP ~61 mmHg); moderate AS (AVA 1.1 cm²; PG/MG 31/16); mild–moderate AR; severely dilated atria. 
        ],
        toe: [
            'Washington TOE 22.7.25.pdf', // 22/07/2025 (Anastasius): Severe MR (EROA 0.55 cm²; RVol 61 mL) — A3 flail + P2 prolapse; moderate posterior MAC; MVA 4.4 cm²; suggested TEER strategy (1× NTW medial, 1× NT A2/P2). Severe secondary TR (EROA 0.36 cm²), type IIIb; max anteroseptal gap 4 mm; GLIDE 2. 
        ],
        rhc: [
            'Washington RHC.pdf', // 24/07/2025 cath: RA mean ~10 (v 15), PA 55/16 (m 30), PCWP 24; CO ~3.1 L/min; PVR ~1.9 WU; mild, non‑obstructive CAD. 
        ],
        consults: [
            'Washington aged care.pdf', // Orthogeriatrics (Dr Carl Ward, 23/07/2025): RUDAS 26/30; independent in pADLs; no aged‑care contraindication to TriClip. 
            'Washington cardio consult 22.7.25.pdf', // Cardiology WR (Mowbray/Di Sano, 23/07/2025): severe MR/TR; recommend TriClip; arrange outpatient angiogram; aim discharge post geris review. 
            'Washington Dr Vale letters + TTE.pdf', // Prof Peter Vale letter (25/03/2024) + prior TTE: AF on apixaban (reduced dose), CCF, HTN, moderate MR/TR at that time; meds list and longitudinal context. 
        ],
    },

    background: [
        'Severe mitral regurgitation and severe tricuspid regurgitation (2025)',
        'Congestive cardiac failure with preserved LV systolic function',
        'Atrial fibrillation on apixaban',
        'Hypertension',
        'Hypercholesterolaemia',
    ],

    medications: [
        'Apixaban 2.5 mg bd',
        'Bisoprolol 2.5 mg nocte',
        'Frusemide 40 mg daily (IV inpatient → oral on discharge)',
        'Spironolactone 12.5 mg daily (temporarily held with hyperkalaemia during admission)',
        'Simvastatin',
        'Colecalciferol',
        'Magnesium supplement',
        'Paracetamol prn',
        'Dapagliflozin — ceased due to BP',
    ],

    social:
        'Previously lived alone in a retirement village; supportive family and private cleaners. Since discharge staying with daughter/family. Non‑smoker.',
    functional:
        'July admission with APO, CAP and pleural effusion on background of HFpEF + severe MR/TR; chest drain 15/7 → removed 17/7; discharged 24/7. Re‑presented 3/8 with respiratory distress, improved with IV diuresis; no repeat pleural intervention as per respiratory team.',

    // TTE (15/07/2025)
    tteData: {
        'LV EF': '≈65 %',
        AVA: '1.1 cm²',
        'Peak Gradient': '31 mmHg',
        'Mean Gradient': '16 mmHg',
        SVI: '42.5 ml/m²',
        'Peak AV velocity': '2.8 m/s',
        AR: 'Mild–moderate',
        MR: 'Severe (posterior jet; anterior leaflet flail)',
        Comments:
            'Normal LV size and systolic function; severely dilated LA/RA; severe MR and severe TR; moderate AS; no pericardial effusion. ',
    },

    // TOE (22/07/2025) — key TEER metrics
    toeData: {
        'MR EROA': '0.55 cm²',
        'MR regurgitant volume': '61 mL',
        'Mechanism': 'A3 anterior leaflet flail + P2 prolapse; posterior MAC (moderate)',
        'Mean MV gradient': '1 mmHg',
        '3D MVA': '4.4 cm²',
        'TR EROA': '0.36 cm²',
        'Tricuspid type': 'IIIb; max anteroseptal gap 4 mm',
        'GLIDE score': '2',
        Notes:
            'Challenging medial origin of MR with calcium shelf under P3; consider 1× NTW medially + 1× NT A2/P2. ',
    },

    angio: 'Mild, non‑obstructive coronary artery disease on coronary angiography. ',
    ecg: 'Atrial fibrillation (baseline rhythm during admission).',

    cognitive: {
        MOCA: '26/30', // RUDAS 26/30 documented by OT; functionally independent in pADLs. 
    },

    bloods: {
        Hb: '119',
        Plts: '—',
        INR: '—',
        Cre: '92',
        eGFR: '47',
        Albumin: '—',
    },

    investigationSummary: {
        tte:
            '15/07/2025: EF ~65%; severe MR (anterior leaflet flail), severe TR (RVSP ~61 mmHg); moderate AS (AVA 1.1 cm²; PG/MG 31/16); mild–moderate AR; severely dilated atria. ',
        toe:
            '22/07/2025 (Dr Malcolm Anastasius): Severe MR — EROA 0.55 cm², RVol 61 mL — A3 flail + P2 prolapse; MVA 4.4 cm²; recommend TEER strategy (1× NTW medial ± 1× NT A2/P2). Severe secondary TR — EROA 0.36 cm²; type IIIb; gap 4 mm; GLIDE 2. ',
        rhcLhc:
            '24/07/2025 cath: RA mean ~10 (v 15); PA 55/16 (m 30); PCWP 24; CO ~3.1 L/min; PVR ~1.9 WU. Coronaries: mild non‑obstructive disease. ',
        consults: [
            'Orthogeriatrics — Dr Carl Ward (23/07/2025): RUDAS 26/30; mobile and self‑caring; **no aged‑care contraindication to TriClip**. ',
            'Cardiology Ward Round — Mowbray / Di Sano (23/07/2025): severe biventricular failure with severe MR/TR; **recommend TriClip**; plan discharge post geriatrics review; outpatient angiogram. ',
            'Referring Cardiology — Prof Peter Vale (25/03/2024): AF on reduced‑dose apixaban (weight <60 kg, age >80), HF, HTN; earlier echo with moderate MR/TR; continued conservative management at that time. ',
            'Feasibility Meeting (05/08/2025 — Hansen, Choong, Bromhead, Auton): TOE reviewed; small LV cavity; pathology at P2 and A3 flail. Options discussed: (1) single medial P1–P2 clip, or (2) two clips (2× Pascal or 2× NTW). *Per MDT notes.*',
        ],
    },
};

export default patient;
