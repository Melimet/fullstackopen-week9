enum Gender { 
  Male = "male",
  Female =  "female",
  Other = "other"
}

enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

interface Diagnose {
  code: string
  name: string
  latin?: string
}

interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare"
  employerName: string
  sickLeave?: {
    startDate: string
    endDate: string
  }
}

interface HospitalEntry extends BaseEntry {
  type: 'Hospital'
  discharge?: {
    date: string
    criteria: string
  }
}

type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;


interface Patient {
  id: string
  name: string
  dateOfBirth: string
  ssn: string
  gender: Gender
  occupation: string
  entries: Entry[]
}

interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnose['code']>;
}

type PatientWithoutSsn = Omit<Patient, 'ssn'>;
type NewPatient = Omit<Patient, 'id' >;

export { Diagnose, Patient, PatientWithoutSsn, NewPatient, Gender, Entry, HealthCheckRating, BaseEntry};


