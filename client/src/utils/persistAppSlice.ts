import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { Reducer } from '@reduxjs/toolkit'

export function persistApiSlice({
  reducer,
  reducerPath,
}: {
  reducer: Reducer
  reducerPath: string
}) {
  return persistReducer(
    {
      key: reducerPath,
      storage,
    },
    reducer
  )
}