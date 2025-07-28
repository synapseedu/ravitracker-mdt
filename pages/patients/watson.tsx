'use client';
import { Typography } from 'antd';
import PatientLayout from '../../components/patient/PatientLayout';
import DemographicsGrid from '../../components/patient/DemographicsGrid';
import StatusCard from '../../components/patient/StatusCard';
import PatientSection from '../../components/patient/PatientSection';

import { allPatients, getAge } from '../../data/patients';
const { Title, Text } = Typography;

const doc = allPatients.find(p => p.id === 'watson')!;        // quick lookup

export default function WatsonPage() {
  return (
    <PatientLayout title={<Title level={3}>{doc.name}</Title>}>
      <DemographicsGrid data={{
        DOB: doc.dob,
        Age: getAge(doc.dob),
        MRN: '0106881',
        'Structural Physician': 'Dr Bhindi',
        Referrer: 'Dr Rogers',
        Contact: '0412 500 375',
        Email: 'sueandbazz@gmail.com',
        Weight: `${doc.weightKg} kg`,
        Height: `${doc.heightCm} cm`
      }} />

      <PatientSection title="Background">
        <StatusCard
          history={[
            'Severe obesity (125 kg, was 140 kg)',
            'CKD (creatinine 200)',
            'Permanent AF'
          ]}
          medications={['Apixaban 5 mg', 'Dapagliflozin 10 mg']}
          social="Lives at home with wife and sons…"
          functional="Uses walking stick… still drives…"
        />
      </PatientSection>

      <PatientSection title="TTE" pdfs={doc.pdfs.tte} />
      <PatientSection title="Angio" pdfs={doc.pdfs.angio}>
        <Text type="secondary">Mild non-obstructive CAD</Text>
      </PatientSection>
      <PatientSection title="ECG" pdfs={doc.pdfs.ecg}>
        <Text type="secondary">AF</Text>
      </PatientSection>
      <PatientSection title="CT TAVI / Access / Valve" pdfs={doc.pdfs.ct} />
      <PatientSection title="Respiratory" pdfs={doc.pdfs.respiratory} />
      <PatientSection title="Bloods" pdfs={doc.pdfs.bloods} />
      <PatientSection title="Other Consults" pdfs={doc.pdfs.referral} />
    </PatientLayout>
  );
}
