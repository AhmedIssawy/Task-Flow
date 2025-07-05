import {
  Home,
  Book,
  Calendar,
  ClipboardList,
  BarChart3,
  BarChart,
  Settings,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href: string
  icon: LucideIcon
  badge?: string
}

type Role = 'student' | 'teacher' | 'admin' | 'superadmin'

export const navItemsData: Record<Role, (id: string) => NavItem[]> = {
  student: (id: string) => [
    { label: 'Dashboard', href: `/student/${id}`, icon: Home, badge: '' },
    { label: 'My Courses', href: `/student/${id}/courses`, icon: Book, badge: '3' },
    { label: 'Assignments', href: `/student/${id}/assignment`, icon: ClipboardList, badge: '5' },
    { label: 'Grades', href: `/student/${id}/grades`, icon: BarChart3, badge: 'New' },
    { label: 'Calendar', href: `/student/${id}/calendar`, icon: Calendar, badge: '' },
    { label: 'Settings', href: `/student/${id}/settings`, icon: Settings, badge: '' },
  ],

  teacher: (id: string) => [
    { label: 'Dashboard', href: `/teacher/${id}`, icon: Home, badge: '' },
    { label: 'My Courses', href: `/teacher/${id}/courses`, icon: Book, badge: '3' },
    { label: 'Assignments', href: `/teacher/${id}/assignments`, icon: ClipboardList, badge: '5' },
    { label: 'Students', href: `/teacher/${id}/students`, icon: BarChart3, badge: 'New' },
    { label: 'Settings', href: `/teacher/${id}/settings`, icon: Settings, badge: '' },
  ],

  admin: (id: string) => [
    { label: 'Dashboard', href: `/admin/${id}`, icon: Home, badge: '' },
    { label: 'Colleges', href: `/admin/${id}/colleges`, icon: BarChart3, badge: 'New' },
    { label: 'Departments', href: `/admin/${id}/departments`, icon: BarChart3, badge: 'New' },
    { label: 'Courses', href: `/admin/${id}/courses`, icon: ClipboardList, badge: '5' },
    { label: 'Teachers', href: `/admin/${id}/teachers`, icon: Book, badge: '3' },
    { label: 'Students', href: `/admin/${id}/students`, icon: BarChart3, badge: 'New' },
    { label: 'Settings', href: `/admin/${id}/settings`, icon: Settings, badge: '' },
  ],

  superadmin: (id: string) => [
    { label: 'University', href: `/superadmin/${id}/universities`, icon: Book, badge: '3' },
    { label: 'Admins', href: `/superadmin/${id}/admins`, icon: BarChart, badge: 'New' },
    { label: 'Colleges', href: `/superadmin/${id}/colleges`, icon: BarChart3, badge: 'New' },
    { label: 'Departments', href: `/superadmin/${id}/departments`, icon: BarChart3, badge: 'New' },
    { label: 'Courses', href: `/superadmin/${id}/courses`, icon: ClipboardList, badge: '5' },
    { label: 'Teachers', href: `/superadmin/${id}/teachers`, icon: Book, badge: '3' },
    { label: 'Students', href: `/superadmin/${id}/students`, icon: BarChart3, badge: 'New' },
    { label: 'Settings', href: `/superadmin/${id}/settings`, icon: Settings, badge: '' },
  ],
}
