import { createApi } from '@reduxjs/toolkit/query/react';
import { Department, DepartmentApiResponse, PaginatedDepartmentsResponse } from '../types/department';
import { baseQueryWithErrorHandling } from '@/lib/baseQueryWithErrorHandling';

export const departmentApi = createApi({
  reducerPath: 'departmentApi',
  baseQuery: baseQueryWithErrorHandling(),
  tagTypes: ['Department'],
  endpoints: (builder) => ({
    // GET /departments/:collegeId?page=1&limit=40
    getDepartmentsPage: builder.query<
      PaginatedDepartmentsResponse,
      { universityId: string; collegeId: string; page?: number; limit?: number }
    >({
      query: ({ universityId, collegeId, page = 1, limit = 40 }) =>
        `/universities/${universityId}/colleges/${collegeId}/departments?page=${page}&limit=${limit}`,
      transformResponse: (response: DepartmentApiResponse) => response.data,
      providesTags: ['Department'],
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
    updateDepartment: builder.mutation<
      Department,
      Partial<Department> & { id: string }
    >({
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
