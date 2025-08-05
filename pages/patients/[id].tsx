"use client";

import { useRouter } from 'next/router';
import PatientPage from '../../components/patient/PatientPage';
import { patientRecords } from '../../data/patientRecords';

export default function PatientByIdPage() {
  const router = useRouter();
  const { id } = router.query;
  if (!id || Array.isArray(id)) return null;
  const patient = (patientRecords as any)[id];
  if (!patient) return <div>Patient not found</div>;
  return <PatientPage patient={patient} />;
}
