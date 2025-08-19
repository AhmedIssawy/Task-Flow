import mongoose from "mongoose";
import { ITeacher } from "../types/models/index.js";

const teacherSchema = new mongoose.Schema<ITeacher>(
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
    address: {
      type: String,
      required: true,
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => "TEACHER-" + Date.now().toString().slice(9),
    },
    password: {
      type: String,
      required: true,
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
    role: {
      type: String,
      enum: ["doctor", "assistant", "teacher"],
      default: "teacher",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Teacher = mongoose.model<ITeacher>("Teacher", teacherSchema);

export default Teacher;
