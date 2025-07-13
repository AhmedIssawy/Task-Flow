import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
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
        validator: (val) => val.length === 2,
        message: "Coordinates must be [longitude, latitude]",
      },
    },
  },
  { _id: false }
);

export default locationSchema;
