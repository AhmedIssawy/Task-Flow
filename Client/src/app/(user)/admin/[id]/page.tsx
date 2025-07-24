'use client';

import {
  useGetStudentsPageQuery,
  useUpdateStudentMutation,
  useCreateStudentMutation,
} from '@/store/services/studentApi';
import { PaginatedTable } from '@/components/admin/PaginatedTable';
import {
  adminStudentCreateFields,
  adminStudentEditFields,
  adminTeacherCreateFields,
  adminTeacherEditFields,
  adminTeachersTableData,
} from '@/constants/adminTableData';

import type { Student } from '@/store/types/student';
import { useState } from 'react';
import PaginationControls from '@/components/tables/PaginatedControls';
import { useDeleteTeacherMutation } from '@/store/services/teacherApi';

export default function AdminDashboard() {
  const [page, setPage] = useState(1);
  const teachersQueryResult = useGetStudentsPageQuery({ page, limit: 10 });
  const totalPages: number = teachersQueryResult?.data?.totalPages || 0;

  return (
    <>
      <div className="w-full space-y-4 mt-4">
        <PaginatedTable
          queryResult={teachersQueryResult}
          dataKey="students"
          columns={adminTeachersTableData}
          className="mx-4"
          enableActions
          deleteHook={useDeleteTeacherMutation}
          editHook={useUpdateStudentMutation}
          editableFields={adminTeacherEditFields}
          createHook={useCreateStudentMutation}
          createFields={adminTeacherCreateFields}
        />
        {totalPages && (
          <PaginationControls
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            className="mx-4"
          />
        )}
      </div>
    </>
  );
}
