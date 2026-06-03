const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    roll: {
      type: Number,
      required: true,
    },

    className: {
      type: String,
      required: true,
    },

    guardianName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    address: {
      type: String,
    },

    image: {
      type: String,
      default: "",
    },

    hifzLevel: {
      type: String,
      default: "Beginner",
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

module.exports = mongoose.model("Student", studentSchema );