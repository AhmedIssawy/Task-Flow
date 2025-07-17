'use client';

import { useState } from 'react';
import { useGetDepartmentsPageQuery } from '@/store/services/departmentApi';
import { PaginatedTable } from '@/components/admin/PaginatedTable';
import { adminDepartmentsTableData } from '@/constants/adminTableData';
import PaginationControls from '@/components/tables/PaginatedControls';

export default function DepartmentsPage() {
  const [page, setPage] = useState(1);

  // Hardcoded for now — replace with dynamic values later
  const universityId = '685b0635a4b32e07ca4e97e6'; //todo replace with dynamic student ID
  const collegeId = '685b113ccce35d1be7fb42d6'; //todo replace with dynamic student ID

  const departmentsQuery = useGetDepartmentsPageQuery({
    universityId,
    collegeId,
    page,
    limit: 10,
  });

  const totalPages: number = departmentsQuery?.data?.totalPages || 0;

  return (
    <div className="w-full mt-4 space-y-4">
      <PaginatedTable
        queryResult={{
          ...departmentsQuery,
          data: { departments: departmentsQuery.data },
        }}
        dataKey="departments"
        columns={adminDepartmentsTableData}
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
