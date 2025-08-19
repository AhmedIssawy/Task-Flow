import mongoose from "mongoose";
import { ICourse } from "../types/models/index.js";

const courseSchema = new mongoose.Schema<ICourse>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hours: {
      type: Number,
      required: true,
    },
    teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
      },
    ],
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
    id: {
      type: String,
      required: true,
      unique: true,
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
    universityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "University",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Course = mongoose.model<ICourse>("Course", courseSchema);
export default Course;
