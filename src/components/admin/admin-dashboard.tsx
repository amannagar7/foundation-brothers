import { useNavigate } from "react-router-dom";
import { useCallback, useMemo } from "react";
import { AdminMfaPanel } from "./AdminMfaPanel";
import { AdminTotpPanel } from "./AdminTotpPanel";
import { addEvent, listEvents } from "../../lib/audit";
import { useEffect, useState } from "react";
import { signOut } from "../../lib/auth";
import { BlogManager } from "./BlogManager";

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const session: any = null;
  const isPending = false;
  const refetch = () => {};
  const [events, setEvents] = useState(listEvents());

  const email = useMemo(() => session?.user?.email ?? "", [session]);

  const handleSignOut = useCallback(async () => {
    await signOut();
    addEvent({ type: "logout", detail: "User signed out" });
    refetch();
    navigate("/admin/login", { replace: true });
  }, [refetch, navigate]);

  if (isPending) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-sm text-muted-foreground">Loading dashboard…</div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Foundation Brothers Admin</h1>
          <p className="mt-1 text-sm text-muted-foreground">Signed in as {email}</p>
        </div>
        <button
          onClick={handleSignOut}
          className="inline-flex items-center rounded-md border border-input px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
        >
          Sign out
        </button>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card text-card-foreground p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Security</h2>
          <p className="mt-1 text-sm text-muted-foreground">Manage MFA methods</p>
          <div className="mt-4">
            <AdminMfaPanel />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card text-card-foreground p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Audit logs</h2>
          <p className="mt-1 text-sm text-muted-foreground">Recent authentication events</p>
          <ul className="mt-3 text-xs text-muted-foreground space-y-1 max-h-64 overflow-auto pr-1">
            {events.length === 0 && <li className="text-muted-foreground">No events yet.</li>}
            {events.map((e) => (
              <li key={e.id} className="flex justify-between rounded border border-border px-2 py-1">
                <span>{e.type.replace(/_/g, " ")}{e.detail ? ` — ${e.detail}` : ""}</span>
                <span className="text-[10px] text-muted-foreground">{new Date(e.at).toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BlogManager />
      <AdminTotpPanel />
    </div>
  );
};

export default AdminDashboard;