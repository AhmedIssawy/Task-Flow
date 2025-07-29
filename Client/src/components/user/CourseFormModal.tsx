'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'
import { Course } from '@/store/types/student'

interface Props {
  open: boolean
  onClose: () => void
  onSubmit: (data: Partial<Course>) => void
  initialData?: Partial<Course>
  isEditing?: boolean
}

export default function CourseFormModal({
  open,
  onClose,
  onSubmit,
  initialData = {},
  isEditing = false,
}: Props) {
  const [form, setForm] = useState<Partial<Course>>(initialData)

  useEffect(() => {
    setForm(initialData)
  }, [initialData])

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Course' : 'Create Course'}</DialogTitle>
        </DialogHeader>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit(form)
          }}
        >
          <Input
            placeholder="Course Name"
            value={form.name || ''}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <Input
            placeholder="Course Code"
            value={form.code || ''}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
            required
          />
          <Input
            placeholder="Description"
            value={form.description || ''}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <DialogFooter>
            <Button type="submit">{isEditing ? 'Update' : 'Create'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}