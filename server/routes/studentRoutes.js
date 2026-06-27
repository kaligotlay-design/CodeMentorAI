const express = require("express");
const router = express.Router();

const {
  createStudent,
  getStudents,
  deleteStudent,
} = require("../controllers/studentController");

// CREATE
router.post("/", createStudent);

// READ
router.get("/", getStudents);

// DELETE
router.delete("/:id", deleteStudent);

module.exports = router;