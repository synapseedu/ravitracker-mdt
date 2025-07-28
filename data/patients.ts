// data/patients.ts
export interface Patient {
  id: string
  name: string
  dob: string
  referring: string
  consulting: string
  /** public = MDT list; private = NSP list */
  status?: 'public' | 'private'

  /** optional additional data used by Ant‑D patient pages */
  weightKg?: number
  heightCm?: number
  pdfs?: Record<string, string[]>
}

export const allPatients: Patient[] = [
  // ─────────────────────── Public patients ───────────────────────
  {
    id: 'watson',
    name: 'Barry Watson',
    dob: '1952-12-09',
    referring: 'Dr Rogers',
    consulting: 'Dr Bhindi',
    status: 'public',

    // new structured fields
    weightKg: 125,
    heightCm: 170,
    pdfs: {
      tte: ['Watson TTE 26.3.25.pdf'],
      angio: ['Watson angio.pdf'],
      ecg: ['Watson ECG.pdf'],
      ct: ['Watson CT TAVI.pdf', 'Watson medtronic.pdf'],
      respiratory: ['Watson respiratory Dr.pdf'],
      bloods: ['Watson bloods.pdf'],
      referral: ['Watson Dr Bassin.pdf', 'Watson Dr Rogers referral.pdf'],
    },
  },
  { id: 'lingard', name: 'Maggie Lingard', dob: '1958-09-24', referring: 'Dr Wong', consulting: 'Dr Bhindi', status: 'public' },
  { id: 'ross', name: 'Wendy Ross', dob: '1942-06-11', referring: 'Dr Wang', consulting: 'Dr Hansen', status: 'public' },
  { id: 'mcmullen', name: 'John McMullen', dob: '1938-04-05', referring: 'Dr Armit Michael', consulting: 'Dr Bhindi', status: 'public' },
  { id: 'smithm', name: 'Marilyn Smith', dob: '1948-05-13', referring: 'Dr Tony Kull', consulting: 'Dr Hansen', status: 'public' },
  { id: 'tefler', name: 'Janet Tefler', dob: '1940-09-19', referring: '', consulting: '', status: 'public' },

  // ─────────────────────── Private patients ───────────────────────
  { id: 'mcguire', name: 'Stephen McGuire', dob: '1953-07-22', referring: 'Dr Gemma Figtree', consulting: 'Dr Bhindi', status: 'private' },
  { id: 'nas', name: 'Arnold Nas', dob: '1947-07-30', referring: 'Dr Clyne Fernandes', consulting: 'Dr Bhindi', status: 'private' },
  { id: 'newlands', name: 'Patricia Newlands', dob: '1940-11-08', referring: 'Dr Chrishan Nalliah', consulting: 'Dr Bhindi', status: 'private' },
  { id: 'shepherd', name: 'Graham Shepherd', dob: '1942-09-15', referring: 'Dr Tony Kull', consulting: 'Dr Hansen', status: 'private' },
  { id: 'russ', name: 'Gary Russ', dob: '1946-07-10', referring: 'Dr Helestrand', consulting: 'Dr Bhindi', status: 'private' },
  { id: 'vandevelde', name: 'Janice Van de Velde', dob: '1936-06-01', referring: 'Dr Choong', consulting: 'Dr Bhindi', status: 'private' },
  { id: 'gaffney', name: 'Marian Gaffney', dob: '1943-07-18', referring: 'Dr Usaid Allahwala', consulting: '', status: 'private' },
  { id: 'mooney', name: 'Grahame Mooney', dob: '1942-12-31', referring: 'Dr James Rogers', consulting: 'Dr Bhindi', status: 'private' },
  // add more private patients below
];

export function getAge(dob: string): number {
  const birth = new Date(dob);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const m = now.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
  return age;
}
