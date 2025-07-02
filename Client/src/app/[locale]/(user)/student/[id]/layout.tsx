'use client'

import { SideMenu } from '@/components/layout/SideMenu'
import { studentNavItems } from '@/constants/sideMenuData'
import { useParams } from 'next/navigation'

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const { id } = useParams()

  return (
    <>
      {/* Sidebar */}
      <SideMenu navItems={studentNavItems(id as string)} />

      {/* Main Content with proper offset and full width */}
      <main className="student-main-content content-scroll">
        <div className="p-6 max-w-full">
          {children}
        </div>
      </main>
    </>
  )
}