// pages/patients/clark-nelson.tsx
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
   Patient data – NELSON CLARK
   (all clinical facts referenced to MDT ☞ see inline citations)
-------------------------------------------------------------------*/
const patient = {
    id: 'clark-nelson',
    name: 'NELSON CLARK',
    dob: '1947-02-22',                                // :contentReference[oaicite:20]{index=20}
    mrn: '2363156',                                   // :contentReference[oaicite:21]{index=21}
    referralDate: '26/07/2025',                       // :contentReference[oaicite:22]{index=22}
    structuralPhysician: 'Dr Hansen',                 // :contentReference[oaicite:23]{index=23}
    referrer: 'Dr Brereton / Dr Williams',            // :contentReference[oaicite:24]{index=24}
    contact: '0431 655 057',                          // :contentReference[oaicite:25]{index=25}
    weight: '66 kg', height: '170 cm',                // :contentReference[oaicite:26]{index=26}
    pdfs: {
        referral: [],                                   // none supplied
        tte: ['Clark.N RNSH TTE 27.7.25.pdf'],
        angio: ['Clark.N angio.pdf'],
        ecg: [],                                        // no stand-alone ECG pdf
        ct: ['Clark.N CT TAVI.pdf', 'Clark medtronic.pdf'],
        breast: ['Clark breast surgery 30.7.25.pdf'],
        cts: ['Clark.N CTSx.pdf'],
        carotid: ['Clark.N OT.pdf'],
        pft: [],                                        // no PFT file
    },

    /* history & meds --------------------------------------------------*/
    history: [
        'COPD',
        'Mixed aortic / mitral valve incompetence',
        'GORD',
        'Dyslipidaemia',
        'Type 2 diabetes mellitus',
        'Hypertension',
        'Atrial fibrillation',
        'TIAs; bilateral carotid stents (2012)',
        'Hodgkin lymphoma → mediastinal radiotherapy; diaphragmatic paralysis & lung fibrosis',
        'Current smoker (≈10/day)',
    ],                                                // :contentReference[oaicite:27]{index=27}
    medications: [
        'Clexane 60 mg BD',
        'Ezetimibe 10 mg od',
        'Frusemide 40 mg mane',
        'Linagliptin 2.5 mg mane',
        'Nebivolol 1.25 mg od',
        'Rosuvastatin 40 mg od',
        'Tiotropium inhaler',
    ],                                                // :contentReference[oaicite:28]{index=28}
    social:
        'Lives at home with wife; functionally independent & very active – was mowing lawns for 5 h pre-admission; still drives; current smoker (≈10/day); minimal ETOH.', // :contentReference[oaicite:29]{index=29}
    functional:
        'Admitted with acute SOB + NSTEMI; now euvolaemic after IV diuresis. Previously no chest pain or ET limitation; occasional mild ankle oedema at night; denies PND/orthopnoea.', // :contentReference[oaicite:30]{index=30}

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '55–60 %',
        AVA: '1.2 cm²',
        AVAi: '0.7',
        'Peak Gradient': '42 mmHg',
        'Mean Gradient': '68 mmHg',
        'Peak AV velocity': '4.1 m/s',
        SVI: '67 mL/m²',
        AR: 'Moderate',
        MR: '—',
        Comments:
            'Trileaflet valve; severely calcified & restricted leaflets; moderate AR.', // :contentReference[oaicite:31]{index=31}
    },
    angio:
        'Gosford 22/07/2025: 60 % distal LM; 50 % proximal RCA mild distal disease.', // :contentReference[oaicite:32]{index=32}
    ecg: 'New-onset atrial fibrillation',                                         // :contentReference[oaicite:33]{index=33}
    ctIncidentals:
        '9 mm ovoid focus in left breast – referred for mammogram ± USS',           // :contentReference[oaicite:34]{index=34}
    pft:
        'Normal spirometry (FEV₁ 71 %, FVC 84 %, FEV₁/FVC 84 %).',                 // :contentReference[oaicite:35]{index=35}
    carotid:
        'Bilateral ICA stents patent; mild–moderate calcified plaque; <50-% ECA stenoses.', // :contentReference[oaicite:36]{index=36}
    bloods: {
        Hb: 122, Plts: 159, Cre: 93, eGFR: 67, Albumin: 34, MOCA: '25/30',
    },                                                                            // :contentReference[oaicite:37]{index=37}
    ctsComment:
        'Discussed CABG vs TAVI; preference for TAVI in context of prior mediastinal radiotherapy.', // :contentReference[oaicite:38]{index=38}
};

/* ------------------------------------------------------------------*/
export default function ClarkNelsonPage() {
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

            {/* Background & Meds */}
            <PatientSection title="Background & Medications">
                <StatusCard
                    history={patient.history}
                    medications={patient.medications}
                    social={patient.social}
                    functional={patient.functional}
                />
            </PatientSection>

            {/* TTE */}
            <PatientSection title="TTE (24 / 07 / 25)" pdfs={patient.pdfs.tte}>
                <DemographicsGrid data={patient.tteData} />
            </PatientSection>

            {/* Angio / ECG */}
            <PatientSection title="Angio" pdfs={patient.pdfs.angio}>
                <Text>{patient.angio}</Text>
            </PatientSection>

            <PatientSection title="ECG">
                <Text>{patient.ecg}</Text>
            </PatientSection>

            {/* CT TAVI */}
            <PatientSection title="CT TAVI / Access / Valve" pdfs={patient.pdfs.ct}>
                <Text>{patient.ctIncidentals}</Text>
            </PatientSection>

            {/* PFT */}
            <PatientSection title="Pulmonary Function Tests" pdfs={patient.pdfs.pft}>
                <Text>{patient.pft}</Text>
            </PatientSection>

            {/* Carotid Duplex */}
            <PatientSection title="Carotid Duplex" pdfs={patient.pdfs.carotid}>
                <Text>{patient.carotid}</Text>
            </PatientSection>

            {/* Bloods */}
            <PatientSection title="Bloods">
                <DemographicsGrid data={patient.bloods} />
            </PatientSection>

            {/* Breast Surgery referral */}
            <PatientSection title="Breast Surgery" pdfs={patient.pdfs.breast}>
                <Text>Left-breast 9 mm nodule – awaiting imaging / surgical opinion.</Text>
            </PatientSection>

            {/* Cardiothoracic Consult */}
            <PatientSection
                title="Cardiothoracic Surgery Consult"
                pdfs={patient.pdfs.cts}
            >
                <Text>{patient.ctsComment}</Text>
            </PatientSection>
        </PatientLayout>
    );
}
