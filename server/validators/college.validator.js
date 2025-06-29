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

const validateCollegeId = (collegeId) => {
  if (!collegeId || typeof collegeId !== "string" || collegeId.trim() === "") {
    return "College ID is required";
  }
  return null;
};

export const validateCollegeCreation = (data) => {
  const errors = {};

  const nameError = validateName(data.name, "College Name");
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

  const websiteError = validateUrl(data.website, "Website");
  if (websiteError) {
    errors.website = websiteError;
  }

  const establishedYearError = validateYear(data.establishedYear, "Established Year");
  if (establishedYearError) {
    errors.establishedYear = establishedYearError;
  }

  const logoError = validateLogo(data.logo);
  if (logoError) {
    errors.logo = logoError;
  }

  const universityIdError = validateObjectId(data.universityId, "University ID");
  if (universityIdError) {
    errors.universityId = universityIdError;
  }

  return formatValidationResult(errors, data);
};

export const validateCollegeUpdate = (data) => {
  const errors = {};

  if (data.name !== undefined) {
    const nameError = validateName(data.name, "College Name");
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

  if (data.universityId !== undefined) {
    const universityIdError = validateObjectId(data.universityId, "University ID");
    if (universityIdError) {
      errors.universityId = universityIdError;
    }
  }

  // Array validations
  if (data.departments !== undefined && Array.isArray(data.departments)) {
    for (let i = 0; i < data.departments.length; i++) {
      const departmentError = validateObjectId(data.departments[i], `Department ID at index ${i}`);
      if (departmentError) {
        errors[`departments.${i}`] = departmentError;
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

  return formatValidationResult(errors, data);
};

export const validateCollegeIdParam = (collegeId) => {
  const errors = {};
  
  const idError = validateCollegeId(collegeId);
  if (idError) {
    errors.collegeId = idError;
  }

  return formatValidationResult(errors, { collegeId });
}; 