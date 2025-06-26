import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAppSelector } from '@/store/hooks'
import { selectIsAuthenticated, selectCurrentUser } from '@/store/slices/authSlice'
import { routes } from '@/lib/routes'

interface GlobalRouterProps {
    children: React.ReactNode
}

export const GlobalRouter: React.FC<GlobalRouterProps> = ({ children }) => {
    const router = useRouter()
    const isAuthenticated = useAppSelector(selectIsAuthenticated)
    const currentUser = useAppSelector(selectCurrentUser)

    useEffect(() => {
        // Only handle routing for authenticated users
        if (!isAuthenticated || !currentUser) return

        const currentPath = router.pathname
        const userRole = currentUser.role

        // Redirect from login page to user's default page after authentication
        if (currentPath === '/login') {
            const defaultRoute = routes.roleMap[userRole as keyof typeof routes.roleMap]
            if (defaultRoute) {
                router.replace(defaultRoute)
            }
            return
        }

        // Skip routing logic for public routes
        if (routes.public.includes(currentPath)) {
            return
        }

        // Check if the current route is allowed for this user's role
        const allowedRoutes = routes.protected[userRole as keyof typeof routes.protected] || []
        const isRouteAllowed = allowedRoutes.some(route =>
            currentPath.startsWith(route.replace('/*', '').replace('*', ''))
        )

        // If route is not allowed, redirect to user's default page
        if (!isRouteAllowed) {
            const defaultRoute = routes.roleMap[userRole as keyof typeof routes.roleMap]
            if (defaultRoute && currentPath !== defaultRoute) {
                router.replace(defaultRoute)
            }
        }
    }, [router.pathname, isAuthenticated, currentUser, router])

    return <>{children}</>
}

export default GlobalRouter
