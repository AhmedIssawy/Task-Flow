'use client'

import { Navbar } from '../Navbar';
import { cn } from '@/lib/utils'

interface StudentLayoutProps {
  children: React.ReactNode
  className?: string
}

export function StudentLayout({ children, className }: StudentLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Fixed Sidebar */}
      {/* <Sidebar na /> */}

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
