import type { Patient } from './types';

const patient: Patient = {
    id: 'wadey',
    name: 'Anthony Wadey',
    dob: '1936-02-02',
    mrn: '0501859',
    referralDate: '2025-06-19',
    referring: 'Prof Peter Vale',
    consulting: 'Dr Peter Hansen',
    contact: 'Wife Sue: 0416 164 976 — 45 Congewoi Rd, Mosman NSW',
    weight: '68 kg',
    height: '172 cm',
    status: 'private',
    badges: ['TAVI'],
    pdfs: {
        referral: ['Wadey referral.pdf'],
        tte: ['Wadey TTE RNSH.pdf'],
        angio: ['Wadey Cath.pdf'],
        ecg: ['Wadey ECG.pdf'],
        ct: ['Wadey CT TAVI.pdf'],
        bloods: ['Wadey bloods.pdf'],
        geris: ['Wadey geris review.pdf'],
        respiratory: ['Wadey Resp review.pdf', 'Wadey Resp plan.pdf'],
    },
    background: [
        'Severe symptomatic aortic stenosis',
        'Coronary artery disease / ischaemic heart disease',
        'Early-onset Alzheimer’s dementia (Dr Ann Basci)',
        'Hypertension',
        'Hyperlipidaemia',
        'CVA — asymptomatic cortical infarcts (left cerebellar, right frontal)',
        'Carotid disease (bilateral 16–49% ICA stenosis on Doppler 01/2024)',
        'Mild asymptomatic peripheral arterial disease',
        'Possible PFO on TTE (2023)',
        'Previous DVT',
        'Renal cortical cysts (MRI 2010)',
        'Chronic lower back pain (no radiculopathy)',
        'Left TKR 2015; Right TKR 2016; Right THR 2017',
        'Mild anaemia',
        'Ex‑smoker (40 years)',
    ],
    medications: [
        'Aspirin (dose not specified)',
        'Perindopril 5 mg daily',
        'Furosemide 40 mg daily',
        'Metoprolol 12.5 mg daily',
        'Solifenacin (Vesicare)',
        'Paracetamol (Panadol) PRN',
        'Donepezil',
    ],
    allergies: ['Iodine'],
    social:
        'Lives with wife in Mosman; retired deck officer; walks short distances on the flat with frequent rests; ex‑smoker.',
    functional:
        'SOBOE — short distances on flat with regular breaks.',
    tteData: {
        'LV EF': '≈60 %',
        AVA: '0.8 cm²',
        'Peak Gradient': '60 mmHg',
        'Mean Gradient': '34 mmHg',
        SVI: '38.8 ml/m²',
        'Peak AV velocity': '3.9 m/s',
        AR: 'Mild',
        MR: 'Mild',
        Comments:
            'Trileaflet valve with severe calcific AS; normal biventricular systolic function; mildly dilated LA.',
    },
    angio:
        'Moderate–severe CAD: LM 40% diffuse; LAD 40–50% proximal/mid and 70% distal; D1 90% ostial; OM1 75% ostial; RPLB 80%.',
    ecg:
        'Sinus rhythm with premature supraventricular complexes; minimal voltage criteria for LVH.',
    ctIncidentals:
        'No CT contraindication to TAVI. RUL mass‑like consolidation with surrounding GGO and small effusion—repeat CT to resolution recommended; heavy ICA origin calcification (R 25–50%, L <25%); septated renal cortical cysts (R 60 mm, L 17 mm); SMA mixed plaque with potential 50–75% stenoses.',
    access:
        'Iliofemoral diameters (mm): RCIA 12, REIA 9, RCFA 5 (linear calcified focus); LCIA 12, LEIA 10, LCFA 9.',
    cognitive: {
        MOCA: '24/30 (mild impairment—delayed recall/orientation)',
    },
    bloods: {
        Hb: '126',
        Plts: '285',
        Cre: '115',
        eGFR: '48',
        Albumin: '34',
    },
    investigationSummary: {
        tte:
            'Severe AS (AVA 0.8 cm²; Vmax 3.9 m/s; peak/mean 60/34 mmHg). EF ~60%. Mild AR/MR. Mild MAC.',
        angio:
            'Severe AS with multi‑vessel CAD: LM 40%; LAD 40–50% prox/mid & 70% distal; D1 90% ostial; OM1 75% ostial; RPLB 80%.',
        ecg:
            'SR with PACs; minimal voltage LVH; PR 204 ms; QRS 90 ms.',
        ct:
            'Root heavily calcified; bilateral femoral/iliac calcification with MLDs as above; no CT contra to TAVI. Incidental RUL consolidation (likely CAP/inflammatory) — repeat CT in 6–8 weeks; carotid calcification; renal cysts; SMA plaque.',
    },
    consults: {
        agedCare:
            'Orthogeris (A. Sanossian): no absolute aged‑care contraindication once medically stable; OT review reassuring; acknowledge delirium risk.',
        respiratory:
            'Dr Garrick Don: RUL findings consistent with CAP; repeat CT chest in 6–8 weeks to ensure resolution; arrange RFT once pneumonia has resolved; if clear, no respiratory objections to TAVI.',
        memory:
            'Dr Ann Basci (phone): comfortable with conscious sedation.',
    },
};

export default patient;
