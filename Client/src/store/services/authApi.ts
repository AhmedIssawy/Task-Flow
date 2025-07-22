import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithErrorHandling } from '@/lib/baseQueryWithErrorHandling';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithErrorHandling(
    process.env.NEXT_PUBLIC_API_URL_AUTH || 'http://localhost:5000'
  ),
  endpoints: (builder) => ({
    getMe: builder.query<{ role: string; id: string }, void>({
      query: () => ({
        url: '/auth',
        suppress401: true,
      }),
    }),

    login: builder.mutation<
      {
        role: string;
        data: { id: string; _id: string; name: string; email: string };
      },
      { id: string; password: string }
    >({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetMeQuery, useLoginMutation, useLogoutMutation } = authApi;
