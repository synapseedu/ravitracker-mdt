import type { Patient } from './types';
export type { Patient } from './types';
import ross from './ross';
import mcmullen from './mcmullen';
import smithm from './smithm';
import bromley from './bromley';
import edwards from './edwards';
import clarkNelson from './clark-nelson';
import mcguire from './mcguire';
import nas from './nas';
import newlands from './newlands';
import shepherd from './shepherd';
import russ from './russ';
import vandevelde from './vandevelde';
import gaffney from './gaffney';
import mooney from './mooney';
import sorentino from './sorentino';
import austin from './austin';
import moelle from './moelle';
import low from './low';
import dunbar from './dunbar';

export const allPatients: Patient[] = [
  ross,
  mcmullen,
  smithm,
  bromley,
  edwards,
  clarkNelson,
  mcguire,
  nas,
  newlands,
  shepherd,
  russ,
  vandevelde,
  gaffney,
  mooney,
  sorentino,
  austin,
  moelle,
  low,
  dunbar,
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
