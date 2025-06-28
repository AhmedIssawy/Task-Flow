'use client';

import { useGetStudentsPageQuery } from '@/app/store/services/studentApi';
import { useParams } from 'next/navigation';

export default function StudentPage() {

  const { data, isLoading } = useGetStudentsPageQuery({ page: 1, limit: 10 });
  console.log('data', data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      
    </ul>
  );
}
