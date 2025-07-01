import { Home, Book, Calendar, ClipboardList, BarChart3, BarChart2, BarChart } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href: string 
  icon: LucideIcon
  badge?: string
}
export const studentNavItems = (id: string) => [
  { label: 'Dashboard', href: `/student/${id}`, icon: Home, badge: '' },
  { label: 'My Courses', href: `/student/${id}/courses`, icon: Book, badge: '3' },
  { label: 'Assignments', href: `/student/${id}/assignments`, icon: ClipboardList, badge: '5' },
  { label: 'Grades', href: `/student/${id}/grades`, icon: BarChart3, badge: 'New' },
  { label: 'Calendar', href: `/student/${id}/calendar`, icon: Calendar, badge: '' },
]

export const teacherNavItems = (id: string) => [
  { label: 'Dashboard', href: `/teacher/${id}`, icon: Home, badge: '' },
  { label: 'My Courses', href: `/teacher/${id}/courses`, icon: Book, badge: '3' },
  { label: 'Assignments', href: `/teacher/${id}/assignments`, icon: ClipboardList, badge: '5' },
  { label: 'Students', href: `/teacher/${id}/students`, icon: BarChart3, badge: 'New' },
]


export const adminNavItems = (id: string) => [
  { label: 'Dashboard', href: `/admin/${id}`, icon: Home, badge: '' },
  { label: 'Teachers', href: `/admin/${id}/teachers`, icon: Book, badge: '3' },
  { label: 'Courses', href: `/admin/${id}/courses`, icon: ClipboardList, badge: '5' },
  { label: 'Students', href: `/admin/${id}/students`, icon: BarChart3, badge: 'New' },
]

export const superadminNavItems = (id: string) => [
  { label: 'Admins', href: `/superadmin/${id}/admins`, icon: BarChart, badge: 'New' },
  { label: 'University', href: `/superadmin/${id}/universities`, icon: Book, badge: '3' },
  { label: 'Students', href: `/superadmin/${id}/students`, icon: ClipboardList, badge: '5' },
  { label: 'Teachers', href: `/superadmin/${id}/teachers`, icon: BarChart3, badge: 'New' },
  { label: 'Courses', href: `/superadmin/${id}/courses`, icon: BarChart2, badge: 'New' },
]
