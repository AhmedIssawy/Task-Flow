import { createApi } from '@reduxjs/toolkit/query/react';
import { Teacher, PaginatedTeacherResponse } from '../types/teacher';
import { baseQueryWithErrorHandling } from '@/lib/baseQueryWithErrorHandling';


export const teacherApi = createApi({
  reducerPath: 'teacherApi',
  baseQuery: baseQueryWithErrorHandling(),
  endpoints: (builder) => ({
    // GET /teachers?page=1
    getTeachersPage: builder.query<PaginatedTeacherResponse, { page?: number; limit?: number }>({
      query: ({page = 1, limit = 40}) => `/teachers?page=${page}&limit=${limit}`,
    }),

    // GET /teachers/:teacherId
    getTeacherById: builder.query<Teacher, string>({
      query: (teacherId) => `/teachers/${teacherId}`,
    }),

    // POST /teachers
    createTeacher: builder.mutation<
      { teacher: Teacher; message: string },
      Omit<Teacher, '_id' | 'id' | 'courses'> & { password: string; courses?: string[] }
    >({
      query: (body) => ({
        url: `/teachers`,
        method: 'POST',
        body,
      }),
    }),

    // PATCH /teachers/:id (or _id)
    updateTeacher: builder.mutation<
      { teacher: Teacher; message: string },
      Partial<Teacher> & { password?: string; id?: string; _id?: string }
    >({
      query: (body) => ({
        url: body.id ? `/teachers/${body.id}` : `/teachers`,
        method: 'PATCH',
        body,
      }),
    }),

    // DELETE /teachers/:id or {_id} in body
    deleteTeacher: builder.mutation<{ message: string }, { id?: string; _id?: string }>({
      query: ({ id, _id }) => ({
        url: id ? `/teachers/${id}` : `/teachers`,
        method: 'DELETE',
        body: id ? undefined : { _id },
      }),
    }),
  }),
});

export const {
  useGetTeachersPageQuery,
  useGetTeacherByIdQuery,
  useCreateTeacherMutation,
  useUpdateTeacherMutation,
  useDeleteTeacherMutation,
} = teacherApi;