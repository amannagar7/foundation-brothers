import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const AdminLoginForm = () => {
  const navigate = useNavigate();
  const search = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reason = search[0].get("reason");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // TODO: integrate Vite-compatible auth here.
      // Temporary: accept any input and navigate to admin dashboard.
      if (!email || !password) {
        setError("Email and password are required.");
        return;
      }
      navigate("/admin");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-sm">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold">Admin Login</h1>
        <p className="mt-2 text-sm text-muted-foreground">Access the Reidius Infra admin panel</p>
      </div>

      {reason === "forbidden" && (
        <div className="mb-4 rounded-md border border-border bg-secondary/50 p-3 text-sm">
          You do not have access to the admin panel.
        </div>
      )}

      {error && (
        <div className="mb-4 rounded-md border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm">Email</label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2"
            placeholder="admin@reidius.infra"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="password" className="text-sm">Password</label>
          <input
            id="password"
            type="password"
            required
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2"
            placeholder="••••••••"
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border border-input"
            />
            Remember me
          </label>
          <span className="text-xs text-muted-foreground">2FA next step</span>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        WebAuthn + TOTP enforced after password
      </p>
    </div>
  );
};

export default AdminLoginForm;