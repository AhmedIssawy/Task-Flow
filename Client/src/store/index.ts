import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import { themeSlice } from './slices/themeSlice'
import { languageSlice } from './slices/languageSlice'
import { notificationSlice } from './slices/notificationSlice'
import { dashboardSlice } from './slices/dashboardSlice'

export const store = configureStore({
    reducer: {
        // Core slices
        auth: authSlice.reducer,
        theme: themeSlice.reducer,
        language: languageSlice.reducer,
        notification: notificationSlice.reducer,
        dashboard: dashboardSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
