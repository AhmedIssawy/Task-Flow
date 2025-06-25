// filepath: d:\Documents\New folder\courses-platforms\client\src\hooks\api\useLogin.ts
import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { loginUser } from '@/lib/api/auth/login'
import { LoginRequest, LoginResponse, LoginErrorResponse } from '@/types/api'

/**
 * 🧾 Endpoint Name: login
 * 🔗 Method: POST
 * 📍 URL: /api/auth/login
 * 🧠 Mutation Key: ['auth', 'login']
 * 📁 API Source: lib/api/auth/login.ts → loginUser()
 * 📁 Hook Source: hooks/api/useLogin.ts
 * 🪝 Hook: useLoginMutation()
 * 📤 Body: LoginRequest { userId: string, password: string }
 * 📥 Response: LoginResponse { message: string, role: string, data: { _id: string, name: string, id: string } }
 * ⚡ Performance: Immediate response, error handling, role storage
 * 🎯 Authenticate user and save role to localStorage
 */
export const useLoginMutation = (): UseMutationResult<
    AxiosResponse<LoginResponse>,
    AxiosError<LoginErrorResponse>,
    LoginRequest,
    unknown
> => {
    return useMutation({
        mutationKey: ['auth', 'login'],
        mutationFn: loginUser,
        onSuccess: (response: AxiosResponse<LoginResponse>) => {
            // Save role to localStorage for further usage
            localStorage.setItem('userRole', response.data.role)
            // Optionally save user data
            localStorage.setItem('userData', JSON.stringify(response.data.data))
        },
        onError: (error: AxiosError<LoginErrorResponse>) => {
            console.error('Login failed:', error.response?.data?.message || error.message)
        },
        retry: 1, // Retry once on failure
    })
}
