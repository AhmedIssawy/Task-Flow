import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    startDateTime: {
      type: Date,
      required: true,
    },
    endDateTime: {
      type: Date,
    },
    dueDateTime: {
      type: Date,
    },
    type: {
      type: String,
      required: true,
      enum: ["lecture", "exam", "quiz", "assignment", "project", "meeting", "deadline", "workshop", "orientation", "trip", "competition", "other"],
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: 'creatorModel', // Allows referencing different models
      required: true,
    },
    creatorModel: {
       type: String,
       required: true,
       enum: ['Student', 'Teacher', 'Admin'] // Models that can create events
    },
    assignedTo: {
      type: {
        type: String,
        enum: ["individual", "section", "course", "department", "college", "university"],
      },
      targetIds: [{
         type: mongoose.Schema.Types.ObjectId,
         // refPath would be complex here, refs determined by 'type'
      }],
    },
    repeat: {
      type: String,
      enum: ["once", "twice", "thrice", "daily", "weekly"],
    },
    status: {
      type: String,
      enum: ["urgent", "fast", "repetitive", "important", "regular", "unattend", "skipped", "completed"],
      default: "regular",
    },
    location: {
      type: String,
    },
    universityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "University",
    },
    collegeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "College",
    },
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },
    metadata: {
      type: Object,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Indexes for performance
eventSchema.index({ creator: 1 });
eventSchema.index({ "assignedTo.targetIds": 1 });
eventSchema.index({ startDateTime: 1 });
eventSchema.index({ dueDateTime: 1 });
eventSchema.index({ universityId: 1, collegeId: 1, departmentId: 1 });

const Event = mongoose.model("Event", eventSchema);

export default Event;