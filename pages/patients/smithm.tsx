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
   Patient data – MAGGIE LINGARD
-------------------------------------------------------------------*/
const patient = {
    id: 'lingard',
    name: 'MAGGIE LINGARD',
    dob: '1958-09-24',
    mrn: '0520968',
    referralDate: '17/04/2025',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Wong',
    contact: '0458 476 412',
    pdfs: {
        referral: ['Lingard referral.pdf'],
        tte: ['Lingard TTE march 2025.pdf'],
        angio: ['Lingard angio.pdf'],
        ecg: [],
        ct: ['Lingard CT TAVI.pdf', 'Lingard medtronic.pdf'],
        bloods: [],
        cardiothoracic: ['Lingard Dr Bassin.pdf'],
        renal: ['Lingard Dr Kumar Jan 2025.pdf'],
    },
    background: [
        'Hypertension',
        'Hypercholesterolaemia',
        'Depression',
        'Bladder incontinence',
        'Spinal stenosis with L1 compression',
        'Obstructive sleep apnoea (on CPAP)',
        'CKD stage 3',
    ],
    medications: [
        'Apixaban 5 mg bd',
        'Endep 10 mg nocte',
        'Frusemide 20 mg daily',
        'Ivabradine 5 mg',
        'Atorvastatin 20 mg',
        'Mirtazapine 30 mg mane',
        'Zan‑Extra 10/10 mg',
        'Sertraline 100 mg nocte',
    ],
    social:
        'Lives at home with dog; son in Sydney/Central Coast. Non‑smoker, nil alcohol. No driving.',
    functional:
        'Mobilises with 4‑wheel walker at home and wheelchair outdoors. Independent with personal ADLs (NDIS supports). Symptoms: progressive SOBOE, fatigue, occasional chest discomfort & dizziness, orthopnoea (45°), occasional oedema, no syncope.',
    tteData: {
        'LV EF': '55%',
        AVA: '0.6 cm²',
        AVAi: '0.3',
        'Peak Gradient': '73 mmHg',
        'Mean Gradient': '42 mmHg',
        'Peak AV velocity': '4.2 m/s',
        MR: 'Normal',
    },
    angio: 'Minor coronary artery disease',
    ecg: 'Atrial fibrillation',
    ctIncidentals: 'Nil significant incidentals',
    bloods: { Hb: '118', Creatinine: '110', eGFR: '45' },
    consultTexts: {
        cardiothoracic: `I had a good discussion with Maggie and her son, and my advice would be that she should undergo a TAVI if it is technically suitable. However, if there are anatomical constraints to a TAVI, I would be happy to consider open surgery.

The CT of the chest showed an essentially porcelain aorta that would make surgery a possible but prohibitive risk. Given that her symptoms are very well managed I think it would be better to manage her medically at the moment. If she does become more symptomatic we could consider very high‑risk surgery or the relatively new transcatheter mitral valve replacement as well as TAVI. I will leave her in your capable hands and I would be happy to see her at any point.
- Levi Bassin`,
    },
};

/* ------------------------------------------------------------------ */
export default function LingardPage() {
    return (
        <PatientLayout title={patient.name}>
            {/* Demographics */}
            <PatientSection title="Demographics">
                <DemographicsGrid
                    data={{
                        DOB: patient.dob,
                        Age: getAge(patient.dob),
                        MRN: patient.mrn,
                        'Referral Date': patient.referralDate,
                        Structural: patient.structuralPhysician,
                        Referrer: (
                            <>
                                {patient.referrer}&nbsp;
                                <PdfIcons files={patient.pdfs.referral} />
                            </>
                        ),
                        Contact: patient.contact,
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
            <PatientSection title="CT TAVI" pdfs={patient.pdfs.ct}>
                <Text><strong>Incidentals:</strong> {patient.ctIncidentals}</Text>
            </PatientSection>

            {/* Bloods */}
            <PatientSection title="Bloods" pdfs={patient.pdfs.bloods}>
                <DemographicsGrid data={patient.bloods} />
            </PatientSection>

            {/* Cardiothoracic Surgery Consult */}
            <PatientSection
                title="Cardiothoracic Surgery Consult"
                pdfs={patient.pdfs.cardiothoracic}
            >
                <Text>{patient.consultTexts.cardiothoracic}</Text>
            </PatientSection>

            {/* Renal Physician Consult */}
            <PatientSection title="Renal Physician Consult" pdfs={patient.pdfs.renal}>
                <DemographicsGrid data={{ 'Renal Physician': 'Dr Kumar' }} />
            </PatientSection>
        </PatientLayout>
    );
}
