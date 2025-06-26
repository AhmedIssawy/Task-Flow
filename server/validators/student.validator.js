import {
  validateEmail,
  validatePassword,
  validateName,
  validatePhone,
  validateObjectId,
  formatValidationResult,
  pickAllowedFields,
} from "./common.validator.js";

const validateStudentId = (studentId) => {
  if (!studentId || typeof studentId !== "string" || studentId.trim() === "") {
    return "Student ID is required";
  }
  return null;
};

// const validateStudentRole = (role) => {
//   if (!role) {
//     return null; 
//   }
  
//   const validRoles "student"];
//   if (!validRoles.includes(role)) {
//     return "false";
//   }
//   return null;
// };

const validateStudentRole = (role) => {
  if (!role) {
    return null; 
  }
  
  const validRoles = ["student", "super-student"];
  if (!validRoles.includes(role)) {
    return "Role must be either 'student' or 'super-student'";
  }
  
  return null;
};

export const validateStudentLogin = (data) => {
  const errors = {};

  const studentIdError = validateStudentId(data.studentId);
  if (studentIdError) {
    errors.studentId = studentIdError;
  }

  const passwordError = validatePassword(data.password);
  if (passwordError) {
    errors.password = passwordError;
  }

  const allowedFields = ["studentId", "password"];
  const filteredData = pickAllowedFields(data, allowedFields);
  return formatValidationResult(errors, filteredData);
};

export const validateStudentRegistration = (data) => {
  const errors = {};

  const nameError = validateName(data.name, "Name");
  if (nameError) {
    errors.name = nameError;
  }

  const emailError = validateEmail(data.email);
  if (emailError) {
    errors.email = emailError;
  }

  const passwordError = validatePassword(data.password);
  if (passwordError) {
    errors.password = passwordError;
  }

  const universityIdError = validateObjectId(data.universityId, "University ID");
  if (universityIdError) {
    errors.universityId = universityIdError;
  }

  if (data.phone) {
    const phoneError = validatePhone(data.phone);
    if (phoneError) {
      errors.phone = phoneError;
    }
  }

  if (data.role) {
    const roleError = validateStudentRole(data.role);
    if (roleError) {
      errors.role = roleError;
    }
  }

  const allowedFields = ["name", "email", "password", "universityId", "phone", "role"];
  const filteredData = pickAllowedFields(data, allowedFields);
  return formatValidationResult(errors, filteredData);
};

export const validateStudentUpdate = (data) => {
  const errors = {};

  if (data.name !== undefined) {
    const nameError = validateName(data.name, "Name");
    if (nameError) {
      errors.name = nameError;
    }
  }

  if (data.email !== undefined) {
    const emailError = validateEmail(data.email);
    if (emailError) {
      errors.email = emailError;
    }
  }

  if (data.phone !== undefined) {
    const phoneError = validatePhone(data.phone);
    if (phoneError) {
      errors.phone = phoneError;
    }
  }

  if (data.role !== undefined) {
    const roleError = validateStudentRole(data.role);
    if (roleError) {
      errors.role = roleError;
    }
  }

  if (data.universityId !== undefined) {
    const universityIdError = validateObjectId(data.universityId, "University ID");
    if (universityIdError) {
      errors.universityId = universityIdError;
    }
  }

  if (data.courses !== undefined && Array.isArray(data.courses)) {
    for (let i = 0; i < data.courses.length; i++) {
      const courseError = validateObjectId(data.courses[i], `Course ID at index ${i}`);
      if (courseError) {
        errors[`courses.${i}`] = courseError;
      }
    }
  }

  const allowedFields = ["name", "email", "phone", "role", "universityId", "courses"];
  const filteredData = pickAllowedFields(data, allowedFields);
  return formatValidationResult(errors, filteredData);
};

export const validateStudentIdParam = (studentId) => {
  const errors = {};
  
  const idError = validateStudentId(studentId);
  if (idError) {
    errors.studentId = idError;
  }

  const filteredData = { studentId };
  return formatValidationResult(errors, filteredData);
};

export { validatePassword };
