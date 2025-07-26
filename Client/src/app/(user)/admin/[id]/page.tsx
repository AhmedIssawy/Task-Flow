'use client';

import { PaginatedTable } from '@/components/admin/PaginatedTable';
import {
  adminTeacherCreateFields,
  adminTeacherEditFields,
  adminTeachersTableData,
} from '@/constants/adminTableData';

import { useState } from 'react';
import PaginationControls from '@/components/tables/PaginatedControls';
import { useCreateTeacherMutation, useDeleteTeacherMutation, useGetTeachersPageQuery, useUpdateTeacherMutation } from '@/store/services/teacherApi';

export default function AdminDashboard() {
  const [page, setPage] = useState(1);
  const teachersQueryResult = useGetTeachersPageQuery(page);
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
          deleteHook={useDeleteTeacherMutation}
          editHook={useUpdateTeacherMutation}
          editableFields={adminTeacherEditFields}
          createHook={useCreateTeacherMutation}
          createFields={adminTeacherCreateFields}
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
