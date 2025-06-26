import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// Base configuration
const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
}

// Create axios instance
const axiosInstance: AxiosInstance = axios.create(axiosConfig)

// Request interceptor - Auto-attach token
axiosInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response interceptor - Handle errors and token refresh
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    async (error) => {
        const originalRequest = error.config

        // Handle 401 Unauthorized
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            // Clear invalid token
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                // Redirect to login page
                window.location.href = '/login'
            }
        }

        // Handle network errors
        if (!error.response) {
            error.message = 'Network error. Please check your connection.'
        }

        // Handle 500 server errors
        if (error.response?.status >= 500) {
            error.message = 'Server error. Please try again later.'
        }

        return Promise.reject(error)
    }
)

export default axiosInstance
