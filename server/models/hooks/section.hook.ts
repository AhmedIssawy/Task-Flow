import { Schema } from 'mongoose';
import { ISection } from '../../types/models/index.js';

const attachSectionHooks = (schema: Schema<ISection>): void => {
  schema.pre("validate", function (next) {
    if (!this.name && this.level && this.code) {
      this.name = `${this.level}_${this.code}`;
    }
    next();
  });
};

export default attachSectionHooks;