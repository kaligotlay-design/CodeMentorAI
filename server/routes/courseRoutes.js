const express = require("express");
const router = express.Router();

const {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

// CREATE
router.post("/", createCourse);

// READ
router.get("/", getCourses);

// UPDATE
router.put("/:id", updateCourse);

// DELETE
router.delete("/:id", deleteCourse);

module.exports = router;