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
   (all content taken verbatim from “Smith.M MDT.docx” and the PDFs
   you listed; nothing added or inferred)
-------------------------------------------------------------------*/
const patient = {
    id: 'smith',
    name: 'MARILYN SMITH',
    dob: '1948-05-13',
    mrn: '0554971',
    referralDate: '',            // not recorded in the docx
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Tony Kull',
    contact: '0484 871 858',
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
    background: [
        'ESRF – haemodialysis via left-arm fistula (Mon/Wed/Fri)',
        'Known to Prof Roger (renal)',
        '800 mL fluid restriction; still produces urine',
        'Valvular heart disease (Dr Kull)',
        'Type 2 diabetes mellitus',
        'Hypercholesterolaemia',
        'Hypertension',
        'Obstructive sleep apnoea',
        'Previous type 2 NSTEMI',
        'Visual aura without headache',
        'Hysteroscopy + D&C',
        'Chronic cough/runny nose – Dr Lee (resp); no emphysema',
    ],
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
    social: `Lives at home alone with cat.
Son near Byron Bay; granddaughter in Sydney visits often.
Independent with ADLs; mobilises with 4-wheel walker for distance.
HCP Level 2 (2 h/week cleaning & shopping) + community nursing (leg ulcer healed 19 / 6 / 25).
Ex-smoker (15 py; quit 30 y ago); occasional alcohol.`,
    functional:
        'Heaviness in chest on exertion (sometimes during dialysis); occasional fatigue/breathlessness; dizziness when bending over.',
    /* No quantitative echo metrics in the docx */
    tteData: {},
    angio: 'Awaiting formal report – ?normal CAD.',
    ecg: 'Sinus rhythm, normal PR interval and QRS.',
    ctIncidentals: 'Left coronary slightly low; right sinus-of-Valsalva just undersized.',
    bloods: { Hb: '115', Plts: '227', Creatinine: '717', eGFR: '4', Albumin: '37' },
    consultTexts: {
        cardiothoracic:
            'The CT chest showed an essentially porcelain aorta that would make surgery a prohibitive risk. Given her symptoms are well managed, medical therapy is preferred at present. If she becomes more symptomatic, we could consider very high-risk surgery or TAVI.',
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

            {/* TTE (PDFs only) */}
            <PatientSection title="TTE" pdfs={patient.pdfs.tte} />

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
                    <strong>Comment&nbsp;/ Incidentals:&nbsp;</strong>
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

            {/* Renal Physician Consult */}
            <PatientSection title="Renal Physician Consult" pdfs={patient.pdfs.renal} />
        </PatientLayout>
    );
}
