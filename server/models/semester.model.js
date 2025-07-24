import { model, Schema } from "mongoose";

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


const Semester = model("Semester", semesterSchema);
export default Semester;
