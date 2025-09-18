"use client";

import { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import bcrypt from "bcryptjs";

const PUBLIC_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "";
const PUBLIC_HASH = process.env.NEXT_PUBLIC_ADMIN_PASSWORD_HASH || "";

const TOKEN_KEY = "demo_admin_token";
const DEMO_BEARER = "Bearer demo-admin-token";

export default function AdminLogin({ onAuthenticated }: { onAuthenticated?: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthed, setIsAuthed] = useState(false);
  const [generatedHash, setGeneratedHash] = useState<string | null>(null);
  const [hashLoading, setHashLoading] = useState(false);

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;
    if (token === DEMO_BEARER) setIsAuthed(true);
  }, []);

  const envConfigured = useMemo(() => {
    return Boolean(PUBLIC_EMAIL) && Boolean(PUBLIC_HASH) && PUBLIC_HASH.startsWith("$");
  }, []);

  async function handleGenerateHash() {
    try {
      setHashLoading(true);
      setGeneratedHash(null);
      const hash = await bcrypt.hash("Kumher0070@", 10);
      setGeneratedHash(hash);
    } finally {
      setHashLoading(false);
    }
  }

  async function handleCopyHash() {
    if (!generatedHash) return;
    try {
      await navigator.clipboard.writeText(generatedHash);
    } catch {}
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!envConfigured) {
      setError("Environment variables are not configured correctly.");
      return;
    }

    if (email.trim().toLowerCase() !== PUBLIC_EMAIL.trim().toLowerCase()) {
      setError("Invalid email or password.");
      return;
    }

    setLoading(true);
    try {
      const ok = await bcrypt.compare(password, PUBLIC_HASH);
      if (!ok) {
        setError("Invalid email or password.");
        return;
      }

      if (typeof window !== "undefined") {
        localStorage.setItem(TOKEN_KEY, DEMO_BEARER);
        localStorage.setItem("last_admin_login", JSON.stringify(Date.now()));
      }
      setIsAuthed(true);
      onAuthenticated?.();
    } catch (err) {
      setError("Authentication failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    if (typeof window !== "undefined") {
      localStorage.removeItem(TOKEN_KEY);
    }
    setIsAuthed(false);
  }

  if (isAuthed) {
    return (
      <div className="w-full max-w-sm space-y-4 rounded-lg border p-6">
        <p className="text-sm text-muted-foreground">Logged in as</p>
        <p className="font-medium">{PUBLIC_EMAIL || "Admin"}</p>
        <div className="flex gap-2 pt-2">
          <Button variant="secondary" onClick={handleLogout}>Log out</Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 rounded-lg border p-6">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : null}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Signing in…" : "Sign in"}
      </Button>
      {!envConfigured ? (
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">
            Warning: Missing NEXT_PUBLIC_ADMIN_EMAIL or NEXT_PUBLIC_ADMIN_PASSWORD_HASH.
          </p>
          <div className="space-y-2 rounded-md border p-3">
            <p className="text-xs">Generate bcrypt hash for your password (10 rounds) and paste into .env.local</p>
            <div className="flex gap-2">
              <Button type="button" variant="secondary" onClick={handleGenerateHash} disabled={hashLoading}>
                {hashLoading ? "Generating…" : "Generate Hash"}
              </Button>
              <Button type="button" variant="outline" onClick={handleCopyHash} disabled={!generatedHash}>Copy</Button>
            </div>
            {generatedHash ? (
              <Textarea readOnly value={generatedHash} className="text-xs" rows={3} />
            ) : null}
          </div>
        </div>
      ) : null}
    </form>
  );
}