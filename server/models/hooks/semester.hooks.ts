import { Schema } from 'mongoose';
import getCurrentSemester from "../../utils/getCurrentSemester.js";
import { ISemester } from '../../types/models/index.js';

export default function attachSemesterHooks(schema: Schema<ISemester>): void {
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
