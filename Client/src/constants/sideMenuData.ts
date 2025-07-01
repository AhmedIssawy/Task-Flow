import { Home, Book, Calendar, ClipboardList, BarChart3 } from 'lucide-react'
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
