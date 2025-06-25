// Mock authentication for testing without backend
import type { User } from '@/store/slices/authSlice'

interface LoginCredentials {
    userId: string
    password: string
}

interface LoginResponse {
    user: User
    token: string
    refreshToken: string
}

// Mock user data
const mockUsers: Record<string, User> = {
    'student@uni.edu': {
        id: '1',
        email: 'student@uni.edu',
        name: 'Ahmed Hassan',
        role: 'STUDENT',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed',
        profileData: {
            university: 'Cairo University',
            faculty: 'Computer Science',
            year: 3,
            gpa: 3.8
        }
    },
    'teacher@uni.edu': {
        id: '2',
        email: 'teacher@uni.edu',
        name: 'Dr. Sarah Mohamed',
        role: 'TEACHER',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        profileData: {
            university: 'Cairo University',
            department: 'Computer Science',
            position: 'Associate Professor',
            courses: ['CS101', 'CS201', 'CS301']
        }
    },
    'admin@uni.edu': {
        id: '3',
        email: 'admin@uni.edu',
        name: 'Omar Khaled',
        role: 'ADMIN',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Omar',
        profileData: {
            university: 'Cairo University',
            department: 'Administration',
            permissions: ['manage_users', 'manage_courses', 'view_reports']
        }
    },
    'superadmin@system.com': {
        id: '4',
        email: 'superadmin@system.com',
        name: 'System Administrator',
        role: 'SUPER_ADMIN',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=System',
        profileData: {
            permissions: ['all'],
            systemAccess: true
        }
    }
}

// Mock login function
export const mockLogin = async (credentials: LoginCredentials): Promise<LoginResponse> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    const { userId, password } = credentials

    // Check if user exists and password is correct (all demo passwords are "password")
    if (mockUsers[userId] && password === 'password') {
        const user = mockUsers[userId]
        const token = `mock-jwt-token-${user.id}-${Date.now()}`
        const refreshToken = `mock-refresh-token-${user.id}-${Date.now()}`

        return {
            user,
            token,
            refreshToken
        }
    }

    // Simulate error
    throw new Error('Invalid credentials')
}

// Mock logout function
export const mockLogout = async (): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    // In a real app, this would invalidate the token on the server
}

// Mock token refresh
export const mockRefreshToken = async (refreshToken: string): Promise<{ token: string }> => {
    await new Promise(resolve => setTimeout(resolve, 500))

    // In a real app, this would validate the refresh token and return a new access token
    if (refreshToken.startsWith('mock-refresh-token-')) {
        const newToken = `mock-jwt-token-refreshed-${Date.now()}`
        return { token: newToken }
    }

    throw new Error('Invalid refresh token')
}
