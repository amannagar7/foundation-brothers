// src/lib/mfa.ts
// Lightweight client-only scaffolding for MFA. No server verification yet.

export type WebAuthnDevice = {
  id: string; // random id (not real credential id yet)
  label: string;
  addedAt: number; // epoch ms
};

const STORAGE_KEYS = {
  webauthn: "mfa.webauthn",
  settings: "mfa.settings",
  totp: "mfa.totp",
};

export type MfaSettings = {
  requireWebAuthn: boolean;
};

function readArray<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T[]) : [];
  } catch {
    return [];
  }
}

function writeArray<T>(key: string, value: T[]): void {
  localStorage.setItem(key, JSON.stringify(value));
}

export function listWebAuthnDevices(): WebAuthnDevice[] {
  return readArray<WebAuthnDevice>(STORAGE_KEYS.webauthn);
}

export async function registerWebAuthnDevice(label: string): Promise<{ ok: boolean; error?: string }>{
  try {
    // Attempt a minimal navigator.credentials.create() call (may fail without server params)
    // We treat errors as acceptable in scaffold and store a simulated device instead.
    const supports = typeof window !== "undefined" && !!(navigator as any).credentials;
    if (supports) {
      try {
        await (navigator as any).credentials.create?.({ publicKey: { challenge: new Uint8Array(16), rp: { name: "Foundation Brothers" }, user: { id: new Uint8Array(16), name: "admin", displayName: "Admin" }, pubKeyCredParams: [{ alg: -7, type: "public-key" }] } });
      } catch {
        // ignore; we still store locally as scaffold
      }
    }
    const devices = listWebAuthnDevices();
    devices.push({ id: crypto.randomUUID(), label: label || `Security key ${devices.length + 1}`, addedAt: Date.now() });
    writeArray(STORAGE_KEYS.webauthn, devices);
    return { ok: true };
  } catch (e: any) {
    return { ok: false, error: e?.message || "Failed to register device" };
  }
}

export function removeWebAuthnDevice(id: string): void {
  const devices = listWebAuthnDevices().filter((d) => d.id !== id);
  writeArray(STORAGE_KEYS.webauthn, devices);
}

export function readMfaSettings(): MfaSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.settings);
    return raw ? (JSON.parse(raw) as MfaSettings) : { requireWebAuthn: false };
  } catch {
    return { requireWebAuthn: false };
  }
}

export function updateMfaSettings(next: Partial<MfaSettings>): MfaSettings {
  const current = readMfaSettings();
  const merged = { ...current, ...next };
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(merged));
  return merged;
}

// --- TOTP scaffold ---
export type TotpData = {
  secret: string; // base32
  verified: boolean;
  label: string; // account label
  issuer: string;
};

export function readTotp(): TotpData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.totp);
    return raw ? (JSON.parse(raw) as TotpData) : null;
  } catch {
    return null;
  }
}

function randomBase32(length = 32): string {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
  let out = "";
  for (let i = 0; i < length; i++) out += alphabet[Math.floor(Math.random() * alphabet.length)];
  return out;
}

export function createTotp(label: string, issuer: string): TotpData {
  const data: TotpData = { secret: randomBase32(), verified: false, label, issuer };
  localStorage.setItem(STORAGE_KEYS.totp, JSON.stringify(data));
  return data;
}

export function removeTotp(): void {
  localStorage.removeItem(STORAGE_KEYS.totp);
}

export function markTotpVerified(): void {
  const data = readTotp();
  if (!data) return;
  data.verified = true;
  localStorage.setItem(STORAGE_KEYS.totp, JSON.stringify(data));
}

export function totpOtpAuthUrl(data: TotpData): string {
  const params = new URLSearchParams({ secret: data.secret, issuer: data.issuer });
  return `otpauth://totp/${encodeURIComponent(data.issuer)}:${encodeURIComponent(data.label)}?${params.toString()}`;
}



