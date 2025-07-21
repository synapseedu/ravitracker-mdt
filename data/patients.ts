// data/patients.ts
export interface Patient {
  id: string
  name: string
  dob: string    // YYYY-MM-DD
  referring: string
  consulting: string
}

export const allPatients: Patient[] = [
  { id: 'riggs',    name: 'Kevin Riggs',   dob: '1945-07-14', referring: 'Dr Hill',           consulting: 'Dr Hansen' },
  { id: 'smith',    name: 'Peter Smith',   dob: '1951-01-07', referring: 'Dr Kull',           consulting: 'Dr Hansen' },
  { id: 'english',  name: 'Brian English', dob: '1940-12-16', referring: 'Dr Bhatia',         consulting: 'Dr Bhindi' },
  { id: 'pavlidis', name: 'Angelo Pavlidis', dob: '1951-01-23', referring: 'Dr Yeoh / Dr Ekmijian', consulting: 'Dr Bhindi' },
  { id: 'green',    name: 'Ian Green',     dob: '1946-10-27', referring: 'Dr Vernon',         consulting: 'Dr Hansen' },
  { id: 'grasso',   name: 'Angela Grasso', dob: '1938-12-19', referring: 'Dr Bassin / Dr Rogers', consulting: 'Dr Bhindi' },
  { id: 'rosee',    name: 'Paul Rosee',    dob: '1943-09-03', referring: 'Dr Rogers / Dr Bassin', consulting: 'Dr Hansen' },
  { id: 'watson',   name: 'Barry Watson',  dob: '1952-12-09', referring: 'Dr Rogers',         consulting: 'Dr Bhindi' },
  { id: 'kniepp',   name: 'John Kniepp',   dob: '1950-12-07', referring: 'Dr Chung (Renal)',  consulting: 'Dr Hansen' },
]

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