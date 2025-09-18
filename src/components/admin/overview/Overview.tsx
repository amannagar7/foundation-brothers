"use client";

import { useEffect, useMemo, useState } from "react";
import { Users, Activity, ShieldCheck, AlertTriangle, FileText, Timer } from "lucide-react";
import { KpiCard } from "./KpiCard";

// Expected localStorage keys (all optional, safe fallbacks):
// users: Array<{ id: number|string, email: string, createdAt: number, mfa?: { totp?: boolean, webauthn?: boolean } }>
// sessions: Array<{ id: string, userId: string|number, startedAt: number, lastActiveAt: number }>
// audit_logs: Array<{ id: string, timestamp: number, action: string, status: "ok"|"error" }>
// posts: Array<{ id: string|number, status: "published"|"draft" }>
// last_admin_login: number

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const Overview = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 30_000);
    return () => clearInterval(id);
  }, []);

  const {
    totalUsers,
    newUsers7d,
    activeSessions15,
    failedLogins24h,
    mfaRate,
    publishedPosts,
    draftPosts,
    lastAdminLogin,
  } = useMemo(() => {
    const users = read<any[]>("users", []);
    const sessions = read<any[]>("sessions", []);
    const audits = read<any[]>("audit_logs", []);
    const posts = read<any[]>("posts", []);
    const lastLogin = read<number | null>("last_admin_login", null);

    const now = Date.now();
    const ms7d = 7 * 24 * 60 * 60 * 1000;
    const ms15m = 15 * 60 * 1000;
    const ms24h = 24 * 60 * 60 * 1000;

    const total = users.length;
    const new7d = users.filter((u) => now - (u.createdAt ?? 0) <= ms7d).length;

    const active15 = sessions.filter((s) => now - (s.lastActiveAt ?? 0) <= ms15m).length;

    const failed24 = audits.filter(
      (a) => a.status === "error" && now - (a.timestamp ?? 0) <= ms24h
    ).length;

    const mfaEnabledCount = users.filter((u) => u.mfa?.totp || u.mfa?.webauthn).length;
    const mfaPct = total > 0 ? Math.round((mfaEnabledCount / total) * 100) : 0;

    const published = posts.filter((p) => p.status === "published").length;
    const drafts = posts.filter((p) => p.status === "draft").length;

    return {
      totalUsers: total,
      newUsers7d: new7d,
      activeSessions15: active15,
      failedLogins24h: failed24,
      mfaRate: mfaPct,
      publishedPosts: published,
      draftPosts: drafts,
      lastAdminLogin: lastLogin,
    };
  }, [tick]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <KpiCard label="Total users" value={totalUsers} hint={`New users (7d): ${newUsers7d}`} icon={<Users className="h-4 w-4" />} />
        <KpiCard label="Active sessions" value={activeSessions15} hint="Last 15 minutes" icon={<Activity className="h-4 w-4" />} />
        <KpiCard label="Failed logins" value={failedLogins24h} hint="Last 24 hours" icon={<AlertTriangle className="h-4 w-4" />} />
        <KpiCard label="MFA enabled rate" value={`${mfaRate}%`} hint="WebAuthn or TOTP" icon={<ShieldCheck className="h-4 w-4" />} />
        <KpiCard label="Published posts" value={publishedPosts} hint={`Drafts: ${draftPosts}`} icon={<FileText className="h-4 w-4" />} />
        <KpiCard label="Last admin login" value={lastAdminLogin ? new Date(lastAdminLogin).toLocaleString() : "—"} hint="Most recent" icon={<Timer className="h-4 w-4" />} />
      </div>
    </div>
  );
};