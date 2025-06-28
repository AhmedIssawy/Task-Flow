'use client';

import { useAppSelector } from '@/app/store/hooks';
import { useGetStudentByIdQuery } from '@/app/store/services/studentApi';
import { useParams } from 'next/navigation';

export default function StudentPage() {
  const mongoId = useAppSelector((state) => state.auth.mongoId);
  const { data, isLoading } = useGetStudentByIdQuery(mongoId);
  console.log('data', data);

  if (isLoading) return <div>Loading...</div>;

  return <ul></ul>;
}
