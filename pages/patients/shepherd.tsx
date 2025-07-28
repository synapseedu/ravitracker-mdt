// pages/patients/shepherd.tsx
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
   Patient data – GRAHAM SHEPHERD
-------------------------------------------------------------------*/
const patient = {
  id: 'shepherd',
  name: 'GRAHAM SHEPHERD',
  dob: '1942-09-15',
  mrn: 'ME00466832',
  referralDate: '02/07/2025',
  structuralPhysician: 'Dr Hansen',
  referrer: 'Dr Tony Kull',
  contact: '4390 8664 / 04037 40003 (wife Julie)',
  weight: '86.2 kg',
  height: '166 cm',

  pdfs: {
    referral: ['SHEPHERD Graham - TAVI referral from Tony Kull.pdf'],
    tte: ['SHEPHERD_GRAHAM_TTE WUP _09072025_GS150942.pdf'],
    angio: ['Shepherd Angio Gosford 06.2025.pdf'],
    ecg: ['shepherd ecg.pdf'],
    ct: [
      'SHEPHERD Graham - 88.1623019.pdf',
      'GS 15.9.42.pdf', // Medtronic / device CT
    ],
    geriatrics: ['shepherd dr warrier.pdf'],
    cardiothoracic: ['shepherd Dr Brereton.pdf'],
    renal: ['Graham Shepherd - Renal plan 03.07.2025 08.58.40 - GR.pdf'],
    bloods: [],
  },

  /* history & medications -----------------------------------------*/
  background: [
    'Severe aortic stenosis',
    'Paroxysmal atrial fibrillation',
    'Second-degree heart block (bisoprolol related)',
    'CKD (Dr Simon Roger)',
    'Hypertension',
    'Arthritis',
    'Polyarticular gout',
  ],
  allergies: 'Morphine',
  medications: [
    'Allopurinol 100 mg ½ tab alt days',
    'Aspirin 100 mg od',
    'Atorvastatin 80 mg od',
    'Dapagliflozin 10 mg od',
    'Duodart 0.5/0.4 mg MR od',
    'Probiotic daily',
    'Spironolactone 50 mg od',
    'Irbesartan 300 mg od',
    'Thiamine 100 mg od',
  ],
  social:
    'Retired butcher; non-smoker; 4–6 beers daily × 56 yrs. Lives with wife; walks unaided (4-WW to be purchased).',
  functional: 'SOBOE, fatigue – NYHA II',

  /* investigations -----------------------------------------------*/
  tteData: {
    'LV EF': '60 %',
    AVA: '1.1 cm²',
    'Peak Gradient': '66 mmHg',
    'Mean Gradient': '35 mmHg',
    SVI: '56 ml',
    'Peak AV velocity': '4.06 m/s',
    MR: 'Mild–moderate',
    AR: 'Trivial',
    Comments:
      'Markedly restricted leaflets; peak velocity & AVAi in severe range. Trivial AR.',
  },
  angio: (
    <>
      Dominant RCA.<br />
      LM: minor disease. LAD: 60 % ostial / 90 % mid; severe diagonal disease.<br />
      LCx: 80 % distal. RCA: 80 % calcific ostial + moderate PDA disease.<br />
      <strong>Conclusion:</strong> severe calcific three-vessel CAD.
    </>
  ),
  ecg: 'Sinus rhythm, 1° AV block',
  ctIncidentals: (
    <>
      Gynaecomastia; small hiatus hernia; mesenteric fat stranding with 9 mm node; diverticular
      disease; mild bladder-wall thickening; apical/right-middle-lobe scarring.
    </>
  ),
  bloods: {
    MOCA: '23/30',
    Hb: '93',
    Plts: '220',
    Cre: '305',
    eGFR: '16',
    Albumin: '34',
    Haematocrit: '0.27',
    WBC: '5.7',
  },
  frailtyScore: '4',

  consultTexts: {
    geriatrics: 'Dr Warrier: patient appropriate for TAVI.',
    cts:
      'Dr Brereton: suitable for surgical “bail-out”; favours TAVI as primary strategy.',
    renal:
      'Dr Simon Roger: supports TAVI; cease spironolactone & irbesartan 5 days pre-procedure; dialysis acceptable if required.',
  },
};

/* ------------------------------------------------------------------*/
export default function ShepherdPage() {
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
            Weight: patient.weight,
            Height: patient.height,
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
          allergies={patient.allergies}
        />
      </PatientSection>

      {/* TTE */}
      <PatientSection title="TTE (9 Jul 2025)" pdfs={patient.pdfs.tte}>
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

      {/* CT TAVI / Access */}
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

      {/* Consults */}
      <PatientSection title="Geriatrician Review" pdfs={patient.pdfs.geriatrics}>
        <Text>{patient.consultTexts.geriatrics}</Text>
      </PatientSection>

      <PatientSection
        title="Cardiothoracic Surgery Consult"
        pdfs={patient.pdfs.cardiothoracic}
      >
        <Text>{patient.consultTexts.cts}</Text>
      </PatientSection>

      <PatientSection title="Renal Physician Input" pdfs={patient.pdfs.renal}>
        <Text>{patient.consultTexts.renal}</Text>
      </PatientSection>
    </PatientLayout>
  );
}
