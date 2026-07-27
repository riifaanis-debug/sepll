import { useEffect, useState } from "react";

export type Permissions = {
  canView: boolean;
  canCalculate: boolean;
  canExport: boolean;
  canManage: boolean;
};

export type PermissionKey = keyof Permissions;

// Single-user mode: no employee permission management anymore.
export const ADMIN_PERMISSIONS: Permissions = {
  canView: true,
  canCalculate: true,
  canExport: true,
  canManage: true,
};

export const DEFAULT_COLLECTOR_PERMISSIONS: Permissions = ADMIN_PERMISSIONS;

export const PERMISSION_LABELS: Record<PermissionKey, string> = {
  canView: "البحث عن بيانات العملاء",
  canCalculate: "استخدام حاسبة الخصم",
  canExport: "تصدير البيانات",
  canManage: "إدارة البيانات (رفع/تعديل/حذف)",
};

export function usePermissions(): Permissions & { loading: boolean } {
  const [state] = useState<Permissions & { loading: boolean }>({
    ...ADMIN_PERMISSIONS,
    loading: false,
  });
  useEffect(() => {}, []);
  return state;
}
