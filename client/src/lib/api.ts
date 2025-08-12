import { Capacitor } from '@capacitor/core';

/**
 * Get the appropriate API URL based on the current platform
 * @returns API URL string for the current platform
 */
export const getApiUrl = (): string => {
  if (Capacitor.isNativePlatform()) {
    // Running on mobile (Android/iOS)
    return process.env.NEXT_PUBLIC_API_URL_MOBILE || 'http://192.168.56.1:5000/api';
  } else {
    // Running on web browser
    return process.env.NEXT_PUBLIC_API_URL_WEB || 'http://localhost:5000/api';
  }
};

/**
 * Get the appropriate Auth API URL based on the current platform
 * @returns Auth API URL string for the current platform
 */
export const getAuthApiUrl = (): string => {
  if (Capacitor.isNativePlatform()) {
    // Running on mobile (Android/iOS)
    return process.env.NEXT_PUBLIC_API_URL_AUTH_MOBILE || 'http://192.168.56.1:5000';
  } else {
    // Running on web browser
    return process.env.NEXT_PUBLIC_API_URL_AUTH_WEB || 'http://localhost:5000';
  }
};