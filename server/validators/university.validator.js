import {
  validateName,
  validateEmail,
  validatePhone,
  validateAddress,
  validateUrl,
  validateYear,
  validateLocation,
  validateLogo,
  validateDescription,
  validateObjectId,
  formatValidationResult,
} from "./common.validator.js";

const validateUniversityId = (universityId) => {
  if (!universityId || typeof universityId !== "string" || universityId.trim() === "") {
    return "University ID is required";
  }
  return null;
};

export const validateUniversityCreation = (data) => {
  const errors = {};

  const nameError = validateName(data.name, "University Name");
  if (nameError) {
    errors.name = nameError;
  }

  const addressError = validateAddress(data.address);
  if (addressError) {
    errors.address = addressError;
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

  const logoError = validateLogo(data.logo);
  if (logoError) {
    errors.logo = logoError;
  }

  if (data.website) {
    const websiteError = validateUrl(data.website, "Website");
    if (websiteError) {
      errors.website = websiteError;
    }
  }

  return formatValidationResult(errors, data);
};

export const validateUniversityUpdate = (data) => {
  const errors = {};

  if (data.name !== undefined) {
    const nameError = validateName(data.name, "University Name");
    if (nameError) {
      errors.name = nameError;
    }
  }

  if (data.address !== undefined) {
    const addressError = validateAddress(data.address);
    if (addressError) {
      errors.address = addressError;
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

  if (data.website !== undefined) {
    const websiteError = validateUrl(data.website, "Website");
    if (websiteError) {
      errors.website = websiteError;
    }
  }

  if (data.establishedYear !== undefined) {
    const establishedYearError = validateYear(data.establishedYear, "Established Year");
    if (establishedYearError) {
      errors.establishedYear = establishedYearError;
    }
  }

  if (data.logo !== undefined) {
    const logoError = validateLogo(data.logo);
    if (logoError) {
      errors.logo = logoError;
    }
  }

  // Array validations
  if (data.colleges !== undefined && Array.isArray(data.colleges)) {
    for (let i = 0; i < data.colleges.length; i++) {
      const collegeError = validateObjectId(data.colleges[i], `College ID at index ${i}`);
      if (collegeError) {
        errors[`colleges.${i}`] = collegeError;
      }
    }
  }

  if (data.students !== undefined && Array.isArray(data.students)) {
    for (let i = 0; i < data.students.length; i++) {
      const studentError = validateObjectId(data.students[i], `Student ID at index ${i}`);
      if (studentError) {
        errors[`students.${i}`] = studentError;
      }
    }
  }

  if (data.teachers !== undefined && Array.isArray(data.teachers)) {
    for (let i = 0; i < data.teachers.length; i++) {
      const teacherError = validateObjectId(data.teachers[i], `Teacher ID at index ${i}`);
      if (teacherError) {
        errors[`teachers.${i}`] = teacherError;
      }
    }
  }

  return formatValidationResult(errors, data);
};

export const validateUniversityIdParam = (universityId) => {
  const errors = {};
  
  const idError = validateUniversityId(universityId);
  if (idError) {
    errors.universityId = idError;
  }

  return formatValidationResult(errors, { universityId });
}; 