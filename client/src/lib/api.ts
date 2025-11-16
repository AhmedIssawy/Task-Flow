/**
 * Get the API URL from environment variable
 * @returns API URL string
 */
export const getApiUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
};

/**
 * Get the Auth API URL from environment variable
 * @returns Auth API URL string
 */
export const getAuthApiUrl = (): string => {
  // Remove trailing '/api' or '/api/' if present to get the base URL
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
  return apiUrl.replace(/\/api\/?$/, '');
};