// src/lib/audit.ts
export type AuditEvent = {
  id: string;
  type: "login_success" | "login_failure" | "logout" | "mfa_add" | "mfa_remove" | "totp_create" | "totp_verify" | "totp_remove";
  at: number;
  detail?: string;
};

const KEY = "audit.events";

export function listEvents(): AuditEvent[] {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as AuditEvent[]) : [];
  } catch {
    return [];
  }
}

export function addEvent(ev: Omit<AuditEvent, "id" | "at"> & { at?: number }): void {
  const events = listEvents();
  events.unshift({ id: crypto.randomUUID(), at: ev.at ?? Date.now(), type: ev.type, detail: ev.detail });
  localStorage.setItem(KEY, JSON.stringify(events.slice(0, 200)));
}

export function clearEvents() {
  localStorage.removeItem(KEY);
}


