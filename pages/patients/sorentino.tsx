// pages/patients/sorentino.tsx
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
   Patient data – CARLOS SORENTINO
-------------------------------------------------------------------*/
const patient = {
    id: 'sorentino',
    name: 'CARLOS SORENTINO',
    dob: '1945-09-26',
    mrn: 'ME00309577 (RNSH 0669062)',
    referralDate: '12/06/2025',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Kozor',
    contact: '0400 737 045',
    weight: '115 kg',
    height: '182 cm',
    pdfs: {
        referral: ['Sorentino Health summary.pdf', 'SOrentino Cardio IP review.pdf'],
        tte: ['SORENTINO_CARLOS TTE 10062025_CS260945 (1).pdf'],
        angio: ['Sorrentino Angio.pdf'],
        ecg: ['Sorentino ECG.pdf'],
        ct: ['CS 26.9.45.pdf'],
        cardiothoracic: [
            'SorentinoCarlos OP report.pdf',
            'Mr Carlos Sorentino Dr Brereton Letter 21 July 2025.pdf', // ← added
        ],
        bloods: [],
    },

    /* clinical data (unchanged) -------------------------------------*/
    background: [
        'CABG ×4 (2000, SAN)',
        'CAD / ischaemic heart disease',
        'Insulin-dependent type 2 diabetes',
        'Left carotid endarterectomy 2019',
        'Hypertension',
        'OSA → CPAP',
        'Chronic back pain (L5/S1 laminectomy; radiculopathy)',
    ],
    medications: [
        'Aspirin 100 mg od',
        'Clopidogrel 75 mg od',
        'Rosuvastatin 10 mg od',
        'Metformin 1 g nocte',
        'Duodart 0.5/0.4 mg',
        'Amitriptyline 10 mg od',
        'Amlodipine 10 mg od',
        'Protaphane 40 u bd',
        'Atenolol 50 mg od',
        'Tramadol SR 150 mg bd',
        'Ramipril 10 mg od',
        'Diazepam 5 mg prn',
    ],
    social:
        'Lives with wife (Lucy) and son. Ex-smoker (45 PY), quit age 60. Social alcohol use; no recreational drugs. Independent with ADLs; still drives.',
    functional:
        'Walks ≈ 500 m but limited by back / hip pain. Worsening SOBOE, chest discomfort, overall slowing.',
    tteData: {
        'LV EF': '65–70 %',
        AVA: '0.91 cm²',
        'Peak Gradient': '49 mmHg',
        'Mean Gradient': '27 mmHg',
        SVI: '33 ml/m²',
        'Peak AV velocity': '3.50 m/s',
        MR: 'Mild',
        AR: 'Trivial',
        Comments:
            'Tri-leaflet AV; markedly calcified & restricted. Paradoxical severe AS (low-flow/low-gradient, normal EF).',
    },
    angio:
        'Severe native-vessel disease. Patent SVG→OM2 & SVG→RPDA; occluded LAD & LCx, atretic LIMA. Med-manage; consider CTO-PCI if symptomatic.',
    ecg: 'Sinus rhythm, first-degree AVB, RBBB',
    ctIncidentals: 'No dedicated CT-TAVI report yet.',
    bloods: {
        MOCA: 'N/A',
        Frailty: '3',
        Hb: '136',
        Plts: '216',
        Cre: '81',
        eGFR: '79',
        Albumin: '45',
    },

    /* updated Cardiothoracic consult --------------------------------*/
    consults: {
        'Cardiothoracic Surgeon': `His appearance at almost 80 years of age suggests that he would be much better served by percutaneous than open means.

I fully agree with your proposed management of TAVI first up, followed by intervention on the left anterior descending, or if it came to it, an off-pump right-mammary–radial composite to the distal LAD as a last resort.

Rescue intervention in the context of a complication of the TAVI would be complex and difficult, but the Sorrentino family would rather pursue this than a nihilistic approach.

Thanks for the opportunity to review him; he came to see me a few days before seeing Dr Manu Mathur, but I am sure that Manu would think likewise.

– John Brereton`,
    },
};

/* ------------------------------------------------------------------*/
export default function SorentinoPage() {
    return (
        <PatientLayout title={patient.name}>
            {/* Demographics */}
            <PatientSection title="Demographics">
                <DemographicsGrid
                    data={{
                        DOB: patient.dob,
                        Age: getAge(patient.dob),
                        MRN: patient.mrn,
                        'Referral Date': patient.referralDate,
                        Structural: patient.structuralPhysician,
                        Referrer: (
                            <>
                                {patient.referrer}&nbsp;
                                <PdfIcons files={patient.pdfs.referral} />
                            </>
                        ),
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
            <PatientSection title="Bloods">
                <DemographicsGrid data={patient.bloods} />
            </PatientSection>

            {/* Cardiothoracic Surgery Consult */}
            <PatientSection
                title="Cardiothoracic Surgery Consult"
                pdfs={patient.pdfs.cardiothoracic}
            >
                <Text>{patient.consults['Cardiothoracic Surgeon']}</Text>
            </PatientSection>
        </PatientLayout>
    );
}
