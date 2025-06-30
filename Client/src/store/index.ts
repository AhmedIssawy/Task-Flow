import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authApi } from './services/authApi'
import { studentApi } from './services/studentApi'
import { adminApi } from './services/adminApi'
import { collegeApi } from './services/collegeApi'
import { departmentApi } from './services/departmentApi'
import { teacherApi } from './services/teacherApi'
import authReducer from './slices/authSlice'


// redux state persistence


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['id', 'mongoId', 'role'],
};


const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)



export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [collegeApi.reducerPath]: collegeApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [teacherApi.reducerPath]: teacherApi.reducer,
    auth: persistedAuthReducer,
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
