import { patientData } from "../../data/patients";
import { PatientWithoutSsn, Patient, NewPatient } from "../types";
import { v1 as uuid } from 'uuid';

const getPatients = (): PatientWithoutSsn[] => {
  return patientData.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id, name, dateOfBirth, gender, occupation,
  }));
};

const addPatient = (newPatient: NewPatient): Patient => {
  const newPatientEntry = {id: uuid(), ...newPatient};
  
  patientData.push(newPatientEntry)
  
  return newPatientEntry;
};

export { getPatients, addPatient };