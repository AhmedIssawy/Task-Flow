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
  pickAllowedFields,
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

  // Only allow whitelisted fields
  const allowedFields = [
    "name", "address", "phone", "email", "location", "description", "establishedYear", "logo", "website"
  ];
  const filteredData = pickAllowedFields(data, allowedFields);
  return formatValidationResult(errors, filteredData);
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

  const allowedFields = [
    "name", "address", "phone", "email", "location", "description", "establishedYear", "logo", "website", "colleges", "students", "teachers"
  ];
  const filteredData = pickAllowedFields(data, allowedFields);
  return formatValidationResult(errors, filteredData);
};

export const validateUniversityIdParam = (universityId) => {
  const errors = {};
  
  const idError = validateUniversityId(universityId);
  if (idError) {
    errors.universityId = idError;
  }

  const filteredData = { universityId };
  return formatValidationResult(errors, filteredData);
}; 