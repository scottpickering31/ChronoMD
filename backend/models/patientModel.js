const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientData = new Schema({
  name: String,
  age: Number,
  date: Number,
});

module.exports = mongoose.model("Patient", patientData);
