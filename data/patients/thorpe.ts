import type { Patient } from './types';

const patient: Patient = {
    id: 'thorpe',
    name: 'Robin Thorpe',
    dob: '1946-12-27',
    mrn: 'ME00468099',
    referralDate: '2025-07-25',
    referring: 'Dr Siddarth Trivedi',
    consulting: 'Dr Bhindi',
    contact: 'Patient: 0429 945 004; Wife (Carol): 0427 772 850',
    weight: '115 kg',
    height: '200 cm',
    status: 'private',
    badges: ['TAVI'],
    pdfs: {
        tte: ['THORPE_ROBIN_TTE.pdf', 'Robin thorpe tte.pdf', 'Robin thorpe stress echo.pdf'],
        angio: ['Thorpe Angio.pdf'],
        ecg: [],
        ct: ['Thorpe CT TAVI.pdf', 'THORPE Medtronic.pdf'],
        medtronic: ['THORPE Medtronic.pdf'],
        referral: ['Thorpe Dr Trivedi ref.pdf'],
        respiratory: ['Thorpe Resp rv.pdf'],
        surgical: ['Thorpe Surgical reveiw.pdf'],
    },
    background: [
        'Symptomatic aortic stenosis',
        'Ischaemic heart disease',
        'Type 2 diabetes mellitus',
        'Status post TURP',
        'Ectopic thyroid/parathyroid tissue in left tracheoesophageal groove (CT)',
    ],
    medications: [
        'Aspirin 100 mg daily',
        'Candesartan (half tablet daily)',
        'Rosuvastatin — recently restarted',
        'Metformin — previously stopped by patient',
        'Magnesium',
    ],
    allergies: ['Duodart'],
    social:
        'Independent; lives on a farm near Cobar with his wife; still working; advised not to drive heavy machinery.',
    functional:
        'SOBOE; struggles with slight inclines; reduced energy.',
    tteData: {
        'LV EF': '70–75 %',
        AVA: '1.16 cm²',
        AVAi: '0.46 cm²/m²',
        'Peak Gradient': '65 mmHg',
        'Mean Gradient': '37 mmHg',
        SVI: '43 mL/m²',
        'Peak AV velocity': '4.0 m/s',
        AR: 'Trivial',
        MR: 'Nil',
        Comments:
            'Small LV cavity with hyperdynamic systolic function; trileaflet AV with marked calcification; haemodynamics at the severe threshold.',
    },
    angio: 'Mild coronary artery disease (non‑obstructive).',
    ecg: 'Sinus rhythm.',
    ctIncidentals:
        'CT‑TAVI: Bicuspid AV with heavy calcification; possible R–L raphe on 3mensio. Incidental: left tracheoesophageal thyroid/parathyroid tissue; calcified mediastinal/hilar nodes (largest subcarinal 14 mm); mild basal subpleural reticulation; bilateral renal cysts; mild prostatomegaly.',
    cognitive: {
        MOCA: 'N/A',
    },
    bloods: {
        Hb: '153',
        Plts: '190',
        INR: '1.0',
        Cre: '75',
        eGFR: '84',
        Albumin: '—',
    },
    investigationSummary: {
        tte:
            '07/08/2025 (Dr Choong): EF 70–75%; Vmax 4.0 m/s; PG/MG 65/37 mmHg; AVA 1.16 cm²; AVAi 0.46 cm²/m²; SVi 43 mL/m²; trileaflet AV; trivial AR; small LV, hyperdynamic.',
        angio:
            '07/08/2025: Mild, non‑obstructive coronary disease.',
        ecg:
            'Sinus rhythm.',
        ct:
            'CT‑TAVI 06–07/08/2025: bicuspid AV with grade‑3 calcification; suitable iliofemoral access measurements; Medtronic/3mensio notes possible R–L leaflet fusion and provides annular perimeter ~102.5 mm (derived Ø ~32.6 mm).',
        incidentalFindings:
            'Left tracheoesophageal thyroid/parathyroid tissue; punctate‑calcified mediastinal/hilar nodes (largest 14 mm, subcarinal); mild basal subpleural reticulation; bilateral renal cysts; mild prostatomegaly.',
        respiratory:
            'Dr Hibbert to review CT TAVI re hilar and mediastinal lymphadenopathy and advise further PFTs as outpatient; repeat CT – timing to be decided after Dr Hibbert reviews.',
        cardiothoracic:
            'Dr Brereton: Suitable for & would desire salvage. Worsening AS outside of gradients, but level of stenosis is significant. I would recommend TAVI sooner rather than later based on remoteness, activity and occupation.',
    },
};

export default patient;
