// src/routes/AdminLogin.tsx
import { FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { signInEmail } from "../lib/auth";

export function AdminLogin() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const reason = params.get("reason");
  const redirect = params.get("redirect");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { error } = await signInEmail({ email, password, rememberMe });
      if (error) {
        setError(error);
        return;
      }
      navigate(redirect || "/admin", { replace: true });
    } catch (err: any) {
      setError("Unexpected error during sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-dvh grid place-items-center px-4">
      <div className="mx-auto w-full max-w-sm">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold">Admin Login</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Access the super admin panel
          </p>
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

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2"
              placeholder="admin@example.com"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
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
            <span className="text-xs text-muted-foreground">Admin-only</span>
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
          Demo only. Add your backend to enable real auth.
        </p>
      </div>
    </main>
  );
}