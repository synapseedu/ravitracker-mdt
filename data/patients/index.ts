import type { Patient } from './types'
export type { Patient } from './types'

import newbould from './newbould'
import stevenson from './stevenson'
import bogle from './bogle'
import smithm from './smithm'
import shepherd from './shepherd'
import gaffney from './gaffney'
import washington from './washington'
import wadey from './wadey'
import thorpe from './thorpe'

export const allPatients: Patient[] = [
  newbould,
  stevenson,
  bogle,
  smithm,
  shepherd,
  gaffney,
  washington,
  thorpe
];

export const patientMap: Record<string, Patient> = allPatients.reduce(
  (acc, patient) => {
    acc[patient.id] = patient;
    return acc;
  },
  {} as Record<string, Patient>
);

export function getAge(dob: string): number {
  const birth = new Date(dob);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
  return age;
}
