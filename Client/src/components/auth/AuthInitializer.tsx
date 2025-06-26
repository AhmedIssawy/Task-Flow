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
                const storedUserRole = sessionStorage.getItem('userRole')

                if (storedToken && storedUser && storedUserRole) {
                    const userData = JSON.parse(storedUser)

                    const convertRole = (role: string) => {
                        const roleMap: Record<string, 'STUDENT' | 'TEACHER' | 'ADMIN' | 'SUPER_ADMIN'> = {
                            'super-admin': 'SUPER_ADMIN',
                            'admin': 'ADMIN',
                            'teacher': 'TEACHER',
                            'student': 'STUDENT'
                        }
                        return roleMap[role] || 'STUDENT'
                    }

                    const internalRole = convertRole(storedUserRole)

                    const user = {
                        id: userData.id || userData._id,
                        email: userData.email || userData.id,
                        name: userData.name || 'User',
                        role: internalRole,
                        avatar: userData.avatar,
                        profileData: userData.profileData || {}
                    }

                    dispatch(setCredentials({
                        user,
                        token: storedToken
                    }))
                } else {
                    sessionStorage.removeItem('token')
                    sessionStorage.removeItem('user')
                    sessionStorage.removeItem('userRole')
                    dispatch(clearAuth())
                }
            } catch (error) {
                console.error('Error initializing auth:', error)
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('user')
                sessionStorage.removeItem('userRole')
                dispatch(clearAuth())
            }
        }

        initializeAuth()
    }, [dispatch])

    return null // This component doesn't render anything
}

export default AuthInitializer
