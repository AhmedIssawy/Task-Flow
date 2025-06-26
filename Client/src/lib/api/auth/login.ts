// filepath: d:\Documents\New folder\courses-platforms\client\src\lib\api\auth\login.ts
import { AxiosResponse } from 'axios'
import axiosInstance from '@/lib/axios/axiosInstance'
import { LoginRequest, LoginResponse } from '@/types/api'

/**
 * 🧾 Endpoint Name: login
 * 🔗 Method: POST
 * 📍 URL: /api/auth/login
 * 📤 Body: LoginRequest { userId: string, password: string }
 * 📥 Response: LoginResponse { message: string, role: string, token?: string, data: { _id: string, name: string, id: string } }
 * 🎯 Authenticate user and return user data with role from API
 */
export const loginUser = async (credentials: LoginRequest): Promise<AxiosResponse<LoginResponse>> => {
    // Transform userId to id for backend compatibility
    const backendPayload = {
        id: credentials.userId,
        password: credentials.password
    }

    console.log('📡 Sending login request to API:', {
        url: '/auth/login',
        payload: { ...backendPayload, password: '[HIDDEN]' }
    });

    try {
        const response = await axiosInstance.post('/auth/login', backendPayload);
        console.log('📡 API Response received:', {
            status: response.status,
            role: response.data.role,
            message: response.data.message,
            userData: response.data.data
        });
        return response;
    } catch (error) {
        console.error('📡 API Request failed:', error);
        throw error;
    }
}
