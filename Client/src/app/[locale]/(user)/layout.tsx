'use client'

import { Navbar } from '@/components/layout/Navbar'

interface UserLayoutProps {
  children: React.ReactNode
}

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Content Area */}
      <div className="pt-16">
        {children}
      </div>
    </div>
  )
}
