import mongoose from "mongoose";
import { ILecture } from "../types/models/index.js";

const lectureSchema = new mongoose.Schema<ILecture>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    room: {
      type: String,
    },
    type: {
      type: String,
      enum: ['lecture', 'lab', 'tutorial'],
      default: 'lecture',
    },
    sectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
    attendance: [
      {
        studentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Student",
          required: true,
        },
        present: {
          type: Boolean,
          default: false,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Lecture = mongoose.model<ILecture>("Lecture", lectureSchema);
export default Lecture;
