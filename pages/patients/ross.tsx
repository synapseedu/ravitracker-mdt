// pages/patients/ross.tsx
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
   Patient data – WENDY ROSS
-------------------------------------------------------------------*/
const patient = {
    id: 'ross',
    name: 'WENDY ROSS',
    dob: '1942-06-11',
    mrn: '0068643',
    referralDate: '18/06/2025',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Wang',
    contact: '0435 023 246',
    weight: '58 kg',
    height: '147 cm',
    pdfs: {
        referral: ['Ross referral.pdf'],
        tte: ['Ross TTE.pdf'],
        angio: ['Ross angio.pdf'],
        ecg: ['Ross ECG.pdf'],
        ct: ['Ross CT TAVI.pdf'],
        pelvicUS: ['Ross pelvic ultrasound.pdf'], // NEW
        bloods: ['Ross Bloods.pdf'],
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'Myocardial infarction >20 years ago (no stents)',
        'Aortic root dilatation',
        'Hypertension',
        'Hypercholesterolaemia',
        'Osteoarthritis',
        'Bilateral total knee replacements',
        'Osteopenia',
    ],
    medications: [
        'Catapress 100 mcg nocte',
        'Lipitor 40 mg OD',
        'Telmisartan 80 mg OD',
        'Dothiepin 75 mg OD',
    ],
    social:
        'Lives at home in a unit. Supportive children nearby. Non-smoker; drinks 2–3 champagnes on Fridays at the club. Uses public transport; retired seamstress.',
    functional:
        'Independent ADLs and mobility; walks three blocks (limited by pain). Occasional dizziness and nocturnal chest discomfort (uses GTN once / month, denies syncope). Minimal SOBOE. Main complaint: hypertension. Denies oedema, PND, orthopnoea.',

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '55 %',
        AVA: '0.9 cm²',
        'Peak Gradient': '74 mmHg',
        'Mean Gradient': '51 mmHg',
        'Peak AV Velocity': '4.29 m/s',
        MR: 'None',
        AR: 'Mild',
        Comments: 'Severe aortic stenosis with mild regurgitation.',
    },
    angio:
        'Mild–moderate CAD: 40 % proximal LAD, 90 % OM4 (small calibre, collateralised), 40–50 % proximal RCA.',
    ecg: 'Sinus rhythm.',
    ctIncidentals:
        'Dilated ascending thoracic aorta and proximal arch. Sub-pleural nodule (LLL) – CT follow-up in 12 months.',

    pelvicReport: (
        <>
            Thickening of the endometrial complex noted on CT.<br />
            While the endometrial canal is distended with fluid there is no obvious thickening of the
            endometrium itself and no obvious focal endometrial lesion. A complex cystic area in the anterior
            myometrium is noted. There is also no obvious ovarian or adnexal abnormality.
        </>
    ),

    bloods: {
        MOCA: '27/30',
        Hb: '136',
        Plts: '234',
        Cre: '72',
        eGFR: '67',
        Albumin: '43',
    },
    consults: { 'Aged Care': 'N/A', 'Cardiothoracic': 'N/A' },
};

/* ------------------------------------------------------------------ */
export default function RossPage() {
    return (
        <PatientLayout title={patient.name}>
            {/* Demographics */}
            <PatientSection title="Demographics">
                <DemographicsGrid
                    data={{
                        DOB: patient.dob,
                        Age: getAge(patient.dob),
                        MRN: patient.mrn,
                        'Referral Date': (
                            <>
                                {patient.referralDate}&nbsp;
                                <PdfIcons files={patient.pdfs.referral} />
                            </>
                        ),
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
                    <strong>Incidentals:</strong>&nbsp;{patient.ctIncidentals}
                </Text>
            </PatientSection>

            {/* Pelvic Ultrasound */}
            <PatientSection title="Pelvic Ultrasound" pdfs={patient.pdfs.pelvicUS}>
                <Text>{patient.pelvicReport}</Text>
            </PatientSection>

            {/* Bloods */}
            <PatientSection title="Bloods" pdfs={patient.pdfs.bloods}>
                <DemographicsGrid data={patient.bloods} />
            </PatientSection>

            {/* Consults */}
            <PatientSection title="Consults">
                <DemographicsGrid data={patient.consults} />
            </PatientSection>
        </PatientLayout>
    );
}
