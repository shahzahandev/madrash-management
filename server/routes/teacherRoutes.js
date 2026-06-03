const express = require("express");

const router = express.Router();

const { createTeacher, getTeachers, updateTeacher, deleteTeacher,} = require("../controllers/teacherControllerr"
);

router.post("/createTeacher", createTeacher);

router.get("/allTeacher", getTeachers);

router.put("/:id", updateTeacher);

router.delete("/:id", deleteTeacher);

module.exports = router;