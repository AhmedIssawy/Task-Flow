// store/slices/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum RoleEnum {
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER',
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN',
}

type Role = keyof typeof RoleEnum;

interface AuthState {
  id: string | null;
  role: Role | null;
}

const initialState: AuthState = {
  id: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.id = action.payload.id;
      state.role = action.payload.role;
    },
    clearAuth: (state) => {
      state.id = null;
      state.role = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
