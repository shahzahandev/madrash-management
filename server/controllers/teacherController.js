const Teacher = require('../models/teacher')

// Create teacher
const createTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);

    return res.status(201).json({
      success: true,
      message: 'Teacher created successfully',
      data: teacher,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server erro',
      error: error.message,
    });
  }
};

// Get all teacher
const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();

    return res.status(200).json({
      success: true,
      data: teachers,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server erro',
      error: error.message,
    });
  }
};

// Update teacher
const updateTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body,{ new: true });

    return res.status(200).json({
      success: true,
      data: teacher,
      message: 'Updated'
    });


  } catch (error) {
   return res.status(500).json({
      success: false,
      message: 'Server erro',
      error: error.message,
    });
  }
};

// Delete teacher
const deleteTeacher = async ( req,res ) => {
  try {
    await Teacher.findByIdAndDelete( req.params.id );

    return res.status(200).json({
      success: true,
      message: 'deleted'
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server erro',
      error: error.message,
    });
  }
};

module.exports = {createTeacher, getTeachers, updateTeacher, deleteTeacher}