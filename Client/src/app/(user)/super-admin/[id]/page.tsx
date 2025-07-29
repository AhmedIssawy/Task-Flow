'use client';

import {

} from '@/store/services/studentApi';
import { PaginatedTable } from '@/components/admin/PaginatedTable';

import { useState } from 'react';
import PaginationControls from '@/components/tables/PaginatedControls';
import { useCreateAdminMutation, useDeleteAdminMutation, useGetPageOfAdminsQuery, useUpdateAdminMutation } from '@/store/services/adminApi';
import { adminAdminCreateFields, adminAdminEditFields, adminAdminsTableData } from '@/constants/superAdminTableData';

export default function AdminDashboard() {
  const [page, setPage] = useState(1);
  const adminsQueryResult = useGetPageOfAdminsQuery(page);
  const totalPages: number = adminsQueryResult?.data?.pagination?.totalPages || 0;

  return (
    <>
      <div className="w-full space-y-4 mt-4">
        <PaginatedTable
          queryResult={adminsQueryResult}
          dataKey="admins"
          columns={adminAdminsTableData}
          className="mx-4"
          enableActions
          deleteHook={useDeleteAdminMutation}
          editHook={useUpdateAdminMutation}
          editableFields={adminAdminEditFields}
          createHook={useCreateAdminMutation}
          createFields={adminAdminCreateFields}
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