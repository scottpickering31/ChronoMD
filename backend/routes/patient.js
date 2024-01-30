const express = require("express");
const {
  getPatients,
  getPatient,
  createPatient,
  deletePatient,
  updatePatient,
} = require("../controllers/workoutController");
const { get } = require("mongoose");

const router = express.Router();

// GET all workouts
router.get("/", getPatients);

// GET a single workout
router.get("/:id", getPatient);

// POST a new workout
router.post("/", createPatient);

// DELETE a workout
router.delete("/:id", deletePatient);

// UPDATE a workout
router.patch("/:id", updatePatient);

module.exports = router;
