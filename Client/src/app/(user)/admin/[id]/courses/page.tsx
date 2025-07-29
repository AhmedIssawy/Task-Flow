'use client'

import { useGetCoursesPageQuery, useCreateCourseMutation, useUpdateCourseMutation, useDeleteCourseMutation } from '@/store/services/courseApi'
import { useState } from 'react'
import CourseCard from '@/components/user/CourseCard'
import CourseFormModal from '@/components/user/CourseFormModal'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export default function CoursesPage() {
  const departmentId = "685bd15728a896bea985cf47"
  const [page, setPage] = useState(1)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingCourse, setEditingCourse] = useState(null)

  const { data, isLoading } = useGetCoursesPageQuery({ departmentId, page })
  const [createCourse] = useCreateCourseMutation()
  const [updateCourse] = useUpdateCourseMutation()
  const [deleteCourse] = useDeleteCourseMutation()

  const handleCreateOrEdit = async (course: any) => {
    try {
      if (editingCourse) {
        await updateCourse({ courseId: editingCourse._id, updates: course }).unwrap()
        toast.success('Course updated successfully')
    } else {
        await createCourse({ ...course, departmentId }).unwrap()
        toast.success('Course created successfully')
      }
    } catch {
      toast.error('An error occurred while submitting the course')
    } finally {
      setModalOpen(false)
      setEditingCourse(null)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteCourse(id).unwrap()
      toast.success('Course deleted successfully')
    } catch {
      toast.error('An error occurred while deleting the course')
    }
  }

  if (isLoading) return <div className="p-8"><Loader2 className="animate-spin" /></div>

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Courses</h2>
        <Button onClick={() => setModalOpen(true)}>+ Add Course</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.courses.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
            onEdit={() => {
              setEditingCourse(course)
              setModalOpen(true)
            }}
            onDelete={() => handleDelete(course._id)}
          />
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          disabled={!data?.pagination.hasPrevPage}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          disabled={!data?.pagination.hasNextPage}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </Button>
      </div>

      <CourseFormModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false)
          setEditingCourse(null)
        }}
        onSubmit={handleCreateOrEdit}
        initialData={editingCourse || {}}
        isEditing={!!editingCourse}
      />
    </div>
  )
}
