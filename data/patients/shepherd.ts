import type { Patient } from './types';

const patient: Patient = {
  id: "shepherd",
  name: "Graham Shepherd",
  dob: "1942-09-15",
  referring: "Dr Tony Kull",
  consulting: "Dr Hansen",
  status: "private",
  badges: [
    "TAVI"
  ]
};

export default patient;
