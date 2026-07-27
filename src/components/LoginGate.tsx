// Single-user mode: employee logins were removed.
// A fixed local session is used so existing data calls keep working.

const STORAGE_KEY = "wallet:session";
export const DISABLED_KEY = "wallet:collectors:disabled";

export const SINGLE_USER_ID = "666666";

export type Session = {
  role: "collector" | "admin";
  employeeId: string;
  name?: string;
  supervisor?: string;
  loginAt: string;
};

const SINGLE_USER_SESSION: Session = {
  role: "admin",
  employeeId: SINGLE_USER_ID,
  name: "المستخدم",
  loginAt: new Date(0).toISOString(),
};

export function getSession(): Session | null {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SINGLE_USER_SESSION));
    } catch {}
  }
  return SINGLE_USER_SESSION;
}

// Kept as a no-op for compatibility: there is no login anymore.
export function clearSession() {}

export default function LoginGate({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
