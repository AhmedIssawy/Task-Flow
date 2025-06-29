import {
  validateName,
  validateEmail,
  validatePhone,
  validateYear,
  validateLocation,
  validateDescription,
  validateObjectId,
  formatValidationResult,
} from "./common.validator.js";

const validateDepartmentId = (departmentId) => {
  if (!departmentId || typeof departmentId !== "string" || departmentId.trim() === "") {
    return "Department ID is required";
  }
  return null;
};

export const validateDepartmentCreation = (data) => {
  const errors = {};

  const nameError = validateName(data.name, "Department Name");
  if (nameError) {
    errors.name = nameError;
  }

  const phoneError = validatePhone(data.phone);
  if (phoneError) {
    errors.phone = phoneError;
  }

  const emailError = validateEmail(data.email);
  if (emailError) {
    errors.email = emailError;
  }

  const locationError = validateLocation(data.location);
  if (locationError) {
    errors.location = locationError;
  }

  const descriptionError = validateDescription(data.description, "Description");
  if (descriptionError) {
    errors.description = descriptionError;
  }

  const establishedYearError = validateYear(data.establishedYear, "Established Year");
  if (establishedYearError) {
    errors.establishedYear = establishedYearError;
  }

  const collegeIdError = validateObjectId(data.collegeId, "College ID");
  if (collegeIdError) {
    errors.collegeId = collegeIdError;
  }

  const universityIdError = validateObjectId(data.universityId, "University ID");
  if (universityIdError) {
    errors.universityId = universityIdError;
  }

  return formatValidationResult(errors, data);
};

export const validateDepartmentUpdate = (data) => {
  const errors = {};

  if (data.name !== undefined) {
    const nameError = validateName(data.name, "Department Name");
    if (nameError) {
      errors.name = nameError;
    }
  }

  if (data.phone !== undefined) {
    const phoneError = validatePhone(data.phone);
    if (phoneError) {
      errors.phone = phoneError;
    }
  }

  if (data.email !== undefined) {
    const emailError = validateEmail(data.email);
    if (emailError) {
      errors.email = emailError;
    }
  }

  if (data.location !== undefined) {
    const locationError = validateLocation(data.location);
    if (locationError) {
      errors.location = locationError;
    }
  }

  if (data.description !== undefined) {
    const descriptionError = validateDescription(data.description, "Description");
    if (descriptionError) {
      errors.description = descriptionError;
    }
  }

  if (data.establishedYear !== undefined) {
    const establishedYearError = validateYear(data.establishedYear, "Established Year");
    if (establishedYearError) {
      errors.establishedYear = establishedYearError;
    }
  }

  if (data.collegeId !== undefined) {
    const collegeIdError = validateObjectId(data.collegeId, "College ID");
    if (collegeIdError) {
      errors.collegeId = collegeIdError;
    }
  }

  if (data.universityId !== undefined) {
    const universityIdError = validateObjectId(data.universityId, "University ID");
    if (universityIdError) {
      errors.universityId = universityIdError;
    }
  }

  // Array validations
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

export const validateDepartmentIdParam = (departmentId) => {
  const errors = {};
  
  const idError = validateDepartmentId(departmentId);
  if (idError) {
    errors.departmentId = idError;
  }

  return formatValidationResult(errors, { departmentId });
}; 