'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NavItem } from '@/constants/sideMenuData'
import { LogOut } from 'lucide-react'


interface SideMenuProps {
  navItems: NavItem[]
}




export function SideMenu({ navItems }: SideMenuProps) {
  const pathname = usePathname()
  

  return (
    <aside className="bg-muted h-screen p-4 w-64 border-r flex flex-col justify-between sticky top-0">
      <div>
        <h2 className="text-xl font-bold mb-6">🎓 Task Flow</h2>
        <ul className="space-y-2">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive = pathname.endsWith(href);

            return (
              <li key={label}>
                <Link
                  href={href}
                  className={`flex items-center p-2 rounded-md hover:bg-accent transition ${
                    isActive ? 'bg-accent font-semibold' : ''
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </aside>
  )
}