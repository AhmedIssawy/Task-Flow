import { Home, Book, Calendar, ClipboardList } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  label: string
  href: string 
  icon: LucideIcon
}
export const studentNavItems = (id: string) => [
  { label: 'Dashboard', href: `/student/${id}`, icon: Home },
  { label: 'My Courses', href: `/student/${id}/courses`, icon: Book },
  { label: 'Assignments', href: `/student/${id}/assignments`, icon: ClipboardList },
  { label: 'Calendar', href: `/student/${id}/calendar`, icon: Calendar },
]
