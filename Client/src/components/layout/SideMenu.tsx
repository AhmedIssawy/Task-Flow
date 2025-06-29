'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, Book, Calendar, ClipboardList, LogOut } from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: Home },
  { label: 'My Courses', href: '/courses', icon: Book },
  { label: 'Assignments', href: '/assignments', icon: ClipboardList },
  { label: 'Calendar', href: '/calendar', icon: Calendar },
]

export function SideMenu() {
  const pathname = usePathname()

  return (
    <aside className="bg-muted h-screen p-4 w-64 border-r flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6">🎓 Task Flow</h2>
        <ul className="space-y-2">
          {navItems.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                className={`flex items-center p-2 rounded-md hover:bg-accent transition ${
                  pathname === href ? 'bg-accent font-semibold' : ''
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </aside>
  )
}