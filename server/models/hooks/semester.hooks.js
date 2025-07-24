import getCurrentSemester from "../utils/getCurrentSemester.js";

export default function attachSemesterHooks(schema) {
  schema.pre("validate", function (next) {
    const { duration, year } = getCurrentSemester();

    if (!this.duration) {
      this.duration = duration;
    }

    if (!this.year) {
      this.year = year;
    }

    next();
  });
}
