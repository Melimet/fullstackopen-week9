import patientData from "../../data/patients.json"
import { PatientWithoutSsn } from "../types"

const getPatients = (): PatientWithoutSsn[] => {
  return patientData.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id, name, dateOfBirth, gender, occupation,
  }))
}


export { getPatients }