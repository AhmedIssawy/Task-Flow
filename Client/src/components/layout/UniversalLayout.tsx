import { useSelector } from 'react-redux'
import { selectUserRole, selectIsAuthenticated } from '@/store/slices/authSlice'
import { getNavigationForRole, isPublicRoute } from '@/lib/routes'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import { useRouter } from 'next/router'

interface UniversalLayoutProps {
    children: React.ReactNode
}

export const UniversalLayout: React.FC<UniversalLayoutProps> = ({ children }) => {
    const router = useRouter()
    const userRole = useSelector(selectUserRole)
    const isAuthenticated = useSelector(selectIsAuthenticated)

    const isPublic = isPublicRoute(router.pathname)
    const navigation = userRole ? getNavigationForRole(userRole) : []

    // For public pages, render without layout
    if (isPublic || !isAuthenticated) {
        return (
            <div className="min-h-screen bg-background">
                {children}
            </div>
        )
    }

    // For authenticated users, render with role-based layout
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <div className="flex">
                <Sidebar
                    navigation={navigation}
                    userRole={userRole || ''}
                />
                <main className="flex-1 ml-64 pt-16">
                    <div className="container mx-auto px-6 py-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default UniversalLayout
