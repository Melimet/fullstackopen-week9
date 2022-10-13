import express from "express";
import { getPatients, addPatient } from "../services/patientService";
import { toNewPatientEntry } from "../utils";

const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
  res.send(getPatients());
});

patientRouter.post('/', (req, res) => {
  try{
    const newPatient = toNewPatientEntry(req.body);
    const addedNewPatient = addPatient(newPatient)
    res.json(addedNewPatient)

  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export { patientRouter };