import React from 'react'
import { useAppSelector } from '@/store/hooks'
import { selectIsAuthenticated } from '@/store/slices/authSlice'
import Header from './Header'
import Sidebar from './Sidebar'

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const isAuthenticated = useAppSelector(selectIsAuthenticated)

    if (!isAuthenticated) {
        return <>{children}</>
    }

    return (
        <div className="min-h-screen bg-theme">
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
