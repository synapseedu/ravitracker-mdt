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
   Patient data – FREDERICK EDWARDS (mitral-clip work-up)
-------------------------------------------------------------------*/
const patient = {
    id: 'edwards',
    name: 'FREDERICK EDWARDS',
    dob: '1937-12-22',
    mrn: '2354436',
    referralDate: '11/11/2024',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Rao',
    contact: '0427 699 169',

    pdfs: {
        referral: ['Edwards Referral.pdf'],
        tte: ['Edwards TTE.pdf'],
        toe: ['Edwards TOE.pdf'],
        angio: ['Edwards RHC and LHC.pdf'],
        ecg: ['Edwards ECG.pdf'],
        cts: ['Edwards Dr Mathur letter.pdf'],
    },

    /* Hx / meds -------------------------------------------------- */
    background: [
        'CABG 1996',
        'Stroke 1995',
        'Long-standing chronic atrial fibrillation',
        'Gastro-oesophageal reflux disease',
    ],
    medications: [
        'Apixaban',
        'Entresto',
        'Bisoprolol',
        'Somac (Sozol)',
        'Spironolactone',
        'Magnesium',
    ],
    social:
        'Lives in Warren with supportive daughter nearby; still drives; cognitively excellent.',
    functional:
        'Mild exertional dyspnoea. Denies orthopnoea, PND or oedema.',

    /* Investigations --------------------------------------------- */
    tteData: {
        'LV EF': '40–45 %',
        MR: 'Severe (atrial-functional)',
        Comments: 'See TTE PDF – posteriorly directed severe MR',
    },
    toeSummary: [
        'Severe posteriorly directed MR – EROA 0.42 cm², RV 66 mL',
        'Ischaemic (secondary) MR with restricted posterior leaflet motion',
        'Feasible for MitraClip/TEER – likely 1 NT-W centrally, 2nd clip if needed',
    ],
    rhc: 'Mean PAP 30 mmHg, PCWP 19 mmHg, PVR 3.2 WU (mixed pre-/post-capillary PH)',
    angio:
        'Native significant RCA & LAD disease; patent LIMA; occluded SVG → R-PDA',
    ecg: 'Atrial fibrillation',
    bloods: { Hb: 140, Plts: 111, Cre: 82, eGFR: 75 },

    ctsSummary: `I think intervention for his valvular pathology would be appropriate, but timing is debatable as he only complains of mild exertional dyspnoea.

If the Heart Team felt intervention appropriate, first-line would be MitraClip ± TriClip. If TOE anatomy proved unfavourable, re-operative surgery at his age and with prior CABG would need careful consideration.

— Dr Manu Mathur`,
};

/* ------------------------------------------------------------------ */
export default function EdwardsPage() {
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

            {/* TOE */}
            <PatientSection title="TOE / Mitral Anatomy" pdfs={patient.pdfs.toe}>
                {patient.toeSummary.map(line => (
                    <Text key={line} display="block">{line}</Text>
                ))}
            </PatientSection>

            {/* RHC & Angio */}
            <PatientSection title="RHC / Angiogram" pdfs={patient.pdfs.angio}>
                <Text strong>RHC:&nbsp;</Text>{patient.rhc}<br />
                <Text strong>Angio:&nbsp;</Text>{patient.angio}
            </PatientSection>

            {/* ECG */}
            <PatientSection title="ECG" pdfs={patient.pdfs.ecg}>
                <Text>{patient.ecg}</Text>
            </PatientSection>

            {/* Bloods */}
            <PatientSection title="Bloods">
                <DemographicsGrid data={patient.bloods} />
            </PatientSection>

            {/* CT-Surgery opinion */}
            <PatientSection
                title="Cardiothoracic Surgery Consult"
                pdfs={patient.pdfs.cts}
            >
                <Text>{patient.ctsSummary}</Text>
            </PatientSection>
        </PatientLayout>
    );
}
