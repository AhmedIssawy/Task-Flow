import { apiSlice } from './apiSlice'
import type { User } from '../slices/authSlice'

interface LoginRequest {
    userId: string
    password: string
}

interface LoginResponse {
    user: User
    token: string
    refreshToken: string
}



export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            queryFn: async (credentials) => {
                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ id: credentials.userId, password: credentials.password }),
                    })

                    if (!response.ok) {
                        throw new Error('Login failed')
                    }

                    const data = await response.json()
                    return { data }
                } catch (error) {
                    return {
                        error: {
                            status: 'CUSTOM_ERROR' as const,
                            data: { message: error instanceof Error ? error.message : 'Login failed' },
                            error: error instanceof Error ? error.message : 'Login failed'
                        }
                    }
                }
            },
        }),

        logout: builder.mutation<void, void>({
            queryFn: async () => {
                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/logout`, {
                        method: 'POST',
                    })

                    if (!response.ok) {
                        throw new Error('Logout failed')
                    }

                    return { data: undefined }
                } catch (error) {
                    return {
                        error: {
                            status: 'CUSTOM_ERROR' as const,
                            data: { message: error instanceof Error ? error.message : 'Logout failed' },
                            error: error instanceof Error ? error.message : 'Logout failed'
                        }
                    }
                }
            },
        }),
    }),
})

export const {
    useLoginMutation,
    useLogoutMutation,
} = authApiSlice
