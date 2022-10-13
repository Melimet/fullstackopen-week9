import { Gender, NewPatient } from './types';


function isString(text: unknown): text is string{
  return typeof text === 'string' || text instanceof String;
}

function parseText(text: unknown): string{
  if(!text || !isString(text)){
    throw new Error('Incorrect or missing text')
  }
  return text
}

function isGender(param: any): param is Gender{
  return Object.values(Gender).includes(param)
}

function parseGender(gender: unknown): Gender{
  if (!gender || !isGender(gender)) {
    throw new Error(`Incorrect or missing gender ${gender}`)
  }
  return gender
}

type PatientFields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown }
function toNewPatientEntry({ name, dateOfBirth, ssn, gender, occupation } : PatientFields): NewPatient{
  const newPatient: NewPatient = {
    name: parseText(name),
    dateOfBirth: parseText(dateOfBirth),
    ssn: parseText(ssn),
    gender: parseGender(gender),
    occupation: parseText(occupation)
    }

  return newPatient
}

export { toNewPatientEntry};