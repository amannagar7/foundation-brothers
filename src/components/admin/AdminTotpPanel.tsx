import { useMemo, useState } from "react";
import { createTotp, readTotp, removeTotp, markTotpVerified, totpOtpAuthUrl } from "../../lib/mfa";
import { addEvent } from "../../lib/audit";

export function AdminTotpPanel() {
  const existing = readTotp();
  const [label, setLabel] = useState(existing?.label || "admin@foundationbrothers");
  const [issuer, setIssuer] = useState(existing?.issuer || "Foundation Brothers");
  const [code, setCode] = useState("");
  const totp = readTotp();
  const otpauth = useMemo(() => (totp ? totpOtpAuthUrl(totp) : null), [totp]);

  const onCreate = () => {
    const data = createTotp(label.trim(), issuer.trim());
    setLabel(data.label);
    setIssuer(data.issuer);
    addEvent({ type: "totp_create", detail: `TOTP created for ${data.label}` });
  };

  const onRemove = () => {
    removeTotp();
    setCode("");
    addEvent({ type: "totp_remove", detail: "TOTP removed" });
  };

  const onVerify = () => {
    // Scaffold: accept any 6-digit code for now
    if (/^\d{6}$/.test(code)) {
      markTotpVerified();
      setCode("");
      addEvent({ type: "totp_verify", detail: "TOTP verified" });
    }
  };

  return (
    <section className="rounded-lg border border-border p-4">
      <h3 className="font-medium">TOTP Authenticator</h3>

      {!totp && (
        <div className="mt-3 space-y-2">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Account label"
            />
            <input
              value={issuer}
              onChange={(e) => setIssuer(e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Issuer"
            />
          </div>
          <button onClick={onCreate} className="rounded-md border border-input px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">Generate secret</button>
        </div>
      )}

      {totp && (
        <div className="mt-3 space-y-3">
          <div className="text-sm break-all">
            <div><span className="text-muted-foreground">Secret:</span> {totp.secret}</div>
            {otpauth && (
              <div className="mt-1"><span className="text-muted-foreground">otpauth URL:</span> {otpauth}</div>
            )}
          </div>
          {!totp.verified ? (
            <div className="flex items-center gap-2">
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter 6‑digit code"
                className="rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
              <button onClick={onVerify} className="rounded-md border border-input px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground">Verify</button>
            </div>
          ) : (
            <div className="text-sm text-green-600">Verified</div>
          )}
          <button onClick={onRemove} className="rounded-md border border-input px-3 py-2 text-xs hover:bg-accent hover:text-accent-foreground">Remove TOTP</button>
        </div>
      )}
    </section>
  );
}


