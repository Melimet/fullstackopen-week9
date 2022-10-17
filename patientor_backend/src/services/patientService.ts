import { data } from "../../data/patients";
import { PatientWithoutSsn, Patient, NewPatient, Entry } from "../types";
import { v1 as uuid } from 'uuid';
import { toNewEntry } from "../utils";

const getPatients = (): PatientWithoutSsn[] => {
  return data.map(({id, name, dateOfBirth, gender, occupation, entries}) => ({
    id, name, dateOfBirth, gender, occupation, entries,
  }));
};

const addPatient = (newPatient: NewPatient): Patient => {
  const newPatientEntry = {id: uuid(), ...newPatient};
  
  data.push(newPatientEntry)
  
  return newPatientEntry;
};

function getPatient(patientId: string):Patient | undefined {
  return data.find((patient) => patient.id === patientId)
}

function addEntryToPatient(entry: Entry, patientId: string): Entry | undefined{
  const newEntry = toNewEntry(entry)
  const patient = data.find((person) => person.id === patientId )
  if (!patient) return undefined

  patient.entries.push(newEntry)
  return entry
}

export { getPatients, addPatient, getPatient, addEntryToPatient };