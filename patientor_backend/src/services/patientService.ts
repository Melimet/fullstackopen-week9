import { data } from "../../data/patients";
import { PatientWithoutSsn, Patient, NewPatient } from "../types";
import { v1 as uuid } from 'uuid';

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

export { getPatients, addPatient, getPatient };