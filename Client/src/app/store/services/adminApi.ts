import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Admin {
  id: string;
  name: string;
  role: string;
}

interface PaginatedAdmins {
  admins: Admin[];
  total: number;
}

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
    credentials: "include",
  }),
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    getAdminById: builder.query<Admin, string>({
      query: (id) => `/admin/${id}`,
      providesTags: (result, error, id) => [{ type: "Admin", id }],
    }),

    getPageOfAdmins: builder.query<PaginatedAdmins, number | void>({
      query: (page = 1) => `/admin?page=${page}`,
      providesTags: ["Admin"],
    }),

    createAdmin: builder.mutation<Admin, { name: string; password: string }>({
      query: (admin) => ({
        url: "/admin",
        method: "POST",
        body: admin,
      }),
      invalidatesTags: ["Admin"],
    }),

    updateAdmin: builder.mutation<
      Admin,
      { id: string; name?: string; password?: string }
    >({
      query: (updateData) => ({
        url: "/admin",
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Admin", id }],
    }),

    deleteAdmin: builder.mutation<{ message: string }, { id: string }>({
      query: ({ id }) => ({
        url: "/admin",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Admin", id }],
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
