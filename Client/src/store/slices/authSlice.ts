import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
    id: string
    email: string
    name: string
    role: 'STUDENT' | 'TEACHER' | 'ADMIN' | 'SUPER_ADMIN'
    avatar?: string
    profileData: Record<string, unknown>
}

interface AuthState {
    user: User | null
    token: string | null
    isAuthenticated: boolean
    isLoading: boolean
    error: string | null
}

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{ user: User; token: string }>) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.isAuthenticated = true
            state.error = null
            
            // Persist to sessionStorage when credentials are set
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('token', action.payload.token)
                sessionStorage.setItem('user', JSON.stringify(action.payload.user))
                sessionStorage.setItem('userRole', action.payload.user.role.toLowerCase())
            }
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.isLoading = false
        },
        clearAuth: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false
            state.error = null
            
            // Clear sessionStorage when auth is cleared
            if (typeof window !== 'undefined') {
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('user')
                sessionStorage.removeItem('userRole')
            }
        },
        updateProfile: (state, action: PayloadAction<Partial<User>>) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload }
            }
        },
    },
})

export const { setCredentials, setLoading, setError, clearAuth, updateProfile } = authSlice.actions

// Selectors
export const selectAuth = (state: { auth: AuthState }) => state.auth
export const selectUser = (state: { auth: AuthState }) => state.auth.user
export const selectCurrentUser = (state: { auth: AuthState }) => state.auth.user
export const selectIsAuthenticated = (state: { auth: AuthState }) => state.auth.isAuthenticated
export const selectUserRole = (state: { auth: AuthState }) => state.auth.user?.role
