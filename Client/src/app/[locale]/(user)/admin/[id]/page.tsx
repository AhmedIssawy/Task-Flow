'use client';

import {
  useGetStudentsPageQuery,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
  useCreateStudentMutation,
} from '@/store/services/studentApi';
import { PaginatedTable } from '@/components/admin/PaginatedTable';
import { adminStudentsTableData } from '@/constants/adminTableData';

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
        editableFields={[
          { label: 'Email', key: 'email', type: 'email' },
          { label: 'Name', key: 'name' },
        ]}
        createHook={useCreateStudentMutation}
      />
    </>
  );
}
