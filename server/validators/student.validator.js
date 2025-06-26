// Custom validation functions
const validateStudentId = (studentId) => {
  if (!studentId || typeof studentId !== "string" || studentId.trim() === "") {
    return "Student ID is required";
  }
  return null;
};

const validatePassword = (password) => {
  if (!password || typeof password !== "string") {
    return "Password is required";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters long";
  }
  return null;
};

const validateStudentLogin = (data) => {
  const errors = {};

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
