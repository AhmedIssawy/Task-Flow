'use client';

import {
  useGetStudentsPageQuery,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
  useCreateStudentMutation,
} from '@/store/services/studentApi';
import { PaginatedTable } from '@/components/admin/PaginatedTable';
import { adminStudentCreateFields, adminStudentEditFields, adminStudentsTableData } from '@/constants/adminTableData';

import type { Student } from '@/store/types/student';

export default function AdminDashboard() {
  return (
    <>
      <PaginatedTable<Student>
        queryHook={useGetStudentsPageQuery}
        dataKey="students"
        columns={adminStudentsTableData}
        enableActions
        deleteHook={useDeleteStudentMutation}
        editHook={useUpdateStudentMutation}
        editableFields={adminStudentEditFields}
        createHook={useCreateStudentMutation}
        createFields={adminStudentCreateFields}
      />
    </>
  );
}
