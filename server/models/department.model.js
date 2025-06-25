import mongoose, { Schema, model } from "mongoose";
import locationSchema from "./schema/location.schema.js";

const departmentSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    location: { type: locationSchema, required: true },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    description: { type: String, required: true, trim: true },
    collegeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
      required: true,
    },
    universityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "University",
      required: true,
    },
    establishedYear: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false }
);

departmentSchema.index({ location: "2dsphere" });

const Department = model("Department", departmentSchema);
export default Department;
