import mongoose from "mongoose";
import { IStudent } from "../types/models/index.js";

const studentSchema = new mongoose.Schema<IStudent>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => `STU-${Date.now().toString().slice(9)}`,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    role: {
      type: String,
      required: true,
      enum: ["student", "super-student"],
      default: "student",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    universityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "University",
      required: true,
    },
    collegeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
      required: true,
    },
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    courses: [ //Review
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
          required: true,
        },
        section: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Section",
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Student = mongoose.model<IStudent>("Student", studentSchema);

export default Student;
