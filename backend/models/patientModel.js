const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientData = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  dob: Date,
  gender: String,
  address: String,
  phone: Number,
  email: String,
  doctor: String,
});

const userData = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  email: String,
});

module.exports = mongoose.model("Patient", patientData);
