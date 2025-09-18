// src/lib/auth.ts
export type Session = {
  user: { id: string; email: string };
  token: string;
  /** epoch milliseconds */
  expiresAt: number;
};

import { compareSync } from "bcryptjs";

const ADMIN_EMAIL_ENV = import.meta.env.VITE_ADMIN_EMAIL || "";
function getAdminEmail(): string {
  if (ADMIN_EMAIL_ENV && ADMIN_EMAIL_ENV.trim().length > 0) return ADMIN_EMAIL_ENV.trim();
  try {
    const stored = localStorage.getItem("admin_email");
    return stored ? stored : "";
  } catch {
    return "";
  }
}
function getAdminPasswordHash(): string {
  // Prefer env at build-time, fall back to runtime storage for resilience
  const fromEnv = import.meta.env.VITE_ADMIN_PASSWORD_HASH as string | undefined;
  if (fromEnv && fromEnv.trim().length > 0) return fromEnv.trim();
  try {
    const fromStorage = localStorage.getItem("admin_password_hash");
    return fromStorage ?? "";
  } catch {
    return "";
  }
}

function getAdminPasswordPlain(): string {
  const fromEnv = (import.meta.env as any).VITE_ADMIN_PASSWORD_PLAIN as string | undefined;
  if (fromEnv && fromEnv.trim().length > 0) return fromEnv.trim();
  try {
    const fromStorage = localStorage.getItem("admin_password_plain");
    return fromStorage ?? "";
  } catch {
    return "";
  }
}
// Session TTL (minutes)
const SESSION_TTL_MINUTES = Number(import.meta.env.VITE_SESSION_TTL_MINUTES || 60);

const STORAGE_KEYS = {
  session: "session",
  token: "bearer_token",
};

export function getSession(): Session | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.session);
    const session = raw ? (JSON.parse(raw) as Session) : null;
    if (!session) return null;
    if (Date.now() > session.expiresAt) {
      // expired
      signOut();
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function isAdmin(session: Session | null): boolean {
  if (!session) return false;
  const adminEmail = getAdminEmail();
  if (!adminEmail) {
    // If not configured, treat first signed-in email as admin (store it)
    try {
      localStorage.setItem("admin_email", session.user.email);
    } catch {}
    return true;
  }
  return session.user.email.toLowerCase() === adminEmail.toLowerCase();
}

export async function signInEmail(params: {
  email: string;
  password: string;
  rememberMe?: boolean;
}): Promise<{ error?: string }> {
  if (!params.email || !params.password) {
    return { error: "Email and password are required." };
  }
  const configuredEmail = getAdminEmail();
  if (configuredEmail && params.email.toLowerCase() !== configuredEmail.toLowerCase()) {
    return { error: "You do not have access to the admin panel." };
  }

  // Verify bcrypt hash supplied via env for now (no backend yet)
  const ADMIN_PASSWORD_HASH = getAdminPasswordHash();
  let ok = false;
  if (ADMIN_PASSWORD_HASH) {
    try {
      ok = compareSync(params.password, ADMIN_PASSWORD_HASH);
    } catch {
      ok = false;
    }
  }
  if (!ok) {
    const plain = getAdminPasswordPlain();
    if (plain) ok = params.password === plain;
  }
  if (!ok) return { error: "Invalid email or password." };

  const fakeToken = `tok_${Math.random().toString(36).slice(2)}`;
  const expiresAt = Date.now() + SESSION_TTL_MINUTES * 60 * 1000;
  const session: Session = {
    user: { id: "1", email: params.email },
    token: fakeToken,
    expiresAt,
  };

  localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session));
  localStorage.setItem(STORAGE_KEYS.token, fakeToken);

  // Seed admin email if not configured yet
  if (!ADMIN_EMAIL_ENV) {
    try {
      const current = localStorage.getItem("admin_email");
      if (!current) localStorage.setItem("admin_email", params.email);
    } catch {}
  }

  if (params.rememberMe) {
    document.cookie = `bearer_token=${fakeToken}; max-age=${60 * 60 * 24 * 7}; path=/; SameSite=Lax`;
  }
  return {};
}

export async function signOut(): Promise<void> {
  localStorage.removeItem(STORAGE_KEYS.session);
  localStorage.removeItem(STORAGE_KEYS.token);
  document.cookie = "bearer_token=; Max-Age=0; path=/; SameSite=Lax";
}

export function extendSession(): void {
  const session = getSession();
  if (!session) return;
  session.expiresAt = Date.now() + SESSION_TTL_MINUTES * 60 * 1000;
  localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session));
}

// Idle timeout helper
let idleTimer: number | undefined;
const IDLE_TIMEOUT_MINUTES = Number(import.meta.env.VITE_IDLE_TIMEOUT_MINUTES || 30);

export function startIdleTimer(onTimeout: () => void) {
  resetIdleTimer(onTimeout);
  ["mousemove", "keydown", "click", "scroll", "touchstart"].forEach((evt) => {
    window.addEventListener(evt, () => resetIdleTimer(onTimeout), { passive: true });
  });
}

function resetIdleTimer(onTimeout: () => void) {
  if (idleTimer) window.clearTimeout(idleTimer);
  idleTimer = window.setTimeout(() => {
    onTimeout();
  }, IDLE_TIMEOUT_MINUTES * 60 * 1000);
}