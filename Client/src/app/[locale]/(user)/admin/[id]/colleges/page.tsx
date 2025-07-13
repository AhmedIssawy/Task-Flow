'use client';

import { useState } from 'react';
import { useGetCollegesPageQuery } from '@/store/services/collegeApi';
import { PaginatedTable } from '@/components/admin/PaginatedTable';
import PaginationControls from '@/components/tables/PaginatedControls';
import { adminCollegesTableData } from '@/constants/adminTableData';
import type { College } from '@/store/types/college';

const UNIVERSITY_ID = '685b0635a4b32e07ca4e97e6'; // TODO: replace with dynamic ID when ready

export default function AdminCollegesPage() {
  const [page, setPage] = useState(1);
  const limit = 10;

  const collegesQueryResult = useGetCollegesPageQuery({
    universityId: UNIVERSITY_ID,
    page,
    limit,
  });

  const totalPages: number = collegesQueryResult?.data?.totalPages || 0;
  console.log('Colleges Query Result:', collegesQueryResult.data);

  return (
    <div className="w-full space-y-4 mt-4">
      <PaginatedTable<College>
        queryResult={collegesQueryResult}
        dataKey="colleges"
        columns={adminCollegesTableData}
        className="mx-4"
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
  );
}
