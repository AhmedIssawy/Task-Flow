import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { useAppDispatch } from '@/store/hooks'
import { clearAuth } from '@/store/slices/authSlice'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

/**
 * 🧾 Endpoint Name: logout
 * 🔗 Method: POST
 * 📍 URL: /api/auth/logout
 * 🧠 Mutation Key: ['auth', 'logout']
 * 🪝 Hook: useLogoutMutation()
 * 🎯 Clear authentication state and redirect to login
 */
export const useLogoutMutation = (): UseMutationResult<void, Error, void, unknown> => {
    const dispatch = useAppDispatch()
    const router = useRouter()

    return useMutation({
        mutationKey: ['auth', 'logout'],
        mutationFn: async () => {
            // Optional: Call logout API endpoint
            try {
                await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/logout`, {
                    method: 'POST',
                    credentials: 'include', // Include cookies if using HTTP-only cookies
                })
            } catch (error) {
                console.warn('Logout API call failed, but continuing with client-side logout:', error)
            }
        },
        onSuccess: () => {
            console.log('🚪 User logged out successfully')
            
            // Clear Redux state and sessionStorage
            dispatch(clearAuth())
            
            // Show success message
            toast.success('Logged out successfully')
            
            // Redirect to login page
            router.push('/login')
        },
        onError: (error) => {
            console.error('❌ Logout error:', error)
            
            // Even if API call fails, clear local state
            dispatch(clearAuth())
            toast.success('Logged out successfully')
            router.push('/login')
        },
    })
}
