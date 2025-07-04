import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Department } from '../types/department';

export const departmentApi = createApi({
  reducerPath: 'departmentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    // GET /departments/:collegeId?page=1&limit=40
    getDepartmentsPage: builder.query<Department[], { collegeId: string; page?: number; limit?: number }>({
      query: ({ collegeId, page = 1, limit = 40 }) =>
        `/departments/${collegeId}?page=${page}&limit=${limit}`,
    }),

    // GET /departments/:id
    getDepartmentById: builder.query<Department, string>({
      query: (id) => `/departments/${id}`,
    }),

    // POST /departments/:universityId/:collegeId
    createDepartment: builder.mutation<
      Department,
      {
        universityId: string;
        collegeId: string;
        body: Omit<Department, '_id' | 'collegeId' | 'universityId'>;
      }
    >({
      query: ({ universityId, collegeId, body }) => ({
        url: `/departments/${universityId}/${collegeId}`,
        method: 'POST',
        body,
      }),
    }),

    // PATCH /departments
    updateDepartment: builder.mutation<Department, Partial<Department> & { id: string }>({
      query: ({ id, ...rest }) => ({
        url: `/departments`,
        method: 'PATCH',
        body: { id, ...rest },
      }),
    }),

    // DELETE /departments/:id
    deleteDepartment: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/departments/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetDepartmentsPageQuery,
  useGetDepartmentByIdQuery,
  useCreateDepartmentMutation,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;