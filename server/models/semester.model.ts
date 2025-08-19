import mongoose from "mongoose";
import getCurrentSemester from "../utils/getCurrentSemester.js";
import { ISemester } from "../types/models/index.js";

const semesterSchema = new mongoose.Schema<ISemester>(
  {
    year: {
      type: Number,
      required: true,
      default: () => getCurrentSemester().year,
    },
    duration: {
      type: String,
      enum: ["Spring", "Summer", "Fall"],
      required: true,
      default: () => getCurrentSemester().duration,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
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

const Semester = mongoose.model<ISemester>("Semester", semesterSchema);
export default Semester;
