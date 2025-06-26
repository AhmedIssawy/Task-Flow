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
 * 🎯 Authenticate user and save role to sessionStorage
 */
export const useLoginMutation = (): UseMutationResult<
    AxiosResponse<LoginResponse>,
    AxiosError<LoginErrorResponse>,
    LoginRequest,
    unknown
> => {
    return useMutation({
        mutationKey: ['auth', 'login'],
        mutationFn: (credentials: LoginRequest) => {
            console.log('🚀 Making API call to login with:', credentials);
            return loginUser(credentials);
        },
        onSuccess: (response: AxiosResponse<LoginResponse>) => {
            console.log('✅ Login API Success:', response.data);
            console.log('🎭 Role from API:', response.data.role);

            // Save role to sessionStorage for persistence
            sessionStorage.setItem('userRole', response.data.role);
            sessionStorage.setItem('user', JSON.stringify(response.data.data));

            // Also save the token if it exists in the response
            if (response.data.token) {
                sessionStorage.setItem('token', response.data.token);
            }
        },
        onError: (error: AxiosError<LoginErrorResponse>) => {
            console.error('❌ Login API Error:', error.response?.data?.message || error.message);
            console.error('🔍 Full Error:', error);
        },
        retry: 1,
    })
}
