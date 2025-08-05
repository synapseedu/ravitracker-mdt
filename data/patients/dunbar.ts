import type { Patient } from './types';

const patient: Patient = {
  id: "dunbar",
  name: "Thomas Dunbar",
  dob: "1938-01-23",
  referring: "Dr Natasha Huon",
  consulting: "Dr Hansen",
  status: "private",
  badges: [
    "TAVI"
  ],
  weightKg: 66,
  heightCm: 169,
  pdfs: {
    tte: [
      "DUNBAR_THOMAS_TTE_24.07.2025_TD230138.pdf"
    ],
    angio: [
      "Dunbar Angio.pdf"
    ],
    ecg: [
      "Dunbar ecg.pdf"
    ],
    ct: [
      "DUNBAR Thomas - CT_TAVI.pdf",
      "Dunbar medtronic.pdf"
    ],
    bloods: [
      "Dunbar bloods.pdf"
    ],
    agedCare: [
      "Dunbar Aged Care.pdf"
    ]
  }
};

export default patient;
