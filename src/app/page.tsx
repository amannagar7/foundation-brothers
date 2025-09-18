"use client";

import AdminLogin from "@/components/AdminLogin";
import { useEffect, useState } from "react";
import Link from "next/link";

const TOKEN_KEY = "demo_admin_token";
const DEMO_BEARER = "Bearer demo-admin-token";

export default function Home() {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    setIsAuthed(token === DEMO_BEARER);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl mx-auto space-y-6 text-center">
        <h1 className="text-2xl font-semibold">Admin Demo Login</h1>
        {!isAuthed ? (
          <AdminLogin onAuthenticated={() => setIsAuthed(true)} />
        ) : (
          <div className="rounded-lg border p-8 space-y-4">
            <p className="text-lg font-medium">Welcome, Admin!</p>
            <p className="text-sm text-muted-foreground">
              You are authenticated with a demo bearer token stored in localStorage.
            </p>
            <div className="pt-2">
              <Link
                href="/admin"
                className="inline-flex items-center justify-center rounded-md border bg-card px-4 py-2 text-sm font-medium hover:bg-accent"
              >
                Go to Admin Dashboard
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}