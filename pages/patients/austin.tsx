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
   Patient data – GAETANE AUSTIN
-------------------------------------------------------------------*/
const patient = {
    id: 'austin',
    name: 'GAETANE AUSTIN',
    dob: '1941-11-18',                             // 18 Nov 1941
    mrn: 'ME00457693',
    referralDate: '',                              // not on MDT form
    structuralPhysician: 'Dr Peter Hansen',
    referrer: 'Dr Peter Vale',
    contact: '—',
    weight: '90 kg',
    height: '161 cm',
    pdfs: {
        tte: ['TTE AUSTIN_GAETANE_18111941_13.02.2025_GA181141.pdf'],
        angio: ['Austin Angio.pdf'],
        ecg: ['Austin ECG 02.25.pdf'],
        ct: ['GA 18.11.41.pdf'],
        agedCare: ['Austin Aged Care.pdf'],
        moca: ['Austin MOCA.pdf'],
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'Severe aortic stenosis',
        'Stent to LAD (25 Feb 2025)',
        'Hypertension',
        'Dyslipidaemia',
        'Chronic atrial fibrillation (failed cardioversion 2012)',
        '↑ BMI',
        'Severe shoulder osteoarthritis; right foot arthritis (surg 2014)',
        'Cervical laminectomy 2012',
        'Haemochromatosis carrier (mild ↑ iron stores)',
        'Left reverse total-shoulder replacement 2019',
    ],
    medications: [
        'Dabigatran 110 mg bd',
        'Irbesartan 300/25 mg mane',
        'Irbesartan 150 mg nocte',
        'Metoprolol 50 mg bd',
    ],
    social:
        'Lives in Fiji, helps with family business; daughters deeply involved in care; has home carers.',
    functional:
        'NYHA III — SOB on mild exertion; walks ≈ 500 m but limited by breath/hip pain.',

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '65 %',
        AVA: '0.6 cm²',
        'Peak Gradient': '97 mmHg',
        'Mean Gradient': '63 mmHg',
        SVI: '32.7 ml/m²',
        'Peak AV velocity': '4.93 m/s',
        AR: 'Mild',
        Comments: 'Tri-leaflet valve; heavily calcified; severe AS (paradoxical LF-LG).',
    },
    angio:
        'Severe proximal LAD stenosis; severe AS. CT (MM) advised SAVR±CABG not ideal; LAD stent 02/2025.',
    ecg: 'Atrial fibrillation, LBBB, 68 bpm.',
    ctIncidentals: 'No significant incidental findings.',
    bloods: {
        MOCA: '12/30',
        Frailty: '4/10',
        Hb: '129',
        Plts: '253',
        INR: '1.2',
        Cre: '76',
        eGFR: '63',
    },
    agedCare:
        'MOCA 12/30 indicates moderate-to-high delirium risk; family aware.',
};

/* ------------------------------------------------------------------*/
export default function AustinPage() {
    return (
        <PatientLayout title={patient.name}>
            {/* Demographics */}
            <PatientSection title="Demographics">
                <DemographicsGrid
                    data={{
                        DOB: patient.dob,
                        Age: getAge(patient.dob),
                        MRN: patient.mrn,
                        'Referral Date': patient.referralDate || '—',
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
            <PatientSection title="TTE (13 Feb 2025)" pdfs={patient.pdfs.tte}>
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
                <Text>
                    <strong>Incidentals:</strong>&nbsp;{patient.ctIncidentals}
                </Text>
            </PatientSection>

            {/* Bloods / Frailty / MOCA */}
            <PatientSection title="Bloods / MOCA" pdfs={patient.pdfs.moca}>
                <DemographicsGrid data={patient.bloods} />
            </PatientSection>

            {/* Aged-Care input */}
            <PatientSection title="Aged Care Assessment" pdfs={patient.pdfs.agedCare}>
                <Text>{patient.agedCare}</Text>
            </PatientSection>
        </PatientLayout>
    );
}
