import mongoose from "mongoose";
import locationSchema from "./schema/location.schema.js";

const universitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => `UNI-${this.name}-${Date.now().slice(9)}`,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: locationSchema,
      required: true,
    },
    colleges: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "College",
      },
    ],
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
      },
    ],
    description: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    establishedYear: {
      type: Number,
      required: true,
    },
    logo: {
      type: String,
      required: true,
      default: "LOGO",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const University = mongoose.model("University", universitySchema);

export default University;
