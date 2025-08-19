import mongoose from "mongoose";
import { Location } from "../../types/common/index.js";

const locationSchema = new mongoose.Schema<Location>(
  {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
      default: "Point",
    },
    coordinates: {
      type: [Number],
      required: true,
      validate: {
        validator: (val: number[]) => val.length === 2,
        message: "Coordinates must be [longitude, latitude]",
      },
    },
  },
  { _id: false }
);

export default locationSchema;
