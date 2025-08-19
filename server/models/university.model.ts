import mongoose from "mongoose";
import locationSchema from "./schema/location.schema.js";
import { IUniversity } from "../types/models/index.js";

const universitySchema = new mongoose.Schema<IUniversity>(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
      unique: true,
      default: function (this: IUniversity) {
       return `UNI-${this.name}-${Date.now().toString().slice(9)}`;
      } 
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

const University = mongoose.model<IUniversity>("University", universitySchema);

export default University;
