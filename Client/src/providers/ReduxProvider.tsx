"use client";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// Temporary reducer to fix the empty reducer object error
const tempReducer = (state = {}) => state;

export const store = configureStore({
  reducer: {
    temp: tempReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
