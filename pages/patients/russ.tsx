// pages/patients/russ.tsx
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
   Patient data – GARY RUSS
-------------------------------------------------------------------*/
const patient = {
    id: 'russ',
    name: 'GARY RUSS',
    dob: '1946-07-10',
    mrn: 'ME00465605',
    referralDate: '',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Helestrand',
    contact: '04 0419 5268',
    weight: '73.2 kg',
    height: '168 cm',

    pdfs: {
        tte: ['RUSS_GARY_ TTE 26.06.2025_GR100746.pdf'],
        angio: ['Russ angio.pdf'],
        ecg: ['Russ ECG.pdf'],
        ct: [
            'Gary Russ CT NSR Report.pdf',
            'GR 10.7.46 Highly calcified valve with some annular and LVOT calcification. High R femoral bifurcation..pdf',
        ],
        geriatrics: ['Russ Aged care.pdf'],
        oncology: ['Gary Oncology 10.2024.pdf'],
        neurology: ['Russ G Neuro 26Jun25.pdf'],
        cardiothoracic: ['Russ Surgical rv.pdf'],
        bloods: [],
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'Severe aortic stenosis',
        'Metastatic melanoma (immunotherapy through Aug 2025)',
        'Parkinson disease (dx 2016, Prof Aggarwal)',
        'CVA Aug 2023 (mild right hemiparesis)',
        'Prostate cancer',
        'Hypercholesterolaemia',
        'GORD',
    ],
    allergies: 'Nil known',
    medications: [
        'Aspirin 100 mg od',
        'Metoprolol 25 mg bd',
        'Rosuvastatin 20 mg od',
        'Maxolon PRN',
        'Melatonin PRN',
        'Stalevo',
        'Sinemet',
        'Zoladex',
    ],
    social:
        'Lives with daughter (primary carer) in Hornsby. House has 32 stairs; 4-WW and stick. Ex-smoker (quit 2003). No driving.',
    functional:
        'NYHA II, SOBOE. Requires help with most heavy ADLs; manages washing; house modified for disability.',

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '65 %',
        AVA: '0.9 cm²',
        'Peak Gradient': '76 mmHg',
        'Mean Gradient': '47 mmHg',
        SVI: '51 ml',
        'Peak AV velocity': '4.3 m/s',
        MR: 'Trivial',
        AR: 'Mild',
        Comments:
            'Tri-leaflet, heavily calcified valve. Markedly restricted opening — Doppler severe AS. Mild AR.',
    },
    angio: 'Unobstructed coronaries (see PDF for full report).',
    ecg: 'Normal sinus rhythm',
    ctIncidentals:
        'Highly calcified valve with annular & LVOT calcification. High right femoral bifurcation. No other significant findings.',
    bloods: {
        MOCA: '24/30',
        Hb: '141',
        Plts: '212',
        Cre: '86',
        eGFR: '74',
        Albumin: '43',
    },
    frailtyScore: '4',

    /* consult summaries ----------------------------------------------*/
    consultTexts: {
        geriatrics:
            'No barrier to TAVI from geriatric perspective; neurologist clearance advised.',
        oncology:
            'Immunotherapy can be paused / rescheduled. Proceed after course completion in July.',
        neurology:
            'Parkinson disease well controlled; happy to proceed with TAVI under conscious sedation (MMSE 28/30 in Jul 2024).',
        cts:
            'Dr Brereton: suitable for surgical salvage if required.',
    },
};

/* ------------------------------------------------------------------*/
export default function RussPage() {
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
                    allergies={patient.allergies}
                />
            </PatientSection>

            {/* TTE */}
            <PatientSection title="TTE (26 Jun 2025)" pdfs={patient.pdfs.tte}>
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

            {/* CT TAVI / Access */}
            <PatientSection title="CT TAVI" pdfs={patient.pdfs.ct}>
                <Text>{patient.ctIncidentals}</Text>
            </PatientSection>

            {/* Bloods */}
            <PatientSection title="Bloods" pdfs={patient.pdfs.bloods}>
                <DemographicsGrid data={patient.bloods} />
                <Text style={{ display: 'block', marginTop: 8 }}>
                    <strong>Frailty Score:</strong> {patient.frailtyScore}
                </Text>
            </PatientSection>

            {/* Geriatrician */}
            <PatientSection title="Geriatrician Review" pdfs={patient.pdfs.geriatrics}>
                <Text>{patient.consultTexts.geriatrics}</Text>
            </PatientSection>

            {/* Oncology */}
            <PatientSection title="Oncology Review" pdfs={patient.pdfs.oncology}>
                <Text>{patient.consultTexts.oncology}</Text>
            </PatientSection>

            {/* Neurology */}
            <PatientSection title="Neurology Review" pdfs={patient.pdfs.neurology}>
                <Text>{patient.consultTexts.neurology}</Text>
            </PatientSection>

            {/* Cardiothoracic Surgery Consult */}
            <PatientSection
                title="Cardiothoracic Surgery Consult"
                pdfs={patient.pdfs.cardiothoracic}
            >
                <Text>{patient.consultTexts.cts}</Text>
            </PatientSection>
        </PatientLayout>
    );
}
