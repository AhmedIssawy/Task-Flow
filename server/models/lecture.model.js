import { model, Schema } from "mongoose";

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true, // Duration in minutes
    },
    deadline: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed", "overdue"],
      default: "pending",
    },
    type: {
        type: String,
        enum: ["assignment", "quiz", "project", "lecture"],
        required: true,
        default: "lecture",
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Task = model("Task", lectureSchema);
export default Task;
