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
import { Button } from '@/components/ui/button';
import CustomSelect from '@/components/dashboard/CustomSelect';

export default function AdminDashboard() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const studentsQueryResult = useGetStudentsPageQuery({ page, limit });
  const totalPages: number = studentsQueryResult?.data?.totalPages || 0;

  const toggleLimit = () => {
    setLimit((prev) => (prev === 5 ? 10 : 5));
  };

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

        <div className="mt-4 text-center flex">
          <span className="mr-auto">
            Show
            <CustomSelect
              options={[{ value: 10 }, { value: 20 }, { value: 50 }, { value: 100 }]}
              valueChangeAction={(value) => setLimit(Number(value))}
            />
            Items
          </span>
          <Button variant="default" size="sm" onClick={toggleLimit}>
            {limit === 5 ? 'Show more' : 'Show less'}
          </Button>
        </div>

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
