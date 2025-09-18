import { useEffect, useState } from "react";
import {
  listWebAuthnDevices,
  registerWebAuthnDevice,
  removeWebAuthnDevice,
  readMfaSettings,
  updateMfaSettings,
} from "../../lib/mfa";
import { addEvent } from "../../lib/audit";

export function AdminMfaPanel() {
  const [devices, setDevices] = useState(listWebAuthnDevices());
  const [label, setLabel] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [settings, setSettings] = useState(readMfaSettings());

  useEffect(() => {
    setDevices(listWebAuthnDevices());
    setSettings(readMfaSettings());
  }, []);

  const onRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const res = await registerWebAuthnDevice(label.trim());
    if (!res.ok) setError(res.error || "Failed to add device");
    setLabel("");
    setDevices(listWebAuthnDevices());
    if (res.ok) addEvent({ type: "mfa_add", detail: "WebAuthn device added" });
  };

  const onRemove = (id: string) => {
    removeWebAuthnDevice(id);
    setDevices(listWebAuthnDevices());
    addEvent({ type: "mfa_remove", detail: "WebAuthn device removed" });
  };

  const toggleRequire = () => {
    const next = updateMfaSettings({ requireWebAuthn: !settings.requireWebAuthn });
    setSettings(next);
  };

  return (
    <section className="rounded-lg border border-border p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-medium">Multi‑Factor Authentication</h2>
        <label className="inline-flex items-center gap-2 text-sm">
          <input type="checkbox" checked={settings.requireWebAuthn} onChange={toggleRequire} />
          Require WebAuthn
        </label>
      </div>

      {error && (
        <div className="mt-3 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <form onSubmit={onRegister} className="mt-4 flex gap-2">
        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Device label (e.g., YubiKey, TouchID)"
          className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
        <button className="rounded-md border border-input px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
          Add device
        </button>
      </form>

      <ul className="mt-4 space-y-2 text-sm">
        {devices.length === 0 && (
          <li className="text-muted-foreground">No devices registered yet.</li>
        )}
        {devices.map((d) => (
          <li key={d.id} className="flex items-center justify-between rounded-md border border-border px-3 py-2">
            <div>
              <div className="font-medium">{d.label}</div>
              <div className="text-xs text-muted-foreground">Added {new Date(d.addedAt).toLocaleString()}</div>
            </div>
            <button
              onClick={() => onRemove(d.id)}
              className="rounded-md border border-input px-2 py-1 text-xs hover:bg-accent hover:text-accent-foreground"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}


