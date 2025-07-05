import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => "ADMIN-" + Date.now().toString(),
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    universityId: {
      type: String,
      ref: "University",
      required: true,
    },
    collegeId: {
      type: String,
      ref: "College",
      required: true,
    },
    role: {
      type: String,
      enum: ["super-admin", "admin"],
      default: "admin",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
