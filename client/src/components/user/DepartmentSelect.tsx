'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useGetDepartmentsPageQuery } from '@/store/services/departmentApi';
import { Skeleton } from '@/components/ui/skeleton';

interface DepartmentSelectProps {
  universityId: string;
  collegeId: string;
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function DepartmentSelect({
  universityId,
  collegeId,
  value,
  onChange,
  placeholder = 'Select department',
}: DepartmentSelectProps) {
  const { data, isLoading } = useGetDepartmentsPageQuery({
    universityId,
    collegeId,
    page: 1,
    limit: 100, // dont need pagination
  });

  if (isLoading) {
    return <Skeleton className="h-10 w-full rounded-md" />;
  }

  const departments = Array.isArray(data?.data) ? data.data : [];

  return (
    <div className="max-w-fit">
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {(departments || []).map((dept) => (
              <SelectItem key={dept._id} value={dept._id}>
                {dept.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
    </div>
  );
}
