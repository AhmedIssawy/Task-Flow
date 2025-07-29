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
import CustomSelect from '@/components/dashboard/CustomSelect';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const teachersQueryResult = useGetTeachersPageQuery({page, limit});
  const totalPages: number = teachersQueryResult?.data?.pagination?.totalPages || 0;


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
