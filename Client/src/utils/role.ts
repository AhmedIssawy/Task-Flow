import { RoleEnum } from "../store/slices/authSlice";

export type Role = keyof typeof RoleEnum;

export function isValidRole(value: string): value is Role {
  return Object.keys(RoleEnum).includes(value.toUpperCase());
}

export function normalizeRole(value: string): Role | null {
  const normalized = value.toUpperCase().replace(/-/g, '_');
  return isValidRole(normalized) ? (normalized as Role) : null;
}