import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAppSelector } from '@/store/hooks'
import { selectIsAuthenticated } from '@/store/slices/authSlice'

interface ProtectedRouteProps {
    children: React.ReactNode
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const router = useRouter()
    const isAuthenticated = useAppSelector(selectIsAuthenticated)

    useEffect(() => {
        // 1. Check authentication
        if (!isAuthenticated && !['/login', '/'].includes(router.pathname)) {
            router.replace('/login')
            return
        }

        // 2. Set theme and language in localStorage (user preferences)
        if (typeof window !== 'undefined') {
            const theme = localStorage.getItem('theme')
            const language = localStorage.getItem('language')

            if (!theme) localStorage.setItem('theme', 'system')
            if (!language) localStorage.setItem('language', 'en')
        }
    }, [isAuthenticated, router])

    // Show loading while redirecting unauthenticated users
    if (!isAuthenticated && !['/login', '/'].includes(router.pathname)) {
        return (
            <div className="min-h-screen bg-theme flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-theme/70">Redirecting to login...</p>
                </div>
            </div>
        )
    }

    return <>{children}</>
}

export default ProtectedRoute
