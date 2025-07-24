import { model, Schema } from "mongoose";
import attachSemesterHooks from "./hooks/semester.hooks.js";
const semesterSchema = new Schema({
  duration: {
    type: String,
    enum: ["Fall", "Spring", "Summer"],
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

attachSemesterHooks(semesterSchema);

const Semester = model("Semester", semesterSchema);
export default Semester;
