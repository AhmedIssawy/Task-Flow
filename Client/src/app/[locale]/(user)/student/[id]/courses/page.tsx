'use client'

import { useGetStudentCoursesQuery } from '@/store/services/studentApi'
import { Loader2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function StudentCoursesPage() {
  const { data, isLoading, error } = useGetStudentCoursesQuery("68272391943893d5e5a21e9a")

  return (
    <div className="flex-1 p-6">
      <h1 className="text-2xl font-semibold mb-6">My Courses</h1>

      {isLoading && (
        <div className="flex justify-center py-10">
          <Loader2 className="animate-spin h-6 w-6 text-muted-foreground" />
        </div>
      )}

      {error && (
        <div className="text-center text-red-500">Failed to load courses.</div>
      )}

      {!isLoading && data?.courses?.length === 0 && (
        <div className="text-center text-muted-foreground">
          You are not enrolled in any courses yet.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.courses?.map((course) => (
          <Card key={course._id} className="hover:shadow-amber-50 hover:shadow-sm transition-shadow cursor-pointer border">
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">{course.name}</h2>
                <Badge variant="outline">Course</Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                Course ID: {course._id.slice(-8)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
