import type { Patient } from './types';

const patient: Patient = {
  id: "edwards",
  name: "Frederick Edwards",
  dob: "1937-12-22",
  referring: "Dr Rao",
  consulting: "Dr Bhindi",
  status: "public",
  badges: [
    "MitraClip"
  ],
  pdfs: {
    tte: [
      "Edwards TTE.pdf"
    ],
    toe: [
      "Edwards TOE.pdf"
    ],
    angio: [
      "Edwards RHC and LHC.pdf"
    ],
    ecg: [
      "Edwards ECG.pdf"
    ],
    referral: [
      "Edwards Referral.pdf"
    ],
    cts: [
      "Edwards Dr Mathur letter.pdf"
    ]
  }
};

export default patient;
