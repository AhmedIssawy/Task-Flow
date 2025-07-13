'use client';

import {
  useDeleteStudentMutation,
  useUpdateStudentMutation,
  useCreateStudentMutation,
} from '@/store/services/studentApi';
import { PaginatedTable } from '@/components/admin/PaginatedTable';
import {
  adminStudentCreateFields,
  adminStudentEditFields,
  adminTeachersTableData,
} from '@/constants/adminTableData';

import { useState } from 'react';
import PaginationControls from '@/components/tables/PaginatedControls';
import { useGetTeachersPageQuery } from '@/store/services/teacherApi';

export default function AdminDashboard() {
  const [page, setPage] = useState(1);
  const teachersQueryResult = useGetTeachersPageQuery( page );
  const totalPages: number = teachersQueryResult?.data?.totalPages || 0;

  return (
    <>
      <div className="w-full space-y-4 mt-4">
        <PaginatedTable
          queryResult={teachersQueryResult}
          dataKey="teachers"
          columns={adminTeachersTableData}
          className="mx-4"
          enableActions
          deleteHook={useDeleteStudentMutation}
          editHook={useUpdateStudentMutation}
          editableFields={adminStudentEditFields}
          createHook={useCreateStudentMutation}
          createFields={adminStudentCreateFields}
        />
        {totalPages > 0 && (
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
