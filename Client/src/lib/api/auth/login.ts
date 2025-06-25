// filepath: d:\Documents\New folder\courses-platforms\client\src\lib\api\auth\login.ts
import { AxiosResponse } from 'axios'
import axiosInstance from '@/lib/axios/axiosInstance'
import { LoginRequest, LoginResponse } from '@/types/api'

/**
 * 🧾 Endpoint Name: login
 * 🔗 Method: POST
 * 📍 URL: /api/auth/login
 * 📤 Body: LoginRequest { userId: string, password: string }
 * 📥 Response: LoginResponse { message: string, role: string, data: { _id: string, name: string, id: string } }
 * 🎯 Authenticate user and return user data with role
 */
export const loginUser = (credentials: LoginRequest): Promise<AxiosResponse<LoginResponse>> => {
    // Transform userId to id for backend compatibility
    const backendPayload = {
        id: credentials.userId,
        password: credentials.password
    }
    return axiosInstance.post('/auth/login', backendPayload)
}
