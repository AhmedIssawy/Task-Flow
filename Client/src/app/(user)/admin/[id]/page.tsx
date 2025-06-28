'use client';

import { useParams } from 'next/navigation';
import { useGetAdminByIdQuery } from '@/app/store/services/adminApi';

export default function AdminPage() {
  const { id } = useParams();
  console.log('Admin ID:', id);
  
  const { data: admin, isLoading, error } = useGetAdminByIdQuery("ADMIN-" + id);
  console.log('admin id',"ADMIN-" + id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load admin</div>;

  return (
    <div>
      <h1>Welcome, {admin.name}</h1>
      <p>Your ID: {admin.id}</p>
    </div>
  );
}