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
   Patient data – COLIN BROMLEY
-------------------------------------------------------------------*/
const patient = {
    id: 'bromley',
    name: 'COLIN BROMLEY',
    dob: '1936-10-23',
    mrn: '0635605',
    referralDate: '11/07/2025',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Mooney / Dr Gunalingam',
    contact: '—',
    weight: '—',
    height: '—',

    pdfs: {
        tte: ['Bromley TTE 16.1.25.pdf', 'Bromley Wyong TTE 8.7.25.pdf'],
        angio: ['Bromley angio.pdf'],
        ecg: ['Bromley ECG.pdf'],
        ct: ['Bromley medtronic.pdf'],
        pft: ['Bromley PFT.pdf'],
        agedCare: ['Bromley aged care.pdf'],
        respiratory: [
            'Bromley respiratory Dr Hunter 2024.pdf',
            'Bromley respiratory Dr Hunter 2025.pdf',
        ],
        vascular: ['Bromley vascular Dr Tchen 2025.pdf'],
        correspond: [
            'Bromley Dr Gunnaligam 1.25.pdf',
            'Bromley Dr Gunnalingah clearance for SPC.pdf',
            'Bromley Dr Gunnalingam 2.25.pdf',
        ],
    },

    /* history & meds --------------------------------------------------*/
    background: [
        'CABG + mitral & tricuspid rings (2018)',
        'Paroxysmal AF',
        'Hypertension',
        'Hypercholesterolaemia',
        'Mild COPD',
        'Peripheral vascular disease (fem-pop bypasses 1995 & 2005)',
        'Suprapubic catheter (Jun 2025)',
    ],
    medications: [
        'Frusemide 80 mg IV mane / 40 mg midday',
        'Apixaban 2.5 mg bd',
        'Atorvastatin 40 mg',
        'Entresto 24/26 mg bd',
        'Aspirin',
        'Bisoprolol 2.5 mg mane',
        'Spironolactone 12.5 mg',
        'Hydrochlorothiazide 25 mg',
        'Paracetamol PRN',
        'Coloxyl + Senna',
    ],
    social:
        'Lives independently with wife; daughter nearby and helps. Ex-smoker (quit 30 y), 2 standard drinks/week, still drives.',
    functional:
        'Progressive dyspnoea leading to Wyong admission (Jul 2025). Intermittent light-headedness; no angina or syncope. Now improved post-diuresis.',

    /* investigations --------------------------------------------------*/
    tteData: {
        'LV EF': '30 %',
        AVA: '0.6 cm²',
        'Peak Gradient': '34 mmHg',
        'Mean Gradient': '18 mmHg',
        'Peak AV velocity': '3.7 m/s',
        DVI: '0.13',
        MR: 'Mild–moderate',
        AR: 'Trivial',
        Comments:
            'DSE 22 Jul 2025: features consistent with true severe AS; LVEF augmented to ≈45 % at peak.',
    },
    angio:
        'Patent LIMA→LAD & SVG→PDA. Isolated D1 90 %, LCx 50–80 %. PCI on LCx under consideration.',
    ecg: 'Atrial fibrillation',
    ctIncidentals:
        'Favours transfemoral access (may require Shockwave); multiple mildly enlarged right mediastinal & supraclavicular nodes – follow-up planned.',
    pft:
        'FEV₁ 62 %, FVC 97 % (post-bronchodilator); mild obstruction, severely reduced DLCO.',
    bloods: { Hb: 112, Plts: 341, Cre: 123, eGFR: 45, Albumin: 32, MOCA: '20/30' },
    agedCare: 'Dr Kumar (Wyong): fit for TAVI, no geriatric barriers.',
};

/* ------------------------------------------------------------------ */
export default function BromleyPage() {
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
            <PatientSection title="TTE / DSE" pdfs={patient.pdfs.tte}>
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

            {/* PFT */}
            <PatientSection title="Pulmonary Function Tests" pdfs={patient.pdfs.pft}>
                <Text>{patient.pft}</Text>
            </PatientSection>

            {/* Bloods */}
            <PatientSection title="Bloods">
                <DemographicsGrid data={patient.bloods} />
            </PatientSection>

            {/* Aged-Care & Respiratory */}
            <PatientSection title="Aged-Care Review" pdfs={patient.pdfs.agedCare}>
                <Text>{patient.agedCare}</Text>
            </PatientSection>

            <PatientSection title="Respiratory Consult" pdfs={patient.pdfs.respiratory} />

            {/* Vascular / Other correspondence */}
            <PatientSection title="Vascular & Other Correspondence" pdfs={[...patient.pdfs.vascular, ...patient.pdfs.correspond]} />
        </PatientLayout>
    );
}
