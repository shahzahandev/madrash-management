const express = require("express");
const router = express.Router();

const {createStudent, getAllStudents, getSingleStudent, updateStudent, deleteStudent,
} = require("../controllers/studentController");

router.post("/createStudent", createStudent);

router.get("/allStudent", getAllStudents);

router.get("/:id", getSingleStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

module.exports = router;