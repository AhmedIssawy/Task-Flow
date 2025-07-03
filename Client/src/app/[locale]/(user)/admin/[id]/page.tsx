'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import {
  useGetStudentsPageQuery,
  useDeleteStudentMutation,
} from '@/store/services/studentApi';
import { PaginatedTable } from '@/components/admin/PaginatedTable';
import { adminStudentsTableData } from '@/constants/adminTableData';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import type { Student } from '@/store/types/student';

export default function AdminDashboard() {
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);

  const [deleteStudent, { isLoading: isDeleting }] = useDeleteStudentMutation();

  const handleDelete = async () => {
    if (!studentToDelete) return;
    try {
      await deleteStudent(studentToDelete._id!).unwrap();
      toast.success('Student deleted successfully');
      setStudentToDelete(null);
    } catch (err) {
      toast.error('Failed to delete student');
    }
  };

  return (
    <>
      <PaginatedTable
        queryHook={useGetStudentsPageQuery}
        dataKey="students"
        columns={adminStudentsTableData}
        enableActions
        onDelete={(student) => setStudentToDelete(student)}
        // onEdit={() => {}}
      />

      <AlertDialog
        open={!!studentToDelete}
        onOpenChange={() => setStudentToDelete(null)}
      >
        <AlertDialogContent className="bg-black border border-border text-foreground shadow-xl sm:max-w-md rounded-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete{' '}
              <span className="font-medium text-destructive">
                {studentToDelete?.name}
              </span>{' '}
              and cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-muted hover:bg-muted/80" disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90" onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
