import type { Patient } from './types';

const patient: Patient = {
  id: "bromley",
  name: "Colin Bromley",
  dob: "1936-10-23",
  referring: "Dr Mooney / Dr Gunalingam",
  consulting: "Dr Hansen",
  status: "public",
  badges: [
    "TAVI"
  ],
  pdfs: {
    tte: [
      "Bromley TTE 16.1.25.pdf",
      "Bromley Wyong TTE 8.7.25.pdf"
    ],
    angio: [
      "Bromley angio.pdf"
    ],
    ecg: [
      "Bromley ECG.pdf"
    ],
    ct: [
      "Bromley medtronic.pdf"
    ]
  }
};

export default patient;
