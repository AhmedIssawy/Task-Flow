import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@/redux/slices/authSlice'

import { authApi } from '@/redux/api/authApi'
import { studentApi } from '@/redux/api/studentApi'
import { adminApi } from '@/redux/api/adminApi'
import { collegeApi } from '@/redux/api/collegeApi'
import { departmentApi } from '@/redux/api/departmentApi'
import { teacherApi } from '@/redux/api/teacherApi'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [collegeApi.reducerPath]: collegeApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [teacherApi.reducerPath]: teacherApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    })
      .concat(authApi.middleware)
      .concat(studentApi.middleware)
      .concat(adminApi.middleware)
      .concat(collegeApi.middleware)
      .concat(departmentApi.middleware)
      .concat(teacherApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

// ✅ Typed hooks (optional, best practice)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
