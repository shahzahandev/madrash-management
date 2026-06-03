const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
    },

    designation: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      default: "General",
    },

    salary: {
      type: Number,
      required: true,
    },

    joiningDate: {
      type: Date,
      default: Date.now,
    },

    image: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Teacher",teacherSchema);