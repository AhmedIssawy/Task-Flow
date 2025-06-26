import { useEffect } from 'react'
import { useAppDispatch } from '@/store/hooks'
import { setCredentials, clearAuth } from '@/store/slices/authSlice'

export const AuthInitializer = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        // Check for stored authentication on app startup
        const initializeAuth = () => {
            // Only run on client side
            if (typeof window === 'undefined') return

            try {
                const storedToken = sessionStorage.getItem('token')
                const storedUser = sessionStorage.getItem('user')

                if (storedToken && storedUser) {
                    const user = JSON.parse(storedUser)

                    // For real API, we would validate the token with the server
                    // For now, just restore the stored credentials
                    dispatch(setCredentials({
                        user,
                        token: storedToken
                    }))
                }
            } catch (error) {
                // If there's an error parsing stored data, clear it
                console.error('Error initializing auth:', error)
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('user')
                dispatch(clearAuth())
            }
        }

        initializeAuth()
    }, [dispatch])

    return null // This component doesn't render anything
}

export default AuthInitializer
