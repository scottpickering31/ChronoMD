const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientData = new Schema({
  name: String,
  age: Number,
  date: Date,
});

module.exports = mongoose.model("Patient", patientData);
