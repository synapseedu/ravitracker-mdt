// pages/patients/telfer.tsx
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
   Patient data – JANET TELFER
-------------------------------------------------------------------*/
const patient = {
  id: 'telfer',
  name: 'JANET TELFER',
  dob: '1940-09-19',
  mrn: '0722105',
  referralDate: '—',
  structuralPhysician: 'Dr Hansen',
  referrer: 'Dr Vernon',
  contact: '0421 826 573',
  weight: '66 kg',
  height: '162 cm',
  pdfs: {
    referral: ['Telfer structural consult.pdf'],
    tte: ['Telfer RNSH TTE.pdf'],
    angio: ['Telfer angio.pdf'],
    ecg: ['Telfer ECG.pdf'],
    ct: ['Telfer CT TAVI.pdf', 'Telfer medtronic.pdf'], // ← added medtronic file
    agedCare: ['Telfer aged care.pdf'],
  },

  background: ['Severe aortic stenosis', 'Hypertension', 'Hypothyroidism'],
  medications: ['Lercanidipine 10 mg', 'Levothyroxine 50 µg'],
  social:
    'Lives at home with son, never smoked; 2–3 std EtOH some weeks, long periods abstinent; recently caravanned up north coast',
  functional:
    'Was walking 30 min on flat, now 15 min; admission with vertigo 18 Jul 2025; occasional lower-limb oedema; denies chest pain, PND, orthopnoea',
  tteData: {
    'LV EF': '61%',
    AVA: '0.7 cm²',
    AVAi: '0.4',
    'Peak Gradient': '113 mmHg',
    'Mean Gradient': '75 mmHg',
    'Peak AV velocity': '5.3 m/s',
    MR: 'Trivial',
    AR: 'Mild',
    Comments:
      'Heavily calcified (prob. trileaflet) AV; Doppler consistent with severe AS; at least mild AR',
  },
  angio: 'Mild coronary artery disease',
  ecg: 'Sinus rhythm',
  ctIncidentals: (
    <>
      11 mm segment-7 hypodense liver lesion (likely cyst).<br />
      Segment-8 sub-capsular lesion – probable scarring.<br />
      5 mm solid pulmonary nodule – low-risk lifelong non-smoker.
    </>
  ),
  bloods: { MOCA: '29/30', Hb: '134', Plts: '192', Cre: '52', eGFR: '84', Albumin: '35' },
  consults: { 'Aged Care': 'Dr Liu', 'Cardiothoracic Surgeon': 'Dr Brereton' },
};

/* ------------------------------------------------------------------ */
export default function TelferPage() {
  return (
    <PatientLayout title={patient.name}>
      {/* Demographics */}
      <PatientSection title="Demographics">
        <DemographicsGrid
          data={{
            DOB: patient.dob,
            Age: getAge(patient.dob),
            MRN: patient.mrn,
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

      {/* Bloods */}
      <PatientSection title="Bloods">
        <DemographicsGrid data={patient.bloods} />
      </PatientSection>

      {/* Consults */}
      <PatientSection title="Consults" pdfs={patient.pdfs.agedCare}>
        <DemographicsGrid data={patient.consults} />
      </PatientSection>
    </PatientLayout>
  );
}
