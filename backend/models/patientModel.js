const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const patientDataSchema = new Schema({
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

const userDataSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  email: String,
});

// Create models from the schemas
const Patient = mongoose.model("Patient", patientDataSchema);
const User = mongoose.model("User", userDataSchema);

// Export the models
module.exports = {
  Patient,
  User,
};
