// Export all validators for easy importing

// Common validators
export * from "./common.validator.js";

// Model-specific validators
export * from "./student.validator.js";
export * from "./teacher.validator.js";
export * from "./admin.validator.js";
export * from "./university.validator.js";
export * from "./college.validator.js";
export * from "./department.validator.js";
// export * from "./course.validator.js";

// Validation middleware
export * from "../middlewares/validation.middleware.js"; 