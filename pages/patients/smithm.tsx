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
   Patient data – MARILYN SMITH
-------------------------------------------------------------------*/
const patient = {
    id: 'smith',
    name: 'MARILYN SMITH',
    dob: '1948-05-13',
    mrn: '0554971',
    referralDate: '22/05/2025',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Tony Kull',
    contact: '0484 871 858',
    weight: '75 kg',
    height: '154 cm',
    pdfs: {
        referral: ['Smith.M referral.pdf'],
        tte: ['Smith.M TTE RNSH 11.7.25.PDF', 'SmitM TTE 6.2.25.pdf'],
        angio: ['Smith.M angio 2023.pdf'],
        ecg: ['Smith.M ECG.pdf'],
        ct: ['Smith.M CT TAVI.pdf', 'Smith.M medtronic.pdf'],
        bloods: [],
        cardiothoracic: ['Smith.M Dr bassin.pdf'],
        renal: ['Smith.M renal letters.pdf'],
    },

    /* Past medical history -------------------------------------------------- */
    background: [
        'ESRF – haemodialysis via left-arm fistula (Mon/Wed/Fri; Prof Roger)',
        'Valvular heart disease (Dr Kull)',
        'Type 2 diabetes mellitus',
        'Hypercholesterolaemia',
        'Hypertension',
        'Obstructive sleep apnoea',
        'Previous type 2 NSTEMI',
        'Visual aura without headache',
        'Hysteroscopy + D&C',
        'Chronic cough/runny nose – Dr Lee (resp); told not emphysema',
    ],

    /* Medications ----------------------------------------------------------- */
    medications: [
        'Carvedilol 3.125 mg',
        'Sevelamer',
        'Pariet',
        'Aspirin',
        'Vytorin 10/20 mg',
        'Rocaltrol',
        'Sifrol',
        'Progout',
    ],

    /* Social & functional --------------------------------------------------- */
    social: `Lives alone with cat. Son near Byron Bay; granddaughter in Sydney visits often.
Independent with ADLs; mobilises with 4-wheel walker for distance.
HCP Level 2 (2 h/week cleaning & shopping); community nurses (leg ulcer healed 19 / 6 / 25).
Ex-smoker (15 pack-years; quit 30 y ago). Occasional alcohol.`,
    functional:
        'Heaviness in chest on exertion (sometimes during dialysis); occasional fatigue/breathlessness; dizziness when bending over. MOCA 30/30.',

    /* TTE 11 / 7 / 25 ------------------------------------------------------- */
    tteData: {
        'LV EF': '55–60 %',
        AVA: '0.9 cm²',
        AVAi: '0.5',
        'Peak Gradient': '60 mmHg',
        'Mean Gradient': '33 mmHg',
        'Peak AV velocity': '3.9 m/s',
        SVI: '51.4',
        AR: 'Moderate',
        MR: 'Mild',
    },

    /* Other investigations -------------------------------------------------- */
    angio: 'Minor coronary artery disease',
    ecg: 'Sinus rhythm; normal PR interval and QRS',
    ctIncidentals: 'Left coronary slightly low; right sinus-of-Valsalva undersized',
    bloods: {
        Hb: '115',
        Plts: '227',
        Creatinine: '717',
        eGFR: '4',
        Albumin: '37',
    },

    consultTexts: {
        cardiothoracic: `CT chest shows an essentially porcelain aorta → prohibitive surgical risk.
Symptoms presently well managed; continue medical therapy.
If symptoms progress, consider very high-risk surgery or TAVI.
– Dr Levi Bassin (2023)`,
    },
};

/* ------------------------------------------------------------------ */
export default function SmithPage() {
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
                <Text>
                    <strong>Incidentals:&nbsp;</strong>
                    {patient.ctIncidentals}
                </Text>
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
                <Text>{patient.consultTexts.cardiothoracic}</Text>
            </PatientSection>

            {/* Renal Physician Letters */}
            <PatientSection title="Renal Physician Letters" pdfs={patient.pdfs.renal} />
        </PatientLayout>
    );
}
