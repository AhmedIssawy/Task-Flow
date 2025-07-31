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
  const totalPages: number = studentsQueryResult?.data?.pagination?.totalPages || 0;

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

        <div className="mt-4 text-center space-y-6 mx-4 flex justify-between items-center flex-wrap">
          <span className="">
            Show
            <CustomSelect
              options={[
                { value: 5 },
                { value: 10 },
                { value: 20 },
                { value: 50 },
                { value: 100 },
              ]}
              valueChangeAction={(value) => setLimit(Number(value))}
              value={limit.toString()}
            />
            Items
          </span>
          <span className="inline-flex gap-2">
            <Button
              variant="default"
              size="sm"
              onClick={() => setLimit((prev) => prev + 5)}
            >
              {'Show more'}
            </Button>
            {limit > 5 && (
              <Button
                variant="default"
                size="sm"
                onClick={() => setLimit((prev) => prev - 5)}
              >
                Show less
              </Button>
            )}
          </span>
          {totalPages > 0 && (
            <PaginationControls
              page={page}
              totalPages={totalPages}
              setPage={setPage}
              className="mx-4"
            />
          )}
        </div>
      </div>
    </>
  );
}
