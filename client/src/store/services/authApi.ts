import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithErrorHandling } from '@/lib/baseQueryWithErrorHandling';
import { getAuthApiUrl } from '@/lib/api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithErrorHandling(
    getAuthApiUrl()
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
