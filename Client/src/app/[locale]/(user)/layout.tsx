'use client'

import { StudentLayout } from '@/components/layout/StudentLayout'

interface UserLayoutProps {
  children: React.ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <StudentLayout>
      {children}
    </StudentLayout>
  )
}
