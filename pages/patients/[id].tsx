"use client";

import { useRouter } from 'next/router';
import PatientPage from '../../components/patient/PatientPage';
import { patientMap } from '../../data/patients';

export default function PatientByIdPage() {
  const router = useRouter();
  const { id } = router.query;
  if (!id || Array.isArray(id)) return null;
  const base = patientMap[id];
  if (!base) return <div>Patient not found</div>;
  const { referring, consulting, ...rest } = base;
  const patient = {
    ...rest,
    structuralPhysician: consulting,
    referrer: referring,
  };
  return <PatientPage patient={patient} />;
}
