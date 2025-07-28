// pages/patients/gaffney.tsx
'use client';

import { Typography } from 'antd';
import PatientLayout from '../../components/patient/PatientLayout';
import DemographicsGrid from '../../components/patient/DemographicsGrid';
import StatusCard from '../../components/patient/StatusCard';
import PatientSection from '../../components/patient/PatientSection';
import PdfIcons from '../../components/patient/PdfIcons';
import { getAge } from '../../data/patients';

const { Text } = Typography;

/* ------------------------------------------------------------------
   Patient data – MARIAN GAFFNEY
-------------------------------------------------------------------*/
const patient = {
    id: 'gaffney',
    name: 'MARIAN GAFFNEY',
    dob: '1943-07-18',
    mrn: 'ME00143507 (RNSH 042 90 35)',
    referralDate: '—',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Usaid Allahwala',
    contact: '02 9877 0498',
    weight: '73 kg',
    height: '155 cm',
    pdfs: {
        referral: [], // none supplied
        tte: [
            'GAFFNEY_MARIAN_ sev as tte _08072025_MG180743.pdf',
            'TTE GAFFNEY_MARIAN_18071943_11022025_MG180743 (1).pdf',
        ],
        angio: ['Gaffney Angio.pdf'],
        ecg: [],
        ct: ['MG 18.7.43.pdf'],
        gastro: ['gaffney gastro.pdf'],
        endocrine: ['gaffney endocrine.pdf', 'gaffney dr warrier.pdf'],
        respiratory: ['Gaffney Garrick Don rv.pdf'],
        otherDocs: ['gaffney endorine.pdf'], // any extras
        bloods: [], // no blood-PDF
    },

    /* history & medications -----------------------------------------*/
    background: [
        'Type 2 diabetes mellitus',
        'Chronic lymphocytic leukaemia (Dr Raymond McKinley)',
        'Multinodular goitre ± mild hyperthyroidism',
        'Acromegaly – pituitary resection Sep 2023 (Dr Little)',
        'Hypertension',
        'Colonic polyps',
        'Ventricular ectopy (Dr Allahwala)',
        'Hypercholesterolaemia',
        'GORD',
    ],
    medications: [
        'Azopt 1 % eye-drops BD',
        'Metoprolol 50 mg BD',
        'Rosuvastatin 5 mg ON',
        'Metformin XR 1 g ON',
        'Ferrograd-C twice weekly',
        'Magnesium 500 mg OD',
        'Clopidogrel 75 mg OD',
        'Pantoprazole 40 mg BD',
        'Poly-Gel eye-gel PRN',
    ],
    social:
        'Lives alone; retired secretary. Mobilises with stick. Non-smoker; very occasional alcohol.',
    functional:
        'NYHA III, worsening SOBOE over 6–12 months. Exercise tolerance ≈ 100 m.',

    /* investigations -----------------------------------------------*/
    tteData: {
        'LV EF': '65 %',
        AVA: '—',
        'Peak Gradient': '64 mmHg',
        'Mean Gradient': '38 mmHg',
        SVI: '38 ml/m²',
        'Peak AV velocity': '4.00 m/s',
        MR: 'Mild',
        AR: 'Trivial',
        Comments:
            'Tri-leaflet AV, markedly calcified & restricted; Doppler severe AS. Mitral annular & leaflet calcification with mild stenosis (mean 6 mmHg).',
    },
    angio: 'Patent LCx stent; mild disease elsewhere.',
    ecg: 'Sinus rhythm, first-degree PR, ventricular ectopics',
    ctIncidentals:
        '7 mm lung nodule – slow growth over years (Dr Garrick Don); follow-up in rooms. No CT-TAVI report yet.',
    bloods: {
        MOCA: '27/30',
        Frailty: '4',
        Hb: '135',
        Plts: '143',
        Cre: '49',
        eGFR: '88',
        Albumin: '40',
        WBC: '11.1',
    },

    consultTexts: {
        gastro:
            'Abdominal X-ray showed faecal compaction; treated with laxatives. No barrier to TAVI.',
        endocrine:
            'Acromegaly & thyroid disease under Dr Clifton-Bligh / Dr Warrier – no TAVI contraindication.',
        respiratory:
            'Slow-growing lung nodule reviewed by Dr Garrick Don; life-expectancy > 12 months.',
    },
};

/* ------------------------------------------------------------------*/
export default function GaffneyPage() {
    return (
        <PatientLayout title={patient.name}>
            {/* Demographics */}
            <PatientSection title="Demographics">
                <DemographicsGrid
                    data={{
                        DOB: patient.dob,
                        Age: getAge(patient.dob),
                        MRN: patient.mrn,
                        Structural: patient.structuralPhysician,
                        Referrer: patient.referrer,
                        Contact: patient.contact,
                        Weight: patient.weight,
                        Height: patient.height,
                    }}
                />
            </PatientSection>

            {/* Background & Medications */}
            <PatientSection title="Background & Medications">
                <StatusCard
                    history={patient.background}
                    medications={patient.medications}
                    social={patient.social}
                    functional={patient.functional}
                />
            </PatientSection>

            {/* TTE */}
            <PatientSection title="TTE" pdfs={patient.pdfs.tte}>
                <DemographicsGrid data={patient.tteData} />
            </PatientSection>

            {/* Angio */}
            <PatientSection title="Angio" pdfs={patient.pdfs.angio}>
                <Text>{patient.angio}</Text>
            </PatientSection>

            {/* ECG */}
            <PatientSection title="ECG" pdfs={patient.pdfs.ecg}>
                <Text>{patient.ecg}</Text>
            </PatientSection>

            {/* CT TAVI */}
            <PatientSection title="CT TAVI" pdfs={patient.pdfs.ct}>
                <Text>{patient.ctIncidentals}</Text>
            </PatientSection>

            {/* Bloods */}
            <PatientSection title="Bloods" pdfs={patient.pdfs.bloods}>
                <DemographicsGrid data={patient.bloods} />
            </PatientSection>

            {/* Gastro Review */}
            <PatientSection title="Gastro Review" pdfs={patient.pdfs.gastro}>
                <Text>{patient.consultTexts.gastro}</Text>
            </PatientSection>

            {/* Endocrine Review */}
            <PatientSection title="Endocrine Review" pdfs={patient.pdfs.endocrine}>
                <Text>{patient.consultTexts.endocrine}</Text>
            </PatientSection>

            {/* Respiratory / Lung Nodule */}
            <PatientSection title="Respiratory Input" pdfs={patient.pdfs.respiratory}>
                <Text>{patient.consultTexts.respiratory}</Text>
            </PatientSection>

            {/* Other attached docs */}
            <PatientSection title="Other Documents" pdfs={patient.pdfs.otherDocs} />
        </PatientLayout>
    );
}
