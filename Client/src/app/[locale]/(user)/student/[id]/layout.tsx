'use client'

import {SideMenu}  from '@/components/layout/SideMenu'
import { studentNavItems } from '@/constants/sideMenuData'
import { useParams } from 'next/navigation'

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  const { id } = useParams()

  return (
    <div className="flex">
      <SideMenu navItems={studentNavItems(id as string)} />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}