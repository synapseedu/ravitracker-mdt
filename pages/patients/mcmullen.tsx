// pages/patients/mcmullen.tsx
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
   Patient data – JOHN McMULLEN
-------------------------------------------------------------------*/
const patient = {
    id: 'mcmullen',
    name: 'JOHN McMULLEN',
    dob: '1938-04-05',
    mrn: '2359358',
    referralDate: '16/06/2025',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Armit Michael',
    contact: 'Julie 0433 213 626',
    email: 'juliemcmullen022@gmail.com',
    pdfs: {
        referral: ['Mcmullen referral.pdf'],
        tte: ['Mcmullen TTE.pdf', 'Mcmullen TTE RNSH 16.7.25.pdf'],
        angio: ['Mcmullen angio.pdf'],
        ecg: [],
        ct: ['Mcmullen medtronic.pdf'],
        hrct: ['Mcmullen HRCT chest.pdf'],
        gastro: ['McMullen gastro consultation 20.7.25.pdf'],
        geriatrician: ['Mcmullen geriatrician.pdf'],
        respiratory: ['McMullen respiratory.pdf'],
        bloods: ['Mcmullen bloods.pdf'],
    },

    /* history & meds (from MDT) ------------------------------------ */
    background: [
        'CABG 2003 (SVG-OM graft)',
        'COPD',
        'Mild cognitive impairment',
        'Previous CVA',
        'Awaiting cataract surgery (4 Jul 2025)',
        'Ongoing dysphagia & 7 kg weight loss – gastro review booked 11 Jul 2025',
    ],
    medications: [
        'Clopidogrel 75 mg',
        'Frusemide 40 mg',
        'Perindopril 2.5 mg',
        'Atorvastatin 40 mg',
        'Metoprolol 25 mg daily',
        'Oxybutynin daily',
    ],
    social:
        'Lives with son (carer); supportive daughter nearby. Ex-smoker (quit 30 y). Nightly port; occasional club drinks.',
    functional:
        'Independent pADLs; uses 4-wheel walker outdoors (several falls last year). Walks 500 m to club but slower. Progressive SOBOE & fatigue; denies chest pain, oedema, syncope, PND.',

    /* investigations ----------------------------------------------- */
    tteData: {
        'LV EF': '25–30 %',
        AVA: '0.7 cm²',
        AVAi: '0.4',
        'Peak Gradient': '45 mmHg',
        'Mean Gradient': '33 mmHg',
        'Peak AV velocity': '3.4 m/s',
        MR: 'Mild–Moderate',
        AR: 'Trivial',
        SVI: '29',
        DVI: '0.25',
        Comments:
            'Probable bicuspid AV (raphe L-R); severe low-flow, low-gradient AS.',
    },
    angio:
        'CTO of native RCA & LCx (supplied by grafts/collaterals). LAD iFR 0.55 – haemodynamically significant.',
    ecg: 'Sinus bradycardia.',

    // No formal findings yet in MDT → keep CT incidentals empty
    ctIncidentals: '—',

    bloods: { Hb: '112', Plts: '260', Cre: '83', eGFR: '73' },
};

/* ------------------------------------------------------------------ */
export default function McMullenPage() {
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
                        Email: patient.email,
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

            {/* HRCT Chest (Respiratory) */}
            <PatientSection title="Respiratory Input" pdfs={patient.pdfs.respiratory}>
                <Text>
                    COPD follow-up with Dr Brereton. HRCT chest attached for reference.
                </Text>
                <div style={{ marginTop: 12 }}>
                    <PdfIcons files={patient.pdfs.hrct} />
                </div>
            </PatientSection>

            {/* Gastro Consultation */}
            <PatientSection
                title="Gastro Consultation (20 Jul 2025)"
                pdfs={patient.pdfs.gastro}
            >
                <Text>Awaiting endoscopy to exclude structural/inflammatory foregut pathology.</Text>
            </PatientSection>

            {/* Geriatrician Input */}
            <PatientSection title="Geriatrician Input" pdfs={patient.pdfs.geriatrician}>
                <Text>Mild cognitive impairment remains stable (Dr Xing Lou, Oct 2024).</Text>
            </PatientSection>

            {/* PFT report */}
            <PatientSection title="PFT Report">
                <Text>No formal pulmonary-function test available.</Text>
            </PatientSection>

            {/* Bloods */}
            <PatientSection title="Bloods" pdfs={patient.pdfs.bloods}>
                <DemographicsGrid data={patient.bloods} />
            </PatientSection>
        </PatientLayout>
    );
}
