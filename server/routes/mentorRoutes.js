const express = require("express");
const router = express.Router();

const {
  createMentor,
  getMentors,
  updateMentor,
  deleteMentor,
} = require("../controllers/mentorController");

// CREATE
router.post("/", createMentor);

// READ
router.get("/", getMentors);

// UPDATE
router.put("/:id", updateMentor);

// DELETE
router.delete("/:id", deleteMentor);

module.exports = router;