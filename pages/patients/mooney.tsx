// pages/patients/mooney.tsx
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
   Patient data – GRAHAME MOONEY
-------------------------------------------------------------------*/
const patient = {
    id: 'mooney',
    name: 'GRAHAME MOONEY',
    dob: '1942-12-31',
    mrn: 'ME00465771',
    referralDate: '—',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr James Rogers',
    contact: '0438 247 099',
    weight: '80 kg',
    height: '175 cm',

    pdfs: {
        tte: ['MOONEY_GRAHAME TTE _25.06.2025_GM311242.pdf'],
        angio: ['Mooney Angio.pdf'],
        ecg: ['Mooney ecg.pdf'],
        ct: ['GM 13.12.42.pdf'],                          // ← moved here
        agedCare: ['Mooney aged care.pdf'],
        correspond: [
            'Graham Rogers 03.07.25 re grahame mooney.pdf',
            'Grahame Mooney dr rogers.pdf',
        ],
        other: ['Mooney diagnostics.pdf'],                // ← GM file removed
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'Severe symptomatic aortic stenosis',
        'Cervical myelopathy (AW laminectomy booked, Dr Jonathan Parkinson)',
        'Anxiety related to numbness',
        'Prostatectomy',
    ],
    medications: [
        'Aspirin',
        'Amlodipine',
        'Rosuvastatin / Ezetimibe',
        'Pregabalin',
    ],
    social:
        'Lives with wife; retired building designer; still drives. No formal carers (gardener only).',
    functional:
        'SOBOE; ET ≈ 500 m on flat but struggles on inclines. Low energy, exertional fatigue, hip pain and unsteady gait (cervical myelopathy).',

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '65 %',
        AVA: '0.82 cm²',
        'Peak Gradient': '45 mmHg',
        'Mean Gradient': '25 mmHg',
        SVI: '32 ml/m²',
        'Peak AV velocity': '3.34 m/s',
        MR: 'Trivial',
        AR: 'Mild',
        Comments:
            'Tri-leaflet valve, markedly calcified with restricted opening. Paradoxical severe AS (low-flow/low-gradient, normal EF). DVI 0.23.',
    },
    ctIncidentals: 'See CT TAVI PDF for full measurements / access assessment.',
    angio: 'Unobstructed coronaries (see PDF).',
    ecg: 'Atrial-paced rhythm',
    bloods: { MOCA: '19/30', Hb: '165', Plts: '196', Cre: '82', eGFR: '76', Albumin: '45', INR: '1.0' },
    frailty: '3',
    agedCareNote:
        'Aged-Care ID AC25519885 — awaiting services; no barrier to TAVI from geriatric viewpoint.',
    consults: {
        Neurosurgery: 'AW laminectomy planned 28 Jul 2025 (Dr Jonathan Parkinson)',
        Anaesthesia: 'Dr Andrew Limburg (SNNS)',
    },
};

/* ------------------------------------------------------------------*/
export default function MooneyPage() {
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

            {/* Background & Meds */}
            <PatientSection title="Background & Medications">
                <StatusCard
                    history={patient.background}
                    medications={patient.medications}
                    social={patient.social}
                    functional={patient.functional}
                />
            </PatientSection>

            {/* TTE */}
            <PatientSection title="TTE (25 Jun 2025)" pdfs={patient.pdfs.tte}>
                <DemographicsGrid data={patient.tteData} />
            </PatientSection>

            {/* CT TAVI */}
            <PatientSection title="CT TAVI" pdfs={patient.pdfs.ct}>
                <Text>{patient.ctIncidentals}</Text>
            </PatientSection>

            {/* Angio & ECG */}
            <PatientSection title="Angiogram" pdfs={patient.pdfs.angio}>
                <Text>{patient.angio}</Text>
            </PatientSection>
            <PatientSection title="ECG" pdfs={patient.pdfs.ecg}>
                <Text>{patient.ecg}</Text>
            </PatientSection>

            {/* Bloods */}
            <PatientSection title="Bloods">
                <DemographicsGrid data={patient.bloods} />
                <Text style={{ display: 'block', marginTop: 8 }}>
                    <strong>Frailty Score:</strong>&nbsp;{patient.frailty}
                </Text>
            </PatientSection>

            {/* Aged-Care Review */}
            <PatientSection title="Aged-Care Review" pdfs={patient.pdfs.agedCare}>
                <Text>{patient.agedCareNote}</Text>
            </PatientSection>

            {/* Consults */}
            <PatientSection title="Consults" pdfs={patient.pdfs.correspond}>
                {Object.entries(patient.consults).map(([k, v]) => (
                    <Text key={k} style={{ display: 'block' }}>
                        <strong>{k}:</strong>&nbsp;{v}
                    </Text>
                ))}
            </PatientSection>

            {/* Other Docs */}
            <PatientSection title="Other Documents" pdfs={patient.pdfs.other}>
                <Text>See additional diagnostic scans / notes.</Text>
            </PatientSection>
        </PatientLayout>
    );
}
