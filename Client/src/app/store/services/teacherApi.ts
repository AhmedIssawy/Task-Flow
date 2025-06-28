import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Teacher {
  _id: string;
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: 'teacher';
  courses: {
    _id: string;
    name: string;
    [key: string]: any;
  }[];
  universityId: string;
  departmentId: string;
  collegeId: string;
}


export const teacherApi = createApi({
  reducerPath: 'teacherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    // GET /teachers?page=1
    getTeachersPage: builder.query<{ teachers: Teacher[]; total: number }, number | void>({
      query: (page = 1) => `/teachers?page=${page}`,
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