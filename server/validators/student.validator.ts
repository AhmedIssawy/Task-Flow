// Legacy validation functions - now replaced by Zod schemas
// These are kept for backward compatibility during migration

interface ValidationResult<T> {
  error: { details: Record<string, string> } | null;
  value: T;
}

interface StudentLoginData {
  studentId: string;
  password: string;
}

const validateStudentId = (studentId: string): string | null => {
  if (!studentId || typeof studentId !== "string" || studentId.trim() === "") {
    return "Student ID is required";
  }
  return null;
};

const validatePassword = (password: string): string | null => {
  if (!password || typeof password !== "string") {
    return "Password is required";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters long";
  }
  return null;
};

const validateStudentLogin = (data: StudentLoginData): ValidationResult<StudentLoginData> => {
  const errors: Record<string, string> = {};

  const studentIdError = validateStudentId(data.studentId);
  if (studentIdError) {
    errors.studentId = studentIdError;
  }

  const passwordError = validatePassword(data.password);
  if (passwordError) {
    errors.password = passwordError;
  }

  return {
    error: Object.keys(errors).length > 0 ? { details: errors } : null,
    value: data,
  };
};

export { validateStudentLogin, validatePassword };
