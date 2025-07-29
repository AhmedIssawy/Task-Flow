'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '../ui/button'
import { Course } from '@/store/types/courses'

interface CourseCardProps {
  course: Course
  onEdit: () => void
  onDelete: () => void
}

export default function CourseCard({ course, onEdit, onDelete }: CourseCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{course.name}</CardTitle>
        <CardDescription>{course.code}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-2">
          {course.description || 'No description'}
        </p>
        <div className="text-sm text-gray-500 space-y-1">
          <p>👨‍🏫 Teachers: {course.teachers?.length ?? 0}</p>
          <p>👥 Students: {course.students?.length ?? 0}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between mt-2">
        <Button size="sm" variant="outline" onClick={onEdit}>Edit</Button>
        <Button size="sm" variant="destructive" onClick={onDelete}>Delete</Button>
      </CardFooter>
    </Card>
  )
}