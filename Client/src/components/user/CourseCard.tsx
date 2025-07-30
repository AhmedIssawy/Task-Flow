'use client'

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '../ui/button'
import { Course } from '@/store/types/courses'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface CourseCardProps {
  course: Course
  onEdit: () => void
  onDelete: () => void
}

export default function CourseCard({ course, onEdit, onDelete }: CourseCardProps) {
  const pathname = usePathname();
  return (
    
    <Card className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <Link href={`${pathname}/${course._id}`} className="block">
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-500 space-y-1">
          <p> Teachers: {course.teachers?.length ?? 0}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between mt-2">
        <Button size="sm" variant="outline" onClick={onEdit}>Edit</Button>
        <Button size="sm" variant="destructive" onClick={onDelete}>Delete</Button>
      </CardFooter>
      </Link>
    </Card>
  )
}