enum Gender { 
  Male = "male",
  Female =  "female",
  Other = "other"
}

interface Diagnose {
  code: string
  name: string
  latin?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Entry{

}

interface Patient {
  id: string
  name: string
  dateOfBirth: string
  ssn: string
  gender: Gender
  occupation: string
  entries: Entry[]
}

type PatientWithoutSsn = Omit<Patient, 'ssn' | 'entries'>;
type NewPatient = Omit<Patient, 'id' >;

export { Diagnose, Patient, PatientWithoutSsn, NewPatient, Gender, Entry};


