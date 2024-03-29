require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const patientData = require("./routes/patient.js");

// middleware

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes

app.use("/api/v1/patients", patientData);

// connect to db

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to db");

    // listen for requests

    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
