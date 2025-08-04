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
   Patient data – DONALD LOW
-------------------------------------------------------------------*/
const patient = {
    id: 'low',
    name: 'DONALD LOW',
    dob: '1944-11-26',
    mrn: 'ME00195919',
    rnsn: '070-93-28',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Shubhada Kharwadkar',
    contact: '0415 522 577',
    heightCm: 170,
    weightKg: 78,
    pdfs: {
        tte: [
            'Low Royal Northshore Hospital TOE review for MitraClip.pdf',
            'Low_Donald_TOE_report.pdf',
        ],
        angio: ['Low Angio.pdf'],
        ecg: ['Low ECG.pdf'],
        crt: ['Low Don CRT report.pdf'],
        haemodynamics: ['Low PH 13.6.25.pdf'],
        renal: ['Low renal and aged care.pdf'],
        cardiothoracic: ['Low Dr Brereton 26111944.pdf'],
    },

    /* Past medical history -------------------------------------------------- */
    background: [
        'Ischaemic heart disease',
        'Atrial fibrillation',
        'CRTD in situ',
        'CABG 2016 (Dr John Brereton)',
        'Chronic kidney disease (Dr Patrick Lan)',
        'Hypertension',
        'Prostate cancer – radiotherapy 2019',
    ],

    /* Medications ----------------------------------------------------------- */
    medications: [
        'Bisoprolol 5 mg bd',
        'Entresto 24/26 mg bd',
        'Frusemide 80 mg bd',
        'Warfarin',
    ],

    /* Social & functional --------------------------------------------------- */
    social: 'Lives with wife; independent.',
    functional: 'SOBOE and peripheral oedema.',

    /* TTE / TOE ------------------------------------------------------------- */
    tteData: {
        'LV EF': '20 %',
        MR: 'Severe secondary (ventricular mechanism)',
        TR: 'Severe secondary',
    },

    /* Other investigations -------------------------------------------------- */
    angio: `20 / 06 / 2025 – patent native LCx, patent LIMA–LAD. 
Haemodynamics: RA 27 (19) mmHg, PA 39/24 (31) mmHg, PCWP 26 (24) mmHg, CO 3.54 L/min, PVR 1.98 WU.`,
    ecg: 'Ventricular paced rhythm (BiV)',
    bloods: {
        Hb: '131',
        Plts: '83',
        INR: '2.2',
        Creatinine: '322',
        eGFR: '15',
    },

    renalNote: `Discussed potential dialysis scenarios. If cardiac intervention improves EF,
renal function may improve but could also deteriorate; patient accepts risk.`,

    cardiothoracicNote: `Open double-valve surgery at age 82 with creatinine > 300 and severe LV dysfunction
would demand post-op dialysis and possibly ECMO. Percutaneous mitral intervention
is preferred; surgery may be reconsidered if TEER fails. – Dr John Brereton`,

    procedurePlan: `**Urgent TEER (MitraClip)**  
• Atrial functional MR (A3/P3), broad jet, restricted posterior leaflet  
• Strategy: two central clips + medial clip (P5 Pascal)  
• Admit pre-procedure for dobutamine; may need ASD closure  
• Liaise with renal; MRI post-procedure if device compatible  
**Approved at feasibility 15 / 07 / 2025**`,
};

/* ------------------------------------------------------------------ */
export default function LowPage() {
    return (
        <PatientLayout title={patient.name}>
            {/* Demographics */}
            <PatientSection title="Demographics">
                <DemographicsGrid
                    data={{
                        DOB: patient.dob,
                        Age: getAge(patient.dob),
                        'MRN (ME)': patient.mrn,
                        'RNSH UR': patient.rnsn,
                        Structural: patient.structuralPhysician,
                        Referrer: patient.referrer,
                        Contact: patient.contact,
                        Height: `${patient.heightCm} cm`,
                        Weight: `${patient.weightKg} kg`,
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

            {/* TTE / TOE */}
            <PatientSection title="TTE / TOE" pdfs={patient.pdfs.tte}>
                <DemographicsGrid data={patient.tteData} />
            </PatientSection>

            {/* Angio & Haemodynamics */}
            <PatientSection
                title="Coronary Angio / Haemodynamics"
                pdfs={[...patient.pdfs.angio, ...patient.pdfs.haemodynamics]}
            >
                <Text>{patient.angio}</Text>
            </PatientSection>

            {/* ECG */}
            <PatientSection title="ECG" pdfs={patient.pdfs.ecg}>
                <Text>{patient.ecg}</Text>
            </PatientSection>

            {/* CRT Device Report */}
            <PatientSection title="CRT Device Report" pdfs={patient.pdfs.crt} />

            {/* Bloods */}
            <PatientSection title="Bloods">
                <DemographicsGrid data={patient.bloods} />
            </PatientSection>

            {/* Renal / Aged-care Review */}
            <PatientSection title="Renal / Aged-care Review" pdfs={patient.pdfs.renal}>
                <Text>{patient.renalNote}</Text>
            </PatientSection>

            {/* Cardiothoracic Opinion */}
            <PatientSection
                title="Cardiothoracic Opinion"
                pdfs={patient.pdfs.cardiothoracic}
            >
                <Text>{patient.cardiothoracicNote}</Text>
            </PatientSection>

            {/* Procedure Plan */}
            <PatientSection title="Procedure Plan">
                <Text>{patient.procedurePlan}</Text>
            </PatientSection>
        </PatientLayout>
    );
}
