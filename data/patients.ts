// data/patients.ts
export interface Patient {
  id: string;
  name: string;
  dob: string;
  referring: string;
  consulting: string;
  /** public = MDT list; private = NSP list */
  status?: 'public' | 'private';
  /* optional extras */
  weightKg?: number;
  heightCm?: number;
  pdfs?: Record<string, string[]>;
  /** optional badges to show special flags (e.g. MitraClip) */
  badges?: string[];
}

export const allPatients: Patient[] = [
  /* ─────────── Public patients (MDT list) ─────────── */
  {
    id: 'ross',
    name: 'Wendy Ross',
    dob: '1942-06-11',
    referring: 'Dr Wang',
    consulting: 'Dr Hansen',
    status: 'public',
  },
  {
    id: 'mcmullen',
    name: 'John McMullen',
    dob: '1938-04-05',
    referring: 'Dr Armit Michael',
    consulting: 'Dr Bhindi',
    status: 'public',
  },
  {
    id: 'smithm',
    name: 'Marilyn Smith',
    dob: '1948-05-13',
    referring: 'Dr Tony Kull',
    consulting: 'Dr Hansen',
    status: 'public',
  },
  {
    id: 'bromley',
    name: 'Colin Bromley',
    dob: '1936-10-23',
    referring: 'Dr Mooney / Dr Gunalingam',
    consulting: 'Dr Hansen',
    status: 'public',
    pdfs: {
      tte: ['Bromley TTE 16.1.25.pdf', 'Bromley Wyong TTE 8.7.25.pdf'],
      angio: ['Bromley angio.pdf'],
      ecg: ['Bromley ECG.pdf'],
      ct: ['Bromley medtronic.pdf'],
    },
  },
  {
    id: 'edwards',
    name: 'Frederick Edwards',
    dob: '1937-12-22',
    referring: 'Dr Rao',
    consulting: 'Dr Bhindi',
    status: 'public',
    pdfs: {
      tte: ['Edwards TTE.pdf'],
      toe: ['Edwards TOE.pdf'],
      angio: ['Edwards RHC and LHC.pdf'],
      ecg: ['Edwards ECG.pdf'],
      referral: ['Edwards Referral.pdf'],
      cts: ['Edwards Dr Mathur letter.pdf'],
    },
  },
  {
    id: 'clark-nelson',
    name: 'Nelson Clark',
    dob: '1947-02-22',
    referring: 'Dr Brereton / Dr Williams',
    consulting: 'Dr Hansen',
    status: 'public',
  },

  /* ─────────── Private patients (NSP list) ─────────── */
  { id: 'mcguire', name: 'Stephen McGuire', dob: '1953-07-22', referring: 'Dr Gemma Figtree', consulting: 'Dr Bhindi', status: 'private' },
  { id: 'nas', name: 'Arnold Nas', dob: '1947-07-30', referring: 'Dr Clyne Fernandes', consulting: 'Dr Bhindi', status: 'private' },
  { id: 'newlands', name: 'Patricia Newlands', dob: '1940-11-08', referring: 'Dr Chrishan Nalliah', consulting: 'Dr Bhindi', status: 'private' },
  { id: 'shepherd', name: 'Graham Shepherd', dob: '1942-09-15', referring: 'Dr Tony Kull', consulting: 'Dr Hansen', status: 'private' },
  { id: 'russ', name: 'Gary Russ', dob: '1946-07-10', referring: 'Dr Helestrand', consulting: 'Dr Bhindi', status: 'private' },
  { id: 'vandevelde', name: 'Janice Van de Velde', dob: '1936-06-01', referring: 'Dr Choong', consulting: 'Dr Bhindi', status: 'private' },
  { id: 'gaffney', name: 'Marian Gaffney', dob: '1943-07-18', referring: 'Dr Usaid Allahwala', consulting: '', status: 'private' },
  { id: 'mooney', name: 'Grahame Mooney', dob: '1942-12-31', referring: 'Dr James Rogers', consulting: 'Dr Bhindi', status: 'private' },
  { id: 'sorentino', name: 'Carlos Sorentino', dob: '1945-09-26', referring: 'Dr Kozor', consulting: 'Dr Hansen', status: 'private' },
  { id: 'austin', name: 'Gaetane Austin', dob: '1941-11-18', referring: 'TBC', consulting: 'Dr Hansen', status: 'private' },
  {
    id: 'moelle',
    name: 'Eleonora (Nora) Moelle',
    dob: '1933-02-21',
    referring: 'Prof Andrew Boyle',
    consulting: 'Dr Bhindi',
    status: 'private',
    badges: ['MitraClip'],
    pdfs: {
      referral: ['MOELLE ELEONORA referral.pdf', 'Moelle Eleonora Prof Boyle 2024.pdf'],
      tte: ['Moelle echo.pdf', 'MOELLE TOE Report.pdf'],
      angio: ['Moelle ANgio.pdf'],
      ecg: ['Moelle ecg.pdf'],
      agedCare: ['Moelle aged care pt 1.pdf', 'Moelle Aged care pt2.pdf'],
    },
  },
];

export function getAge(dob: string): number {
  const birth = new Date(dob);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
  return age;
}
