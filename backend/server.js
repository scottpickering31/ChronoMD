require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");

// middleware

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes

app.use("/dashboard", patientData);

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
