const express = require("express");
const {
  getPatients,
  getPatient,
  createPatient,
  deletePatient,
  updatePatient,
} = require("../controllers/patientController");

const router = express.Router();

// GET all patients
router.get("/", getPatients);

// GET a single patient
router.get("/:id", getPatient);

// POST a new patient
router.post("/", createPatient);

// DELETE a patient
router.delete("/:id", deletePatient);

// UPDATE a patient
router.patch("/:id", updatePatient);

module.exports = router;
