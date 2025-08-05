import type { Patient } from './types';

const patient: Patient = {
  id: "moelle",
  name: "Eleonora (Nora) Moelle",
  dob: "1933-02-21",
  referring: "Prof Andrew Boyle",
  consulting: "Dr Bhindi",
  status: "private",
  badges: [
    "MitraClip"
  ],
  weightKg: 75,
  heightCm: 154,
  pdfs: {
    referral: [
      "MOELLE ELEONORA referral.pdf",
      "Moelle Eleonora Prof Boyle 2024.pdf"
    ],
    tte: [
      "Moelle echo.pdf",
      "MOELLE TOE Report.pdf"
    ],
    angio: [
      "Moelle ANgio.pdf"
    ],
    ecg: [
      "Moelle ecg.pdf"
    ],
    agedCare: [
      "Moelle aged care pt 1.pdf",
      "Moelle Aged care pt2.pdf"
    ]
  }
};

export default patient;
