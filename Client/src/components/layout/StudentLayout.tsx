'use client'

import { StudentNavbar } from './StudentNavbar'
import { StudentSidebar } from './StudentSidebar'
import { cn } from '@/lib/utils'

interface StudentLayoutProps {
  children: React.ReactNode
  className?: string
}

export function StudentLayout({ children, className }: StudentLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Fixed Navbar */}
      <StudentNavbar />
      
      {/* Fixed Sidebar */}
      <StudentSidebar />
      
      {/* Main Content Area */}
      <main 
        className={cn(
          'lg:ml-64 pt-16 min-h-screen overflow-y-auto',
          'scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent',
          'dark:scrollbar-thumb-blue-800',
          className
        )}
      >
        {/* Content Container */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
