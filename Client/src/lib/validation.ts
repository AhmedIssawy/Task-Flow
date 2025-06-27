// Validation utilities

export interface ValidationResult {
    isValid: boolean
    error?: string
}

// Validation constants
const VALIDATION_RULES = {
    password: {
        minLength: 8,
        maxLength: 128,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecialChars: true,
    },
    email: {
        maxLength: 254,
    },
    name: {
        minLength: 2,
        maxLength: 100,
    },
} as const

export function validateEmail(email: string): ValidationResult {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) {
        return { isValid: false, error: 'Email is required' }
    }

    if (email.length > VALIDATION_RULES.email.maxLength) {
        return { isValid: false, error: `Email must be less than ${VALIDATION_RULES.email.maxLength} characters` }
    }

    if (!emailRegex.test(email)) {
        return { isValid: false, error: 'Please enter a valid email address' }
    }

    return { isValid: true }
}

export function validatePassword(password: string): ValidationResult {
    const { minLength, maxLength, requireUppercase, requireLowercase, requireNumbers, requireSpecialChars } = VALIDATION_RULES.password

    if (!password) {
        return { isValid: false, error: 'Password is required' }
    }

    if (password.length < minLength) {
        return { isValid: false, error: `Password must be at least ${minLength} characters long` }
    }

    if (password.length > maxLength) {
        return { isValid: false, error: `Password must be less than ${maxLength} characters long` }
    }

    if (requireUppercase && !/[A-Z]/.test(password)) {
        return { isValid: false, error: 'Password must contain at least one uppercase letter' }
    }

    if (requireLowercase && !/[a-z]/.test(password)) {
        return { isValid: false, error: 'Password must contain at least one lowercase letter' }
    }

    if (requireNumbers && !/\d/.test(password)) {
        return { isValid: false, error: 'Password must contain at least one number' }
    }

    if (requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return { isValid: false, error: 'Password must contain at least one special character' }
    }

    return { isValid: true }
}

export function validateName(name: string): ValidationResult {
    const { minLength, maxLength } = VALIDATION_RULES.name

    if (!name) {
        return { isValid: false, error: 'Name is required' }
    }

    if (name.length < minLength) {
        return { isValid: false, error: `Name must be at least ${minLength} characters long` }
    }

    if (name.length > maxLength) {
        return { isValid: false, error: `Name must be less than ${maxLength} characters long` }
    }

    return { isValid: true }
}

export function validateRequired(value: string, fieldName: string): ValidationResult {
    if (!value || value.trim() === '') {
        return { isValid: false, error: `${fieldName} is required` }
    }

    return { isValid: true }
}
