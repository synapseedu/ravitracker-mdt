// pages/patients/vandevelde.tsx
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
   Patient data – JANICE VAN DE VELDE
-------------------------------------------------------------------*/
const patient = {
    id: 'vandevelde',
    name: 'JANICE VAN DE VELDE',
    dob: '1936-06-01',
    mrn: 'ME00225818',
    referralDate: '',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Choong',
    contact: '0418 440 644',
    altContact: 'Daughter Jacqui — 0413 301 088',
    weight: '59 kg',
    height: '157 cm',

    pdfs: {
        tte: ['J VAN DE VELDE TTE.pdf'],
        toe: [
            'J VAN DE VELDE toe.pdf',
            'Royal North Shore Hospital TOE review for MitraClip Janice Van De Velde.pdf',
        ],
        angio: ['Vaqn de Velde angio 26.2.25.pdf'],
        rhc: [],                                   // values in MDT but no dedicated PDF
        agedCare: ['VanDeVelde Aged Care review.docx'],
        correspond: [
            'Van de Velde Bhindi Rooms.pdf',
            'Van De Velde Garrick Don.pdf',
            'VAN DE VELDE Janice Dr Warrier.pdf',
            'VandeVelde Dr Choong 10.07.25.pdf',
        ],
        summary: ['Van De VeldeTricuspid patient summary.docx'],
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'Atrial fibrillation → Apixaban 2.5 mg bd',
        'TAVI Oct 2020 (Bhindi)',
        'Osteoarthritis',
        'Breast cancer – on follow-up (Prof Lim / Dr Mo)',
        'Chronic kidney disease',
        'Hypertension',
        'Pulmonary fibrosis',
    ],
    medications: [
        'Apixaban 2.5 mg bd',
        'Metoprolol (Minax) 25 mg bd',
        'Entresto 49/51 mg bd',
        'Furosemide 20 mg od',
        'Digoxin 62.5 µg od',
    ],
    social:
        'Lives with good functional level; mobilises with 4-WW. Supported by daughter Jacqui. No cognitive concerns.',
    functional:
        'ET 25–50 m; denies SOB, palpitations, chest pain or oedema.',

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '60 %',
        TAPSE: '1.5 cm',
        ePASP: '49 mmHg',
        Comments:
            'TAVI prosthesis well-seated; trivial posterior PVL. Severe secondary TR (coaptation gap 5 mm). Mild MR. RV: low-normal radial & reduced longitudinal function.',
    },
    toeSummary:
        'Severe secondary TR (central S-P & S-A jets), coaptation gap 5 mm. TriClip planned — see TOE PDFs.',
    rhc: (
        <>
            <b>RHC&nbsp;Feb 2025 (Dr Choong):</b>&nbsp;
            PASP 55 / 19 (32)&nbsp;&nbsp;PCWP 11&nbsp;&nbsp;CO 4.3&nbsp;&nbsp;PVR 4.9&nbsp;&nbsp;TPG 21
        </>
    ),
    angio:
        '26 Feb 2025: moderate diffuse CAD; see PDF for vessel detail.',
    bloods: {
        Date: '28 Feb 2025',
        Hb: '127',
        Plts: '181',
        Cre: '128',
        eGFR: '32',
    },
    moca: '26/30',
    agedCareNote:
        'Dr Warrier (17 Jun 2025): medically suitable for TriClip; counselled re risk of post-op delirium with GA.',
};

/* ------------------------------------------------------------------*/
export default function VanDeVeldePage() {
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
                        'Alt Contact': patient.altContact,
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
            <PatientSection title="TTE (21 Feb 2025)" pdfs={patient.pdfs.tte}>
                <DemographicsGrid data={patient.tteData} />
            </PatientSection>

            {/* TOE */}
            <PatientSection title="TOE / Tricuspid Anatomy" pdfs={patient.pdfs.toe}>
                <Text>{patient.toeSummary}</Text>
            </PatientSection>

            {/* Right-Heart Catheter */}
            <PatientSection title="Right-Heart Catheter" pdfs={patient.pdfs.rhc}>
                <Text>{patient.rhc}</Text>
            </PatientSection>

            {/* Angio */}
            <PatientSection title="Angiogram" pdfs={patient.pdfs.angio}>
                <Text>{patient.angio}</Text>
            </PatientSection>

            {/* Bloods */}
            <PatientSection title="Bloods" pdfs={patient.pdfs.summary}>
                <DemographicsGrid data={patient.bloods} />
                <Text style={{ display: 'block', marginTop: 8 }}>
                    <strong>MOCA:</strong>&nbsp;{patient.moca}
                </Text>
            </PatientSection>

            {/* Aged-Care Review */}
            <PatientSection title="Aged-Care Review" pdfs={patient.pdfs.agedCare}>
                <Text>{patient.agedCareNote}</Text>
            </PatientSection>

            {/* Correspondence */}
            <PatientSection title="Correspondence" pdfs={patient.pdfs.correspond}>
                <Text>See attached letters for clinic reviews and follow-up.</Text>
            </PatientSection>
        </PatientLayout>
    );
}
