const Student = require("../models/student");

// Create students
const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);

        return res.status(201).json({
            success: true,
            message: 'Student created successfully',
            data: student,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

// get all student
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();

        return res.status(200).json({
            success: true,
            count: students.length,
            data: students,
        });

    } catch (error) {
         return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
    }
};

// single student only
const getSingleStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: student,
    });

  } catch (error) {
     return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
        });
  }
};

// update Student
const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true,});

    return res.status(200).json({
      success: true,
      data: student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
};

// delete Student
const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id );

    return res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
};


module.exports = {createStudent, getAllStudents, getSingleStudent, updateStudent, deleteStudent}