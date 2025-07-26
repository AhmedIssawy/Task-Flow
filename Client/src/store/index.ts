import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authApi } from '@/store/services/authApi'
import { studentApi } from '@/store/services/studentApi'
import { adminApi } from '@/store/services/adminApi'
import { collegeApi } from '@/store/services/collegeApi'
import { departmentApi } from '@/store/services/departmentApi'
import { teacherApi } from '@/store/services/teacherApi'
import authReducer from '@/store/slices/authSlice'
import userReducer from '@/store/slices/userSlice'


// redux state persistence


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['id', 'mongoId', 'role'],
};

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['name', 'email']
}

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [collegeApi.reducerPath]: collegeApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [teacherApi.reducerPath]: teacherApi.reducer,
    auth: persistedAuthReducer,
    user: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
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
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
