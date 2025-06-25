import mongoose from "mongoose";
import locationSchema from "./schema/location.schema.js";

const collegeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    location: { type: locationSchema, required: true },
    departments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Department" }],
    description: { type: String, required: true, trim: true },
    website: { type: String, required: true, trim: true },
    establishedYear: { type: Number, required: true },
    logo: { type: String, required: true, trim: true },
    universityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "University",
      required: true,
    },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

collegeSchema.index({ location: "2dsphere" });

const College = mongoose.model("College", collegeSchema);
export default College;
