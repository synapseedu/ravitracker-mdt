import type { Patient } from './types';

const patient: Patient = {
    id: 'wadey',
    name: 'Anthony Wadey',
    dob: '1936-02-02',
    mrn: '0501859',
    referralDate: '2025-06-19',
    referring: 'Prof Peter Vale',
    consulting: 'Dr Peter Hansen',
    contact: 'Wife (Sue): 0416 164 976',
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
        medtronic: ['Wadey Medtronic.pdf'],
        bloods: ['Wadey bloods.pdf'],
        agedCare: ['Wadey geris review.pdf'],
        respiratory: ['Wadey Resp review.pdf', 'Wadey Resp plan.pdf'],
    },
    background: [
        'Severe symptomatic aortic stenosis',
        'Coronary artery disease / IHD',
        "Early-onset Alzheimer’s dementia (Dr Ann Basci)",
        'Hypertension; Hyperlipidaemia',
        'Remote CVA (asymptomatic cortical infarcts)',
        'Carotid disease (bilateral 16–49% ICA on Doppler, 01/2024)',
        'Mild, asymptomatic PAD',
        'Possible PFO on TTE (2023)',
        'Previous DVT',
        'Renal cortical cysts (historical MRI 2010; see CT TAVI incidentals)',
        'Chronic low back pain (no radiculopathy)',
        'Left TKR 2015; Right TKR 2016; Right THR 2017',
        'Mild anaemia',
        'Ex‑smoker (~40 years)',
    ],
    medications: [
        'Aspirin 100 mg daily',
        'Perindopril 5 mg mane',
        'Furosemide 40 mg mane',
        'Metoprolol 12.5 mg mane',
        'Solifenacin (Vesicare)',
        'Paracetamol prn',
        'Donepezil',
    ],
    social:
        'Lives with wife in Mosman; retired deck officer; ex‑smoker; walks short distances on the flat and takes frequent breaks.',
    functional:
        'SOBOE; short distances on the flat with regular rests.',
    tteData: {
        'LV EF': '≈60 %',
        AVA: '0.8 cm²',
        'Peak Gradient': '≈60 mmHg',
        'Mean Gradient': '≈34 mmHg',
        SVI: '38.8 ml/m²',
        'Peak AV velocity': '3.9 m/s',
        AR: 'Mild',
        MR: 'Mild',
        Comments:
            'Trileaflet aortic valve with severe aortic stenosis; calcified leaflets with severely reduced excursion.',
    },
    angio:
        'LM 40% diffuse; LAD 40–50% prox/mid and 70% distal with D1 90% ostial; LCx OM1 75% ostial; RCA RPLB 80% (right dominant).',
    ecg:
        'Sinus rhythm with premature supraventricular complexes; minimal voltage criteria for LVH.',
    ctIncidentals:
        'No CT contraindication to TAVI. RUL mass‑like consolidation with surrounding GG change—likely infective/inflammatory; follow to resolution recommended. Adjacent pleural thickening/small effusion; mixed SMA plaque (possible 50–75% narrowing). Heavy carotid origin calcification (R 25–50%, L <25%). Bilateral partially calcified renal cortical cysts (R up to 60 mm, L up to 17 mm).',
    cognitive: {
        MOCA: '24/30 — mild cognitive impairment (delayed recall deficit); OT notes he may need assistance with remembering new information.',
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
            'RNSH TTE (31/07/25): EF ~60%, Vmax 3.9 m/s, peak/mean 60/34 mmHg, AVA 0.8 cm², SVI 38.8 ml/m²; mild AR/MR; severe calcific AS (trileaflet).',
        cath:
            'Cath (01/08/25): multivessel disease — mod–sev distal RPLB, OM1, D1; moderate LMCA/LAD/distal LAD; proceed with full TAVI work‑up.',
        ecg:
            'ECG (18/06/25): sinus rhythm with premature supraventricular complexes; minimal LVH by voltage.',
        ctTavi:
            'CT TAVI (04/08/25): no contraindication; ilio‑femorals suitable with eccentric calcification (R CFA MLD ~5 mm linear calcification noted). Incidentals as above; radiologist recommends repeat chest imaging to resolution.',
        medtronicSizing:
            'Medtronic 3mensio review (07/08/25, Dr Hansen listed): annulus mean Ø ~22.5 mm (perimeter 70.7 mm; area‑derived Ø 22.2 mm); LVOT mean Ø ~21.6 mm; SOV ~31–33 mm; coronary heights L 18.6 mm / R 20.8 mm; annular angulation ≈46°. Femoral minima ~8–10 mm bilaterally. Views: 3‑cusp LAO 2°/Caudal 6°; cusp‑overlap RAO 22°/Caudal 29°.',
        respiratory:
            'Respiratory consult: RUL changes most consistent with CAP; repeat CT chest in 6–8 weeks to exclude underlying lesion; plan RFTs when pneumonia resolves; assuming clearance, no anticipated respiratory objection to TAVI.',
        agedCare:
            'Orthogeriatrics (A. Sanossian): no absolute contraindication from aged‑care perspective; proceed when medically stable; acknowledges delirium risk; patient understands and consents.',
    },
    consults: {
        agedCare: {
            clinician: 'Avedis Sanossian (Orthogeris)',
            recommendation:
                'No absolute aged‑care contraindication; proceed once medically stable; delirium risk discussed.',
        },
        respiratory: {
            clinician: 'Dr Garrick Don',
            recommendation:
                'Treat CAP; repeat CT chest in 6–8 weeks, arrange RFTs; if resolved/negative, no respiratory objections to TAVI.',
        },
    },
};

export default patient;
