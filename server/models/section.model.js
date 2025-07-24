import { Schema, model } from "mongoose";
import attachSectionHooks from "./hooks/section.hook.js";

const sectionSchema = new Schema({
  level: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
    default: 30,
    min: 1,
  },
  schedule: [
    {
      day: {
        type: String,
        enum: [
          "Saturday",
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          // "Friday", maybe not needed
        ],
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
    },
  ],
  semester: {
    type: Schema.Types.ObjectId,
    ref: "Semester",
    required: true,
  },
  universityId: {
    type: Schema.Types.ObjectId,
    ref: "University",
    required: true,
  },
  collegeId: {
    type: Schema.Types.ObjectId,
    ref: "College",
    required: true,
  },
  departmentId: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  teachers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Teacher",
    },
  ],
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

attachSectionHooks(sectionSchema);

const Section = model("Section", sectionSchema);
export default Section;
