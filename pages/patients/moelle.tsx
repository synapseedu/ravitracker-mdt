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
   Patient data – ELEONORA (NORA) MOELLE
-------------------------------------------------------------------*/
const patient = {
    id: 'moelle',
    name: 'ELEONORA (NORA) MOELLE',
    dob: '1933-02-21',
    mrn: 'ME00464356',
    referralDate: '', // not supplied
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Prof Andrew Boyle',
    contact:
        'St Ives Aged Care Facility ☎ 4963 2894; Daughter Barbara 0411 146 464, barbara.meaney@gmail.com',
    pdfs: {
        referral: [
            'MOELLE ELEONORA referral.pdf',
            'Moelle Eleonora Prof Boyle 2024.pdf',
        ],
        tte: ['Moelle echo.pdf', 'MOELLE TOE Report.pdf'],
        angio: ['Moelle ANgio.pdf'],
        ecg: ['Moelle ecg.pdf'],
        ct: [], // CT not performed
        bloods: [],
        agedCare: ['Moelle aged care pt 1.pdf', 'Moelle Aged care pt2.pdf'],
    },

    /* Past medical history -------------------------------------------------- */
    background: [
        'Atrial fibrillation – paroxysmal',
        'Left inguinal hernia repair',
        'Osteoarthritis (knee)',
        "Bowen's disease",
        'Right knee replacement',
        'Osteoporosis',
        'Right cervical radiculopathy',
        'Bilateral hearing impairment – hearing aids',
        'Right supraspinatus tendon tear – total',
        'Cystocoele',
        'Left leg ulceration',
        'Left cataract removal & IOL implant',
        'Left vision abnormal',
        'L2 vertebral crush fracture',
    ],

    /* Medications ----------------------------------------------------------- */
    medications: ['Rivaroxaban (Xarelto)', 'Furosemide 20 mg once daily'],

    /* Social & functional --------------------------------------------------- */
    social: `Born in North Italy; moved to Australia 1961.
2 sons, 1 daughter.  Lives in aged-care facility.
Walks with a four-wheeled walker; still cooks independently.
Completed a PhD in visual arts/pottery at age 83.
Speaks three languages.`,
    functional: `Peripheral oedema, visible JVP, mild SOBOE.
Walks around the block; physiotherapist notes increased exertional tachycardia.
MOCA 15/30.`,

    /* TTE/TOE --------------------------------------------------------------- */
    tteData: {
        'LV EF': '65 %',
    },

    /* Other investigations -------------------------------------------------- */
    angio: `Unobstructed coronary arteries.  Haemodynamics: RA 12/13 (11), RV 32/6 (9),
PA 31/12 (21), PCWP 14/23 (17), CO 3.1 L/min, PVR 1.23 WU.`,
    ecg: 'Atrial fibrillation',
    bloods: {
        Hb: '128',
        Plts: '187',
        INR: '1.0',
        Creatinine: '77',
        eGFR: '58',
    },

    /* Aged-care assessment -------------------------------------------------- */
    agedCareNote:
        'Geriatric review: good candidate; no barriers from aged-care perspective to proceeding with MitraClip.',

    /* Procedure plan -------------------------------------------------------- */
    procedurePlan: `Planned TEER (MitraClip) – complex case
• Flail prolapse leaflet, central jet, severe MR, multi-segment prolapse, central indentation
Clipping strategy: 2 wide clips; reassess residual MR; treat any remaining prolapse.
Expect some residual MR post-procedure.`,
};

/* ------------------------------------------------------------------ */
export default function MoellePage() {
    return (
        <PatientLayout title={patient.name}>
            {/* Demographics */}
            <PatientSection title="Demographics">
                <DemographicsGrid
                    data={{
                        DOB: patient.dob,
                        Age: getAge(patient.dob),
                        MRN: patient.mrn,
                        ...(patient.referralDate && { 'Referral Date': patient.referralDate }),
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

            {/* Angio */}
            <PatientSection title="Angio" pdfs={patient.pdfs.angio}>
                <Text>{patient.angio}</Text>
            </PatientSection>

            {/* ECG */}
            <PatientSection title="ECG" pdfs={patient.pdfs.ecg}>
                <Text>{patient.ecg}</Text>
            </PatientSection>

            {/* Bloods */}
            <PatientSection title="Bloods">
                <DemographicsGrid data={patient.bloods} />
            </PatientSection>

            {/* Aged-care Review */}
            <PatientSection title="Aged-care Review" pdfs={patient.pdfs.agedCare}>
                <Text>{patient.agedCareNote}</Text>
            </PatientSection>

            {/* Procedure Plan */}
            <PatientSection title="Procedure Plan">
                <Text>{patient.procedurePlan}</Text>
            </PatientSection>
        </PatientLayout>
    );
}
