'use client';

import {

} from '@/store/services/studentApi';
import { PaginatedTable } from '@/components/admin/PaginatedTable';
import {
  adminStudentsTableData,
} from '@/constants/adminTableData';

import { useState } from 'react';
import PaginationControls from '@/components/tables/PaginatedControls';
import { useDeleteAdminMutation, useGetPageOfAdminsQuery } from '@/store/services/adminApi';

export default function AdminDashboard() {
  const [page, setPage] = useState(1);
  const adminsQueryResult = useGetPageOfAdminsQuery(page);
  const totalPages: number = adminsQueryResult?.data?.totalPages || 0;

  return (
    <>
      <div className="w-full space-y-4 mt-4">
        <PaginatedTable
          queryResult={adminsQueryResult}
          dataKey="admins"
          columns={adminStudentsTableData}
          className="mx-4"
          enableActions
          deleteHook={useDeleteAdminMutation}
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