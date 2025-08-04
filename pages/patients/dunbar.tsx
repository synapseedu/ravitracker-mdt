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
   Patient data – THOMAS DUNBAR
-------------------------------------------------------------------*/
const patient = {
    id: 'dunbar',
    name: 'THOMAS DUNBAR',
    dob: '1938-01-23',
    mrn: 'ME00467507',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Natasha Huon',
    referralDate: '22/07/2025',
    contact: '0447 281 456',
    address: '3/20 Charles St, Freshwater NSW 2096',
    heightCm: 169,
    weightKg: 66,
    pdfs: {
        tte: ['DUNBAR_THOMAS_TTE_24.07.2025_TD230138.pdf'],
        angio: ['Dunbar Angio.pdf'],
        ecg: ['Dunbar ecg.pdf'],
        ct: ['DUNBAR Thomas - CT_TAVI.pdf', 'Dunbar medtronic.pdf'],
        bloods: ['Dunbar bloods.pdf'],
        agedCare: ['Dunbar Aged Care.pdf'],
    },

    /* Past medical history -------------------------------------------------- */
    background: [
        'Severe symptomatic aortic stenosis (AS) & moderate-to-severe MR',
        'Coronary artery disease; stent thrombosis Oct 2024 post knee replacement',
        'Heart failure with LVEF 20-25 %',
        'BiV ICD upgrade 2025',
        'Chronic kidney disease (eGFR ≈ 45; Cr 135-140)',
        'Previous pleural effusion (drained)',
        'Aphasia',
    ],

    /* Medications ----------------------------------------------------------- */
    medications: [
        'Ramipril 1.25 mg nocte',
        'Rosuvastatin 40 mg daily',
        'Spironolactone 12.5 mg daily',
        'Pantoprazole',
    ],

    /* Social & functional --------------------------------------------------- */
    social: `Lives with wife, independent in iADLs.  
Passed driving test but not currently driving due to cardiac issues.`,
    functional: `NYHA III.  SOBOE.  ED admission 31 / 07 / 25.`,

    /* Echocardiography (24 / 07 / 25) -------------------------------------- */
    tteData: {
        'LV EF': '20 %',
        'Peak Gradient': '24 mmHg',
        'Mean Gradient': '13 mmHg',
        'Peak AV velocity': '2.46 m/s',
        SVI: '24 mL/m²',
        AR: 'Trivial',
        MR: 'Moderate',
        Comment:
            'Low-flow, low-gradient severe AS with markedly calcified functionally bicuspid valve; poor LV EF.',
    },

    /* Other investigations -------------------------------------------------- */
    angio: `25 / 07 / 2025 – CTO of non-dominant RCA; mild residual disease, no in-stent restenosis.`,
    ecg: 'AV dual-paced rhythm',
    ctIncidentals: 'Access & valve selection not documented; see CT_TAVI reports.',
    bloods: {
        Hb: '139',
        Plts: '271',
        Urea: '11.2',
        Creatinine: '125',
        eGFR: '45',
        Albumin: '41',
        Haematocrit: '0.43',
        WBC: '7.3',
    },

    agedCareNote:
        'Word-finding difficulties but no major cognitive impairment observed.  From geriatric POV, suitable for TAVI; note risk of peri-op delirium given prior episodes.',

    procedurePlan: 'Planned TAVI; valve choice and access to be finalised.',
};

/* ------------------------------------------------------------------ */
export default function DunbarPage() {
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
                        Referrer: patient.referrer,
                        Contact: patient.contact,
                        Address: patient.address,
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
            <PatientSection title="Bloods" pdfs={patient.pdfs.bloods}>
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
