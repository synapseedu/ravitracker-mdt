// data/patients.ts
export interface Patient {
  id: string
  name: string
  dob: string
  referring: string
  consulting: string
  status?: 'public' | 'private'
}

export const allPatients: Patient[] = [
  { id: 'riggs', name: 'Kevin Riggs', dob: '1945-07-14', referring: 'Dr Hill', consulting: 'Dr Hansen', status: 'public' },
  { id: 'green', name: 'Ian Green', dob: '1946-10-27', referring: 'Dr Vernon', consulting: 'Dr Hansen', status: 'public' },
  { id: 'grasso', name: 'Angela Grasso', dob: '1938-12-19', referring: 'Dr Bassin / Dr Rogers', consulting: 'Dr Bhindi', status: 'public' },
  { id: 'rosee', name: 'Paul Rosee', dob: '1943-09-03', referring: 'Dr Rogers / Dr Bassin', consulting: 'Dr Hansen', status: 'public' },
  { id: 'watson', name: 'Barry Watson', dob: '1952-12-09', referring: 'Dr Rogers', consulting: 'Dr Bhindi', status: 'public' },
  { id: 'lingard', name: 'Maggie Lingard', dob: '1958-09-24', referring: 'Dr Wong', consulting: 'Dr Bhindi', status: 'public' },
  { id: 'clark', name: 'Sandra Clark', dob: '1948-10-29', referring: 'Dr F. Touma', consulting: 'Dr Bhindi', status: 'public' },
  { id: 'ross', name: 'Wendy Ross', dob: '1942-06-11', referring: 'Dr Wang', consulting: 'Dr Hansen', status: 'public' },
  { id: 'mcmullen', name: 'John McMullen', dob: '1938-04-05', referring: 'Dr Armit Michael', consulting: 'Dr Bhindi', status: 'public' },
  { id: 'smithm', name: 'Marilyn Smith', dob: '1948-05-13', referring: 'Dr Tony Kull', consulting: 'Dr Hansen', status: 'public' },
  // Add private patients below with status: 'private'
  // { id: 'private1', name: '...', dob: '...', referring: '...', consulting: '...', status: 'private' },
];

export function getAge(dob: string): number {
  const birth = new Date(dob)
  const now = new Date()
  let age = now.getFullYear() - birth.getFullYear()
  const m = now.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
    age--
  }
  return age
}

