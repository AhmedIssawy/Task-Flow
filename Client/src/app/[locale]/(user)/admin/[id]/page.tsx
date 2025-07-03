'use client';


import {
  useGetStudentsPageQuery,
  useDeleteStudentMutation,
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
    />
      
    </>
  );
}
