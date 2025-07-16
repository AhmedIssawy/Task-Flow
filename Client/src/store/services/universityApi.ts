import { createApi } from '@reduxjs/toolkit/query/react';
import { University } from '../types/university';
import { Student } from '../types/student';
import { Teacher } from '../types/teacher';
import { baseQueryWithErrorHandling } from '@/lib/baseQueryWithErrorHandling';



export const universityApi = createApi({
  reducerPath: 'universityApi',
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({
    // GET /universities?page=1
    getUniversitiesPage: builder.query<University[], number | void>({
      query: (page = 1) => `/universities?page=${page}`,
    }),

    // GET /universities/:universityId
    getUniversityById: builder.query<University, string>({
      query: (universityId) => `/universities/${universityId}`,
    }),

    // POST /universities
    createUniversity: builder.mutation<University, Partial<University>>({
      query: (body) => ({
        url: `/universities`,
        method: 'POST',
        body,
      }),
    }),

    // PATCH /universities
    updateUniversity: builder.mutation<{ message: string; university: University }, Partial<University> & { id: string }>({
      query: (body) => ({
        url: `/universities`,
        method: 'PATCH',
        body,
      }),
    }),

    // GET /universities/:universityId/students?page=1
    getStudentsPageOfUniversity: builder.query<Student[], { universityId: string; page?: number }>({
      query: ({ universityId, page = 1 }) => `/universities/${universityId}/students?page=${page}`,
    }),

    // GET /universities/:universityId/teachers?page=1
    getTeachersPageOfUniversity: builder.query<
      { teachers: Teacher[]; total: number },
      { universityId: string; page?: number }
    >({
      query: ({ universityId, page = 1 }) => `/universities/${universityId}/teachers?page=${page}`,
    }),
  }),
});

export const {
  useGetUniversitiesPageQuery,
  useGetUniversityByIdQuery,
  useCreateUniversityMutation,
  useUpdateUniversityMutation,
  useGetStudentsPageOfUniversityQuery,
  useGetTeachersPageOfUniversityQuery,
} = universityApi;
