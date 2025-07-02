'use client'

import { SideMenu } from '@/components/layout/SideMenu'
import { adminNavItems } from '@/constants/sideMenuData'
import { useParams } from 'next/navigation'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { id } = useParams()

    return (
        <>
            {/* Sidebar */}
            <SideMenu navItems={adminNavItems(id as string)} />

            {/* Main Content with proper offset and full width */}
            <main className="admin-main-content content-scroll">
                <div className="p-6 max-w-full">
                    {children}
                </div>
            </main>
        </>
    )
}
