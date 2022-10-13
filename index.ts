import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";

const app = express();

app.get("/hello", (_req, res): void => {
  res.send("Hello world!!!!!");
});

app.get("/bmi", (req, res):void => {
    const height = req.query.height;
    const weight = req.query.weight;

    if (!weight || !height){
      res.status(400).send(JSON.stringify({"error": "malformed parameters"}));
    }

    const response = {height, weight, bmi: calculateBmi(Number(height), Number(weight))};
    res.send(JSON.stringify(response));
});

app.get("/exercise", (req, res):void => {
  
});


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});