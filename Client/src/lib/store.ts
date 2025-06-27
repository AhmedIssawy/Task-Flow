import { configureStore } from '@reduxjs/toolkit'

// Basic action type
interface AppAction {
    type: string
    payload?: unknown
}

// Basic reducer for initial state
const appReducer = (state = { initialized: true }, action: AppAction) => {
    switch (action.type) {
        default:
            return state
    }
}

// Create a basic store structure as per GitHub instructions
export const store = configureStore({
    reducer: {
        app: appReducer,
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
