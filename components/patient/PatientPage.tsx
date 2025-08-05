import { Typography } from 'antd';
import PatientLayout from './PatientLayout';
import DemographicsGrid from './DemographicsGrid';
import StatusCard from './StatusCard';
import PatientSection from './PatientSection';
import PdfIcons from './PdfIcons';
import { getAge } from '../../data/patients';
import { PatientRecord } from '../../data/patientRecords';
import React from 'react';

const { Text } = Typography;

export default function PatientPage({ patient }: { patient: PatientRecord }) {
  const demographics: Record<string, React.ReactNode> = {
    DOB: patient.dob,
    Age: getAge(patient.dob),
    MRN: patient.mrn,
    ...(patient.referralDate && { 'Referral Date': patient.referralDate }),
    Structural: patient.structuralPhysician,
    Referrer: (
      <>
        {patient.referrer}&nbsp;
        <PdfIcons files={patient.pdfs?.referral} />
      </>
    ),
    Contact: patient.contact,
  };
  if (patient.email) demographics.Email = patient.email;
  if (patient.weight || patient.weightKg)
    demographics.Weight = patient.weight ?? `${patient.weightKg} kg`;
  if (patient.height || patient.heightCm)
    demographics.Height = patient.height ?? `${patient.heightCm} cm`;

  return (
    <PatientLayout title={patient.name}>
      <PatientSection title="Demographics">
        <DemographicsGrid data={demographics} />
      </PatientSection>

      {(patient.history || patient.background) && (
        <PatientSection title="Background">
          <StatusCard
            history={patient.history ?? patient.background}
            medications={patient.medications}
            social={patient.social}
            functional={patient.functional}
          />
        </PatientSection>
      )}

      {(patient.tteSummary || patient.tteData) && (
        <PatientSection title="TTE" pdfs={patient.pdfs?.tte}>
          {patient.tteSummary &&
            patient.tteSummary.map((line: string) => <div key={line}>{line}</div>)}
          {!patient.tteSummary && patient.tteData && (
            <DemographicsGrid data={patient.tteData} />
          )}
        </PatientSection>
      )}

      {(patient.toeSummary || patient.toeData) && (
        <PatientSection title="TOE" pdfs={patient.pdfs?.toe}>
          {patient.toeSummary &&
            patient.toeSummary.map((line: string) => (
              <Text key={line} display="block">
                {line}
              </Text>
            ))}
          {patient.toeData && <DemographicsGrid data={patient.toeData} />}
        </PatientSection>
      )}

      {(patient.rhc || patient.angioSummary || patient.angio) && (
        <PatientSection title="RHC / Angio" pdfs={patient.pdfs?.angio}>
          {patient.rhc && (
            <>
              <Text strong>RHC:&nbsp;</Text>
              {patient.rhc}
              <br />
            </>
          )}
          {patient.angioSummary && <Text>{patient.angioSummary}</Text>}
          {patient.angio && <Text>{patient.angio}</Text>}
        </PatientSection>
      )}

      {(patient.ecgSummary || patient.ecg) && (
        <PatientSection title="ECG" pdfs={patient.pdfs?.ecg}>
          <Text>{patient.ecgSummary ?? patient.ecg}</Text>
        </PatientSection>
      )}

      {(patient.ctIncidentals || patient.pdfs?.ct) && (
        <PatientSection title="CT TAVI / Access / Valve" pdfs={patient.pdfs?.ct}>
          {patient.ctIncidentals && (
            <>
              <Text type="secondary">Incidentals:</Text>&nbsp;{patient.ctIncidentals}
            </>
          )}
        </PatientSection>
      )}

      {patient.respiratorySummary && (
        <PatientSection title="Respiratory Consult" pdfs={patient.pdfs?.respiratory}>
          <Text>{patient.respiratorySummary}</Text>
        </PatientSection>
      )}

      {patient.ctsSummary && (
        <PatientSection title="Cardiothoracic Surgery Consult" pdfs={patient.pdfs?.cts}>
          <Text>{patient.ctsSummary}</Text>
        </PatientSection>
      )}

      {patient.bloods && (
        <PatientSection title="Bloods" pdfs={patient.pdfs?.bloods}>
          <DemographicsGrid data={patient.bloods} />
        </PatientSection>
      )}

      {patient.agedCare && (
        <PatientSection title="Aged Care Assessment" pdfs={patient.pdfs?.agedCare}>
          <Text>{patient.agedCare}</Text>
        </PatientSection>
      )}

      {patient.agedCareNote && (
        <PatientSection title="Aged Care Note" pdfs={patient.pdfs?.agedCareNote}>
          <Text>{patient.agedCareNote}</Text>
        </PatientSection>
      )}
    </PatientLayout>
  );
}
