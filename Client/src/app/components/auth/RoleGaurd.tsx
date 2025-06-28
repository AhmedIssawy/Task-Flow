import { ReactNode } from "react";

type RoleGuardProps = {
  allowedRoles: string[];
  children: ReactNode;
};

// This is just a placeholder for now to organize the structure and keep HOC in mind


export default function RoleGuard({ allowedRoles, children }: RoleGuardProps) {
  const role = "admin"; // temporary mock

  if (!allowedRoles.includes(role)) {
    return <div className="p-4 text-sm text-muted-foreground">Access denied</div>;
  }

  return <>{children}</>;
}