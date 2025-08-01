'use client';

import { useState } from 'react';
import { useCreateCollegeMutation, useGetCollegesPageQuery, useUpdateCollegeMutation } from '@/store/services/collegeApi';
import { PaginatedTable } from '@/components/admin/PaginatedTable';
import PaginationControls from '@/components/tables/PaginatedControls';
import { adminCollegeCreateFields, adminCollegeEditFields, adminCollegesTableData } from '@/constants/adminTableData';
import type { College } from '@/store/types/college';

const UNIVERSITY_ID = '685b0635a4b32e07ca4e97e6'; // TODO: replace with dynamic ID when ready

export default function AdminCollegesPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const collegesQueryResult = useGetCollegesPageQuery({
    universityId: UNIVERSITY_ID,
    page,
    limit,
  });

  const totalPages: number = collegesQueryResult?.data?.pagination?.totalPages || 0;
  console.log('Colleges Query Result:', collegesQueryResult.data);

  return (
    <div className="w-full space-y-4 mt-4">
      <PaginatedTable<College>
        queryResult={collegesQueryResult}
        dataKey="colleges"
        columns={adminCollegesTableData}
        className="mx-4"
        enableActions
        createHook={useCreateCollegeMutation}
        createFields={adminCollegeCreateFields}
        editHook={useUpdateCollegeMutation}
        editableFields={adminCollegeEditFields}
      />

      <PaginationControls
        page={page}
        totalPages={totalPages}
        setPage={setPage}
        limit={limit}
        setLimit={setLimit}
        showLimitControls={true}
        showMoreLessControls={true}
        className="mx-4"
      />
    </div>
  );
}
