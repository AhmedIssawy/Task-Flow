const attachSectionHooks = (schema) => {
  schema.pre("validate", function (next) {
    if (!this.name && this.level && this.code) {
      this.name = `${this.level}_${this.code}`;
    }
    next();
  });
};

export default attachSectionHooks;