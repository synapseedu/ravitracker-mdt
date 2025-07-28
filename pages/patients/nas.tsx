// pages/patients/nas.tsx
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
   Patient data – ARNOLD NAS
-------------------------------------------------------------------*/
const patient = {
    id: 'nas',
    name: 'ARNOLD NAS',
    dob: '1947-07-30',
    mrn: 'ME00463006',
    referralDate: '',                      // none on MDT
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Clyne Fernandes',
    contact: '0412 036 125',
    weight: '88 kg',
    height: '188 cm',

    /* PDFs grouped by section */
    pdfs: {
        ct: [
            'NAS Arnold - CT 88.1598294.pdf',
        ],
        angio: ['Arnold NAS Angio.pdf'],
        toe: [
            'Nas TOE workup.pdf',
            'Royal North Shore Hospital TOE review for TriClip suitability Arnold Nas.pdf',
        ],
        rhc: ['Nas RHC Workup.pdf'],
        ecg: ['Nas ECG.pdf'],
        bloods: [],
        summary: ['Nas Tricuspid patient summary.docx'],
        referral: ['Nas Arnold 03.10.2024 Dr Fernandes symptom history.pdf'],
        consult: ['Nas Dr Mathur rv.pdf'],
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'Severe atrial functional tricuspid regurgitation',
        'Atrial fibrillation',
        'Sleep apnoea (CPAP)',
        'HFpEF',
        'BPH',
    ],
    familyHistory: [
        'Both parents CVA in 70 s',
        'Brother: hypertension & prostate cancer',
    ],
    medications: [
        'Dabigatran 110 mg bd',
        'Entresto 24/26 mg nocte',
    ],
    social:
        'Retired aircraft engineer. Lives with wife (dementia; Arnold is primary carer). Four children — daughter nearby. Independent for ADLs; no stairs.',
    functional:
        'Increased SOB, ET ≈ 100 m, slow on inclines, fluctuating fatigue; no orthopnoea/PND.',

    /* investigations --------------------------------------------------*/
    bloods: {
        Date: '28 Mar 2025',
        Hb: '154',
        Plts: '249',
        Creatinine: '90',
        eGFR: '72',
    },
    rhc: (
        <>
            <b>PASP:</b> 44/20 (29)&nbsp;&nbsp;&nbsp;
            <b>PCWP:</b> 19/20 (19)
        </>
    ),
    angio: (
        <>
            LAD 40 % stenosis.<br />
            Only minor irregularities elsewhere.
        </>
    ),
    ctSummary:
        '4D cardiac CT: right-atrial enlargement, reflux into hepatic veins (possible RH dysfunction), possible early hepatic fibrosis.',
    toeSummary: (
        <>
            Trileaflet TV (Type I) — moderate–severe secondary TR.<br />
            RV markedly dilated, moderate hypokinesis; LA/RA dilated.<br />
            Mild secondary MR; aortic sclerosis.<br />
            GLIDE 2 — TEER difficult if septal-anterior clip needed.<br />
            Anatomy suitable for TriClip.
        </>
    ),

    /* consults --------------------------------------------------------*/
    consultText:
        'Dr Manu Mathur: surgical risk low. Patient prefers TriClip but is open to heart-team decision.',
};

/* ------------------------------------------------------------------*/
export default function NasPage() {
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
                    familyHistory={patient.familyHistory}
                />
            </PatientSection>

            {/* ECG */}
            <PatientSection title="ECG" pdfs={patient.pdfs.ecg}>
                <Text>Atrial fibrillation, RBBB</Text>
            </PatientSection>

            {/* Bloods */}
            <PatientSection title="Recent Bloods" pdfs={patient.pdfs.bloods}>
                <DemographicsGrid data={patient.bloods} />
            </PatientSection>

            {/* Right-Heart Catheter */}
            <PatientSection title="Right-Heart Catheter" pdfs={patient.pdfs.rhc}>
                <Text>{patient.rhc}</Text>
            </PatientSection>

            {/* Angiogram */}
            <PatientSection title="Angiogram" pdfs={patient.pdfs.angio}>
                <Text>{patient.angio}</Text>
            </PatientSection>

            {/* CT Cardiac */}
            <PatientSection title="CT Cardiac" pdfs={patient.pdfs.ct}>
                <Text>{patient.ctSummary}</Text>
            </PatientSection>

            {/* TOE / Tricuspid Anatomy */}
            <PatientSection
                title="TOE – Tricuspid Anatomy"
                pdfs={patient.pdfs.toe}
            >
                <Text>{patient.toeSummary}</Text>
            </PatientSection>

            {/* Cardiothoracic Surgery Consult */}
            <PatientSection title="Cardiothoracic Surgery Consult" pdfs={patient.pdfs.consult}>
                <Text>{patient.consultText}</Text>
            </PatientSection>
        </PatientLayout>
    );
}
