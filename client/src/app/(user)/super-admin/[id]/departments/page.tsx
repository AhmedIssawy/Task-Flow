'use client';

import { useState } from 'react';
import {
  useCreateDepartmentMutation,
  useDeleteDepartmentMutation,
  useGetDepartmentsPageQuery,
  useUpdateDepartmentMutation,
} from '@/store/services/departmentApi';
import { PaginatedTable } from '@/components/admin/PaginatedTable';
import {
  adminDepartmentCreateFields,
  adminDepartmentEditFields,
  adminDepartmentsTableData,
} from '@/constants/adminTableData';
import PaginationControls from '@/components/tables/PaginatedControls';

export default function DepartmentsPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  // Hardcoded for now — replace with dynamic values later
  const universityId = '685b0635a4b32e07ca4e97e6'; //todo replace with dynamic student ID
  const collegeId = '685b113ccce35d1be7fb42d6'; //todo replace with dynamic student ID

  const departmentsQuery = useGetDepartmentsPageQuery({
    universityId,
    collegeId,
    page,
    limit,
  });
console.log('DepartmentsPage departmentsQuery:', departmentsQuery);

  const totalPages: number = departmentsQuery?.data?.pagination?.totalPages || 0;

  return (
    <div className="w-full mt-4 space-y-4">
       <PaginatedTable
        queryResult={departmentsQuery}
        dataKey="departments"
        columns={adminDepartmentsTableData}
        className="mx-4"
        enableActions
        deleteHook={useDeleteDepartmentMutation}
        createHook={useCreateDepartmentMutation}
        createFields={adminDepartmentCreateFields}
        editHook={useUpdateDepartmentMutation}
        editableFields={adminDepartmentEditFields}
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
