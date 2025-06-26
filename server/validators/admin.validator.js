import {
  validatePassword,
  validateName,
  validatePhone,
  formatValidationResult,
  pickAllowedFields,
} from "./common.validator.js";

const validateAdminId = (adminId) => {
  if (!adminId || typeof adminId !== "string" || adminId.trim() === "") {
    return "Admin ID is required";
  }
  return null;
};

const validateAdminRole = (role) => {
  if (!role) {
    return null; 
  }
  
  const validRoles = ["super-admin", "admin"];
  if (!validRoles.includes(role)) {
    return "Role must be either 'super-admin' or 'admin'";
  }
  
  return null;
};

export const validateAdminLogin = (data) => {
  const errors = {};

  const adminIdError = validateAdminId(data.adminId);
  if (adminIdError) {
    errors.adminId = adminIdError;
  }

  const passwordError = validatePassword(data.password);
  if (passwordError) {
    errors.password = passwordError;
  }

  const allowedFields = ["adminId", "password"];
  const filteredData = pickAllowedFields(data, allowedFields);
  return formatValidationResult(errors, filteredData);
};

export const validateAdminRegistration = (data) => {
  const errors = {};

  const nameError = validateName(data.name, "Name");
  if (nameError) {
    errors.name = nameError;
  }

  const passwordError = validatePassword(data.password);
  if (passwordError) {
    errors.password = passwordError;
  }

  if (data.phone) {
    const phoneError = validatePhone(data.phone);
    if (phoneError) {
      errors.phone = phoneError;
    }
  }

  if (data.role) {
    const roleError = validateAdminRole(data.role);
    if (roleError) {
      errors.role = roleError;
    }
  }

  const allowedFields = ["name", "password", "phone", "role"];
  const filteredData = pickAllowedFields(data, allowedFields);
  return formatValidationResult(errors, filteredData);
};

export const validateAdminUpdate = (data) => {
  const errors = {};

  if (data.name !== undefined) {
    const nameError = validateName(data.name, "Name");
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

  if (data.role !== undefined) {
    const roleError = validateAdminRole(data.role);
    if (roleError) {
      errors.role = roleError;
    }
  }

  const allowedFields = ["name", "phone", "role"];
  const filteredData = pickAllowedFields(data, allowedFields);
  return formatValidationResult(errors, filteredData);
};

export const validateAdminIdParam = (adminId) => {
  const errors = {};
  
  const idError = validateAdminId(adminId);
  if (idError) {
    errors.adminId = idError;
  }

  const filteredData = { adminId };
  return formatValidationResult(errors, filteredData);
}; 