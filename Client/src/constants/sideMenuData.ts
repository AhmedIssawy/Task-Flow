import {
  Home,
  Book,
  Calendar,
  ClipboardList,
  BarChart3,
  Settings,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  labelKey: string
  href: string
  icon: LucideIcon
  badge?: string
}

type Role = 'student' | 'teacher' | 'admin' | 'superadmin'

export const navItemsData: Record<Role, (id: string) => NavItem[]> = {
  student: (id: string) => [
    { labelKey: 'sidebar.dashboard', href: `/student/${id}`, icon: Home, badge: '' },
    { labelKey: 'sidebar.courses', href: `/student/${id}/courses`, icon: Book, badge: '3' },
    { labelKey: 'sidebar.assignments', href: `/student/${id}/assignment`, icon: ClipboardList, badge: '5' },
    { labelKey: 'sidebar.grades', href: `/student/${id}/grades`, icon: BarChart3, badge: 'New' },
    { labelKey: 'sidebar.calendar', href: `/student/${id}/calendar`, icon: Calendar, badge: '' },
    { labelKey: 'sidebar.settings', href: `/student/${id}/settings`, icon: Settings, badge: '' },
    { labelKey: 'sidebar.sections', href: `/student/${id}/sections`, icon: ClipboardList, badge: '' },
  ],

  teacher: (id: string) => [
    { labelKey: 'sidebar.dashboard', href: `/teacher/${id}`, icon: Home, badge: '' },
    { labelKey: 'sidebar.courses', href: `/teacher/${id}/courses`, icon: Book, badge: '3' },
    { labelKey: 'sidebar.assignments', href: `/teacher/${id}/assignments`, icon: ClipboardList, badge: '5' },
    { labelKey: 'sidebar.sections', href: `/teacher/${id}/sections`, icon: ClipboardList, badge: '' },
    { labelKey: 'sidebar.settings', href: `/teacher/${id}/settings`, icon: Settings, badge: '' },
  ],

  admin: (id: string) => [
    { labelKey: 'sidebar.dashboard', href: `/admin/${id}`, icon: Home, badge: '' },
    { labelKey: 'sidebar.colleges', href: `/admin/${id}/colleges`, icon: BarChart3, badge: 'New' },
    { labelKey: 'sidebar.departments', href: `/admin/${id}/departments`, icon: BarChart3, badge: 'New' },
    { labelKey: 'sidebar.courses', href: `/admin/${id}/courses`, icon: ClipboardList, badge: '5' },
    { labelKey: 'sidebar.teachers', href: `/admin/${id}/teachers`, icon: Book, badge: '3' },
    { labelKey: 'sidebar.settings', href: `/admin/${id}/settings`, icon: Settings, badge: '' },
  ],
  
  superadmin: (id: string) => [
    { labelKey: 'sidebar.dashboard', href: `/super-admin/${id}`, icon: Home, badge: '' },
    { labelKey: 'sidebar.university', href: `/super-admin/${id}/university`, icon: Book, badge: '3' },
    { labelKey: 'sidebar.colleges', href: `/super-admin/${id}/colleges`, icon: BarChart3, badge: 'New' },
    { labelKey: 'sidebar.departments', href: `/super-admin/${id}/departments`, icon: BarChart3, badge: 'New' },
    { labelKey: 'sidebar.courses', href: `/super-admin/${id}/courses`, icon: ClipboardList, badge: '5' },
    { labelKey: 'sidebar.teachers', href: `/super-admin/${id}/teachers`, icon: Book, badge: '3' },
    { labelKey: 'sidebar.students', href: `/super-admin/${id}/students`, icon: BarChart3, badge: 'New' },
    { labelKey: 'sidebar.settings', href: `/super-admin/${id}/settings`, icon: Settings, badge: '' },
  ],
}
