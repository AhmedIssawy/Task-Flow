'use client';

import {
  useGetStudentsPageQuery,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
  useCreateStudentMutation,
} from '@/store/services/studentApi';
import { PaginatedTable } from '@/components/admin/PaginatedTable';
import {
  adminStudentCreateFields,
  adminStudentEditFields,
  adminStudentsTableData,
} from '@/constants/adminTableData';

import { useState } from 'react';
import PaginationControls from '@/components/tables/PaginatedControls';

export default function AdminDashboard() {
  const [page, setPage] = useState(1);
  const studentsQueryResult = useGetStudentsPageQuery({ page, limit: 10 });
  const totalPages: number = studentsQueryResult?.data?.totalPages || 0;

  return (
    <>
      <div className="w-full space-y-4 mt-4">
        <PaginatedTable
          queryResult={studentsQueryResult}
          dataKey="students"
          columns={adminStudentsTableData}
          className="mx-4"
          enableActions
          deleteHook={useDeleteStudentMutation}
          editHook={useUpdateStudentMutation}
          editableFields={adminStudentEditFields}
          createHook={useCreateStudentMutation}
          createFields={adminStudentCreateFields}
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
