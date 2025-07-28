// pages/patients/watson.tsx
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
   Patient-specific data
-------------------------------------------------------------------*/
const patient = {
  id: 'watson',
  name: 'BARRY WATSON',
  dob: '1952-12-09',
  weightKg: 125,
  heightCm: 170,
  mrn: '0106881',
  structuralPhysician: 'Dr Bhindi',
  referrer: 'Dr Rogers',
  contact: '0412 500 375',
  email: 'sueandbazz@gmail.com',
  pdfs: {
    tte: ['Watson TTE 26.3.25.pdf'],
    angio: ['Watson angio.pdf'],
    ecg: ['Watson ECG.pdf'],
    ct: ['Watson CT TAVI.pdf', 'Watson medtronic.pdf'],
    respiratory: ['Watson respiratory Dr.pdf'],
    cts: ['Watson Dr Bassin.pdf'],
    referral: ['Watson Dr Rogers referral.pdf'],   // referral letter
    bloods: ['Watson bloods.pdf'],
  },

  /* medical history, meds, summaries … */
  history: [
    'Severe obesity (125 kg, was 140 kg)',
    'CKD (creatinine 200)',
    'Permanent AF',
    'OSA on CPAP',
    'HTN',
    'Gout',
    'Back pain, lumbar disc disease',
    'Peripheral neuropathy',
    'Osteopaenia',
  ],
  medications: [
    'Apixaban 5 mg',
    'Dapagliflozin 10 mg',
    'Atorvastatin 10 mg',
    'Motilium PRN',
    'Telmisartan 40 mg',
    'Amlodipine 5 mg',
    'Vitamin D',
    'Pantoprazole 40 mg',
    'Xalacom eye drops',
    'Trelegy Ellipta',
    'Fish oil',
    'Panadol',
    'Furosemide 40 mg mane (new)',
  ],
  social:
    'Lives at home with wife and sons (wife has low vision). Quit smoking 34 years ago (15 pack-years). Drinks 1–2 mid-strength beers/day (reduced).',
  functional:
    'Uses walking stick due to back pain. Independent with pADLs, shares household tasks. Still drives. Worsening SOBOE—shops slowly, worse with hills/stairs. Occasional dizziness, no syncope, chest pain or oedema. Occasional poor CPAP tolerance. MOCA 28/30.',
  tteSummary: [
    'LV EF 40% — AVA 0.7 cm² (AVAi 0.3)',
    'Peak gradient 51 mmHg — AR Mild',
    'Mean gradient 37 mmHg — SVI 24.4 ml/m²',
    'Peak AV velocity 3.6 m/s — MR Mild',
    'Comments: Tricuspid aortic valve, thickened & calcified leaflets with markedly restricted motion; severe aortic stenosis. Reviewed by Dr Choong (clips 28, 29, 32 confirm severe AS).',
  ],
  angioSummary: 'Mild non-obstructive coronary artery disease',
  ecgSummary: 'Atrial fibrillation',
  ctIncidentals:
    'HRCT chest (11 Mar 2025): no evidence of parenchymal dysfunction',
  respiratorySummary:
    'Barry’s exertional symptoms relate to cardiac failure, obesity, aortic stenosis, and OSA. CPAP restarted (download pending). Mouth leak—chinstrap advised. Review 6 months with CPAP oximetry. No respiratory disease requiring treatment. Discussed intermittent fasting & keto.\n- Dr Alex Erdstein',
  ctsSummary: `Thank you for referring Barry for consideration of aortic valve intervention. He has severe symptomatic aortic valve stenosis with a mean gradient of 33 mmHg, AVA 1.0 cm², and LVEF 40%. He is highly comorbid (severe obesity, CKD, AF, OSA). Coronary angiography shows no significant obstructive disease.
I believe he is high-risk for open surgery and should undergo TAVI if feasible. I will forward his details to our structural heart team for evaluation.
- Levi Bassin`,
  bloods: { Hb: 162, Plts: 142, Cre: 205, eGFR: 27, Albumin: null },
};

/* ------------------------------------------------------------------ */
export default function WatsonPage() {
  return (
    <PatientLayout title={patient.name}>
      {/* Demographics */}
      <PatientSection title="Demographics">
        <DemographicsGrid
          data={{
            DOB: patient.dob,
            Age: getAge(patient.dob),
            MRN: patient.mrn,
            Structural: patient.structuralPhysician,      // ← no icon here
            Referrer: (
              <>
                {patient.referrer}&nbsp;
                <PdfIcons files={patient.pdfs.referral} />  {/* icon here */}
              </>
            ),
            Contact: patient.contact,
            Email: patient.email,
            Weight: `${patient.weightKg} kg`,
            Height: `${patient.heightCm} cm`,
          }}
        />
      </PatientSection>

      {/* Background */}
      <PatientSection title="Background">
        <StatusCard
          history={patient.history}
          medications={patient.medications}
          social={patient.social}
          functional={patient.functional}
        />
      </PatientSection>

      {/* Investigations */}
      <PatientSection title="TTE" pdfs={patient.pdfs.tte}>
        {patient.tteSummary.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </PatientSection>

      <PatientSection title="Angio" pdfs={patient.pdfs.angio}>
        <Text>{patient.angioSummary}</Text>
      </PatientSection>

      <PatientSection title="ECG" pdfs={patient.pdfs.ecg}>
        <Text>{patient.ecgSummary}</Text>
      </PatientSection>

      <PatientSection title="CT TAVI / Access / Valve" pdfs={patient.pdfs.ct}>
        <Text type="secondary">Incidentals:</Text>&nbsp;{patient.ctIncidentals}
      </PatientSection>

      {/* Consults */}
      <PatientSection title="Respiratory Consult" pdfs={patient.pdfs.respiratory}>
        <Text>{patient.respiratorySummary}</Text>
      </PatientSection>

      <PatientSection title="Cardiothoracic Surgery Consult" pdfs={patient.pdfs.cts}>
        <Text>{patient.ctsSummary}</Text>
      </PatientSection>

      {/* Bloods */}
      <PatientSection title="Bloods" pdfs={patient.pdfs.bloods}>
        <DemographicsGrid
          data={{
            Hb: patient.bloods.Hb,
            Plts: patient.bloods.Plts,
            Cre: patient.bloods.Cre,
            eGFR: patient.bloods.eGFR,
          }}
        />
      </PatientSection>
    </PatientLayout>
  );
}
