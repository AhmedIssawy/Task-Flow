import {
  validateEmail,
  validatePassword,
  validateName,
  validatePhone,
  validateObjectId,
  validateAddress,
  formatValidationResult,
} from "./common.validator.js";

const validateTeacherId = (teacherId) => {
  if (!teacherId || typeof teacherId !== "string" || teacherId.trim() === "") {
    return "Teacher ID is required";
  }
  return null;
};

const validateTeacherRole = (role) => {
  if (!role) {
    return null; 
  }
  
  const validRoles = ["doctor", "assistant", "teacher"];
  if (!validRoles.includes(role)) {
    return "Role must be either 'doctor', 'assistant', or 'teacher'";
  }
  
  return null;
};

export const validateTeacherLogin = (data) => {
  const errors = {};

  const teacherIdError = validateTeacherId(data.teacherId);
  if (teacherIdError) {
    errors.teacherId = teacherIdError;
  }

  const passwordError = validatePassword(data.password);
  if (passwordError) {
    errors.password = passwordError;
  }

  return formatValidationResult(errors, data);
};

export const validateTeacherRegistration = (data) => {
  const errors = {};

  const nameError = validateName(data.name, "Name");
  if (nameError) {
    errors.name = nameError;
  }

  const emailError = validateEmail(data.email);
  if (emailError) {
    errors.email = emailError;
  }

  const phoneError = validatePhone(data.phone);
  if (phoneError) {
    errors.phone = phoneError;
  }

  const addressError = validateAddress(data.address);
  if (addressError) {
    errors.address = addressError;
  }

  const passwordError = validatePassword(data.password);
  if (passwordError) {
    errors.password = passwordError;
  }

  const universityIdError = validateObjectId(data.universityId, "University ID");
  if (universityIdError) {
    errors.universityId = universityIdError;
  }

  const collegeIdError = validateObjectId(data.collegeId, "College ID");
  if (collegeIdError) {
    errors.collegeId = collegeIdError;
  }

  const departmentIdError = validateObjectId(data.departmentId, "Department ID");
  if (departmentIdError) {
    errors.departmentId = departmentIdError;
  }

  if (data.role) {
    const roleError = validateTeacherRole(data.role);
    if (roleError) {
      errors.role = roleError;
    }
  }

  return formatValidationResult(errors, data);
};

export const validateTeacherUpdate = (data) => {
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

  if (data.address !== undefined) {
    const addressError = validateAddress(data.address);
    if (addressError) {
      errors.address = addressError;
    }
  }

  if (data.role !== undefined) {
    const roleError = validateTeacherRole(data.role);
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

  if (data.collegeId !== undefined) {
    const collegeIdError = validateObjectId(data.collegeId, "College ID");
    if (collegeIdError) {
      errors.collegeId = collegeIdError;
    }
  }

  if (data.departmentId !== undefined) {
    const departmentIdError = validateObjectId(data.departmentId, "Department ID");
    if (departmentIdError) {
      errors.departmentId = departmentIdError;
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

  return formatValidationResult(errors, data);
};

export const validateTeacherIdParam = (teacherId) => {
  const errors = {};
  
  const idError = validateTeacherId(teacherId);
  if (idError) {
    errors.teacherId = idError;
  }

  return formatValidationResult(errors, { teacherId });
}; 