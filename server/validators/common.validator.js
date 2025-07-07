export const validateEmail = (email) => {
  if (!email || typeof email !== "string") {
    return "Email is required";
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return "Please provide a valid email address";
  }
  
  return null;
};

export const validatePassword = (password) => {
  if (!password || typeof password !== "string") {
    return "Password is required";
  }
  
  if (password.length < 6) {
    return "Password must be at least 6 characters long";
  }
  
  return null;
};

export const validateName = (name, fieldName = "Name") => {
  if (!name || typeof name !== "string" || name.trim() === "") {
    return `${fieldName} is required`;
  }
  
  if (name.trim().length < 2) {
    return `${fieldName} must be at least 2 characters long`;
  }
  
  if (name.trim().length > 50) {
    return `${fieldName} must be less than 50 characters`;
  }
  
  return null;
};

export const validatePhone = (phone) => {
  if (!phone || typeof phone !== "string") {
    return "Phone number is required";
  }
  
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  if (!phoneRegex.test(phone.trim())) {
    return "Please provide a valid phone number";
  }
  
  return null;
};

export const validateObjectId = (id, fieldName = "ID") => {
  if (!id) {
    return `${fieldName} is required`;
  }
  
  const objectIdRegex = /^[0-9a-fA-F]{24}$/;
  if (!objectIdRegex.test(id)) {
    return `Please provide a valid ${fieldName}`;
  }
  
  return null;
};

export const validateUrl = (url, fieldName = "URL") => {
  if (!url || typeof url !== "string") {
    return `${fieldName} is required`;
  }
  
  try {
    new URL(url.trim());
  } catch (error) {
    return `Please provide a valid ${fieldName}`;
  }
  
  return null;
};

export const validateYear = (year, fieldName = "Year") => {
  if (!year || typeof year !== "number") {
    return `${fieldName} is required and must be a number`;
  }
  
  const currentYear = new Date().getFullYear();
  if (year < 1800 || year > currentYear + 10) {
    return `${fieldName} must be between 1800 and ${currentYear + 10}`;
  }
  
  return null;
};

export const validateLocation = (location) => {
  if (!location || typeof location !== "object") {
    return "Location is required";
  }
  
  if (location.type !== "Point") {
    return "Location type must be 'Point'";
  }
  
  if (!Array.isArray(location.coordinates) || location.coordinates.length !== 2) {
    return "Location coordinates must be an array with exactly 2 numbers [longitude, latitude]";
  }
  
  const [longitude, latitude] = location.coordinates;
  
  if (typeof longitude !== "number" || typeof latitude !== "number") {
    return "Location coordinates must be numbers";
  }
  
  if (longitude < -180 || longitude > 180) {
    return "Longitude must be between -180 and 180";
  }
  
  if (latitude < -90 || latitude > 90) {
    return "Latitude must be between -90 and 90";
  }
  
  return null;
};

export const validateHours = (hours) => {
  if (!hours || typeof hours !== "number") {
    return "Hours is required and must be a number";
  }
  
  if (hours <= 0 || hours > 1000) {
    return "Hours must be between 1 and 1000";
  }
  
  return null;
};

export const validateDescription = (description, fieldName = "Description") => {
  if (!description || typeof description !== "string" || description.trim() === "") {
    return `${fieldName} is required`;
  }
  
  if (description.trim().length < 10) {
    return `${fieldName} must be at least 10 characters long`;
  }
  
  if (description.trim().length > 1000) {
    return `${fieldName} must be less than 1000 characters`;
  }
  
  return null;
};

export const validateAddress = (address) => {
  if (!address || typeof address !== "string" || address.trim() === "") {
    return "Address is required";
  }
  
  if (address.trim().length < 5) {
    return "Address must be at least 5 characters long";
  }
  
  if (address.trim().length > 200) {
    return "Address must be less than 200 characters";
  }
  
  return null;
};

export const validateLogo = (logo) => {
  if (!logo || typeof logo !== "string" || logo.trim() === "") {
    return "Logo is required";
  }
  
  return null;
};

export const validateRequired = (value, fieldName) => {
  if (!value || (typeof value === "string" && value.trim() === "")) {
    return `${fieldName} is required`;
  }
  return null;
};

export const formatValidationResult = (errors, data) => {
  return {
    error: Object.keys(errors).length > 0 ? { details: errors } : null,
    value: data,
  };
}; 