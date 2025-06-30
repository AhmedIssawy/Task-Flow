'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, Book, Calendar, ClipboardList, LogOut, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { useAppSelector } from '@/store/hooks'

const navItems = [
  { label: 'Dashboard', href: '', icon: Home, badge: '' },
  { label: 'Courses', href: '/courses', icon: Book, badge: '3' },
  { label: 'Assignments', href: '/assignments', icon: ClipboardList, badge: '5' },
  { label: 'Grades', href: '/grades', icon: BarChart3, badge: 'New' },
  { label: 'Calendar', href: '/calendar', icon: Calendar, badge: '' },
]

interface StudentSidebarContentProps {
  pathname: string
  onItemClick?: () => void
}

export function StudentSidebarContent({ pathname, onItemClick }: StudentSidebarContentProps) {
  const studentId = useAppSelector((state) => state.auth.mongoId)
  
  return (
    <div className="flex h-full flex-col bg-white dark:bg-gray-900 border-r border-slate-200 dark:border-gray-700">
      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-6">
        <nav className="space-y-2">
          {navItems.map(({ label, href, icon: Icon, badge }) => {
            const fullHref = href === '' ? `/student/${studentId}` : `/student/${studentId}${href}`
            const isActive = pathname === fullHref || (href !== '' && pathname.startsWith(fullHref))
            return (
              <Link
                key={label}
                href={fullHref}
                onClick={onItemClick}
                className={cn(
                  'group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-sm',
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-950/50'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn(
                    'h-5 w-5 transition-transform duration-200',
                    isActive ? 'text-white' : 'text-current group-hover:scale-110'
                  )} />
                  <span>{label}</span>
                </div>
                {badge && (
                  <Badge 
                    variant={isActive ? 'secondary' : 'outline'} 
                    className={cn(
                      'text-xs px-2 py-0.5 font-medium',
                      isActive 
                        ? 'bg-white/20 text-white border-white/30 hover:bg-white/30' 
                        : 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-400 dark:border-blue-800'
                    )}
                  >
                    {badge}
                  </Badge>
                )}
              </Link>
            )
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-3 border-t border-slate-200 dark:border-gray-700">
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-3 text-slate-600 hover:text-red-600 hover:bg-red-50 dark:text-gray-300 dark:hover:text-red-400 dark:hover:bg-red-950/50 transition-all duration-200 rounded-xl py-2.5"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  )
}

export function StudentSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 z-40">
      <StudentSidebarContent pathname={pathname} />
    </aside>
  )
}
