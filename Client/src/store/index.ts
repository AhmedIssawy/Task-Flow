import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './services/authApi'
import { studentApi } from './services/studentApi'
import { adminApi } from './services/adminApi'
import { collegeApi } from './services/collegeApi'
import { departmentApi } from './services/departmentApi'
import { teacherApi } from './services/teacherApi'
import authReducer from './slices/authSlice'

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
