import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { RootState } from '../index'

// Base API configuration
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: [
        'User',
        'Student',
        'Teacher',
        'Admin',
        'Course',
        'Assignment',
        'Submission',
        'Grade',
        'Notification',
        'University',
    ], endpoints: () => ({
        // This will be extended by individual API slices
    }),
})

// Export hooks for usage in functional components
export const { } = apiSlice
