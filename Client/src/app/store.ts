import { configureStore } from '@reduxjs/toolkit'

// Create a basic store structure as per GitHub instructions
export const store = configureStore({
    reducer: {
        // Will add RTK Query API slices here as needed
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
