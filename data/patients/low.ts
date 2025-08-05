import type { Patient } from './types';

const patient: Patient = {
  id: "low",
  name: "Donald Low",
  dob: "1944-11-26",
  referring: "Dr Shubhada Kharwadkar",
  consulting: "Dr Hansen",
  status: "private",
  badges: [
    "MitraClip"
  ],
  weightKg: 78,
  heightCm: 170,
  pdfs: {
    referral: [
      "Low Dr Brereton 26111944.pdf"
    ],
    tte: [
      "Low Royal Northshore Hospital TOE review for MitraClip.pdf",
      "Low_Donald_TOE report.pdf"
    ],
    angio: [
      "Low Angio.pdf"
    ],
    ecg: [
      "Low ECG.pdf"
    ],
    crt: [
      "Low Don CRT report.pdf"
    ],
    ph: [
      "Low PH 13.6.25.pdf"
    ],
    renal: [
      "Low renal and aged care.pdf"
    ]
  }
};

export default patient;
