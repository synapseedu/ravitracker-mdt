// pages/patients/newlands.tsx
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
   Patient data – PATRICIA NEWLANDS
-------------------------------------------------------------------*/
const patient = {
    id: 'newlands',
    name: 'PATRICIA NEWLANDS',
    dob: '1940-11-08',
    mrn: 'ME00038341',
    referralDate: '17/06/2025',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Chrishan Nalliah',
    contact: '0424 955 140',
    weight: '70 kg',
    height: '172 cm',

    pdfs: {
        tte: ['Newlands echo 15.5.25.pdf'],
        angio: ['newlands angio.pdf'],
        ecg: ['Newlands ecg.pdf'],
        ct: ['PN 8.11.40 Severely calcified valve with annular and LVOT Ca..pdf'],
        bloods: ['Newlands Bloods.pdf'],
        geriatrics: ['Newlands Aged Care.pdf'],
        discharge: ['Newlands RNSH discharge summary.pdf'],
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'New-onset atrial fibrillation (2025)',
        'Pulmonary embolism',
        'HFrEF (LVEF 30 %)',
        'Severe aortic stenosis',
        'Recurrent UTI (K. pneumoniae, Keflex completed)',
        'GORD',
        'Hypothyroidism',
        'Breast cancer (L 2006, R 2011, both treated)',
        'Multiple plastic surgeries after 1964 MVA',
    ],
    medications: [
        'Bisoprolol 1.25 mg od',
        'Apixaban 10 mg bd',
        'Digoxin 125 µg od',
        'Frusemide 40 mg bd',
        'Atorvastatin 20 mg mane',
        'Cholecalciferol cap od',
        'Levothyroxine 100 µg mane',
        'Macuvision',
        'Magnesium 1 g bd',
        'Pantoprazole 40 mg od',
        'Panadol Osteo 1 tab tds',
        'Spironolactone 12.5 mg mane',
    ],
    social:
        'Lives alone with carers & Meals-on-Wheels; mobilises with 4-WW. Non-smoker; 3–4 gin-&-tonics/week. Recent RNSH admission for decompensated HF.',
    functional:
        'SOBOE, markedly reduced exercise tolerance, fatigue, mild bilateral oedema to mid-shins.',

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '30 %',
        AVA: '0.7 cm²',
        'Peak Gradient': '51 mmHg',
        'Mean Gradient': '32 mmHg',
        SVI: '26.5 ml/m²',
        'Peak AV velocity': '3.6 m/s',
        MR: 'Severe',
        AR: 'Trivial',
        Comments:
            'Tri-leaflet, severely calcified valve; low-flow / low-gradient severe AS (pseudostenosis unlikely).',
    },
    angio: 'Unobstructed coronary arteries.',
    ecg: 'Atrial fibrillation',
    ctIncidentals:
        'Severely calcified AV with annular & LVOT calcification (see PDF).',
    bloods: {
        MOCA: '26/30',
        Hb: '112',
        Plts: '263',
        Cre: '105',
        eGFR: '42',
        Albumin: '34',
    },
    frailtyScore: '4',
    gerisNote: 'No barrier to TAVI from geriatric perspective.',
};

/* ------------------------------------------------------------------*/
export default function NewlandsPage() {
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
            <PatientSection title="TTE (15 May 2025)" pdfs={patient.pdfs.tte}>
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
                <Text style={{ display: 'block', marginTop: 8 }}>
                    <strong>Frailty Score:</strong> {patient.frailtyScore}
                </Text>
            </PatientSection>

            {/* Geriatrician */}
            <PatientSection title="Geriatrician Review" pdfs={patient.pdfs.geriatrics}>
                <Text>{patient.gerisNote}</Text>
            </PatientSection>

            {/* Discharge Summary */}
            <PatientSection
                title="Recent RNSH Discharge Summary"
                pdfs={patient.pdfs.discharge}
            >
                <Text>See attached discharge summary for full admission details.</Text>
            </PatientSection>
        </PatientLayout>
    );
}
