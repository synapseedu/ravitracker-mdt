// pages/patients/mcguire.tsx
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
   Patient data – STEPHEN McGUIRE
-------------------------------------------------------------------*/
const patient = {
    id: 'mcguire',
    name: 'STEPHEN McGUIRE',
    dob: '1953-07-22',
    mrn: 'ME00252119',
    referralDate: '—',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Gemma Figtree',
    contact: '0413 382 919',
    weight: '90 kg',
    pdfs: {
        referral: ['McGuire Figtree Referral.pdf'],
        tte: ['MCGUIRE_STEPHEN_TTE 31.03.2025 _SM220753.pdf'],
        stress: ['MCGUIRE_STEPHEN_ STRESS ECHO _08042025_SM220753.pdf'],
        angio: ['McGure angio.pdf'],
        ecg: [],
        ct: ['Stephen McGuire CT TAVI Report.pdf'],
        bloods: ['Mcmullen bloods.pdf'], // none supplied → placeholder kept for layout
        correspond: ['McGuire Manu letter.pdf'],
        other: [
            'McGuire Edwards report.pdf',
            'SM 22.7.53.pdf',
            'SM220753 Edwards BT0 ABC - NSW.pdf',
        ],
    },

    /* history & medications ----------------------------------------- */
    background: [
        'STEMI 2012 – stenting mid Cx + RCA',
        'Hypertension',
        'Hypercholesterolaemia',
        'Asthma',
    ],
    medications: ['Clopidogrel', 'Candesartan', 'Rosuvastatin', 'Ezetimibe'],
    social: 'Independent; lives at home with wife.',
    functional: 'SOBOE, one syncopal event, NYHA II',

    /* investigations ------------------------------------------------ */
    tteData: {
        'LV EF': '60 %',
        AVA: '0.9 cm²',
        'Peak Gradient': '65 mmHg',
        'Mean Gradient': '40 mmHg',
        SVI: '34.3',
        'Peak AV velocity': '4.16 m/s',
        MR: 'Mild–Moderate',
        AR: 'Nil',
        Comments:
            'Severely calcified AV with restricted opening – severe AS.',
    },
    stressEcho: (
        <>
            Moderate exercise capacity (mid-stage III), limited by breathlessness and 6/10 chest
            tightness.<br />
            Negative stress ECG.<br />
            Rest echo: normal LV size, inferolateral / inferior hypokinesis, normal EF.<br />
            Severe AS, mild/moderate aortic-root dilatation, positive for ischaemia.
        </>
    ),
    angio:
        'Mild–moderate CAD; 2012 stents mid Cx & RCA (patent).',
    ecg: 'Sinus rhythm.',
    ctIncidentals: (
        <>
            Sievers Type 0/I bicuspid AV with anomalous arch.<br />
            Calcium score 3990; no sub-annular calcification.
        </>
    ),
    bloods: { Hb: '151', Plts: '201', Cre: '90', eGFR: '76', Albumin: '44' },
    frailtyScore: '3',
    consults: {
        'Cardiothoracic Surgeon': 'Dr Manu Mathur (see letter PDF)',
    },
};

/* ------------------------------------------------------------------ */
export default function McGuirePage() {
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
            <PatientSection title="TTE (31 Mar 2025)" pdfs={patient.pdfs.tte}>
                <DemographicsGrid data={patient.tteData} />
            </PatientSection>

            {/* Stress Echo */}
            <PatientSection title="Stress Echo (8 Apr 2025)" pdfs={patient.pdfs.stress}>
                <Text>{patient.stressEcho}</Text>
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
                <Text style={{ display: 'block', marginTop: 8 }}>
                    <strong>Frailty Score:</strong> {patient.frailtyScore}
                </Text>
            </PatientSection>

            {/* Cardiothoracic Surgeon Letter */}
            <PatientSection
                title="Cardiothoracic Surgery Consult"
                pdfs={patient.pdfs.correspond}
            >
                <Text>{patient.consults['Cardiothoracic Surgeon']}</Text>
            </PatientSection>

            {/* Other documents */}
            <PatientSection title="Other Documents" pdfs={patient.pdfs.other} />

        </PatientLayout>
    );
}
