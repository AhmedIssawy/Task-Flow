import { createApi } from '@reduxjs/toolkit/query/react';
import { Admin, PaginatedAdmins } from '../types/admin';
import { baseQueryWithErrorHandling } from '@/lib/baseQueryWithErrorHandling';

export const adminApi = createApi({
  reducerPath: 'adminApi',
  baseQuery: baseQueryWithErrorHandling,
  tagTypes: ['Admin'],
  endpoints: (builder) => ({
    getAdminById: builder.query<Admin, string>({
      query: (id) => `/admin/${id}`,
      providesTags: (result, error, id) => [{ type: 'Admin', id }],
    }),

    getPageOfAdmins: builder.query<PaginatedAdmins, number | void>({
      query: (page = 1) => `/admin?page=${page}`,
      providesTags: ['Admin'],
    }),

    createAdmin: builder.mutation<Admin, { name: string; password: string }>({
      query: (admin) => ({
        url: '/admin',
        method: 'POST',
        body: admin,
      }),
      invalidatesTags: ['Admin'],
    }),

    updateAdmin: builder.mutation<
      Admin,
      { id: string; name?: string; password?: string }
    >({
      query: (updateData) => ({
        url: '/admin',
        method: 'PUT',
        body: updateData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Admin', id }],
    }),

    deleteAdmin: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/admin/admin/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Admin', id }],
    }),
  }),
});

export const {
  useGetAdminByIdQuery,
  useGetPageOfAdminsQuery,
  useCreateAdminMutation,
  useUpdateAdminMutation,
  useDeleteAdminMutation,
} = adminApi;
