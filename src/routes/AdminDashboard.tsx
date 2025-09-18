// src/routes/AdminDashboard.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSession, isAdmin, signOut, startIdleTimer } from "../lib/auth";
import AdminDashboardImpl from "../components/admin/admin-dashboard";

export function AdminDashboard() {
  const navigate = useNavigate();
  const session = getSession();
  const admin = isAdmin(session);

  useEffect(() => {
    if (!session) {
      navigate("/admin/login?reason=unauthenticated", { replace: true });
      return;
    }
    if (!admin) {
      const path = encodeURIComponent("/admin");
      navigate(`/admin/login?reason=forbidden&redirect=${path}`, { replace: true });
    }
    // start idle timeout -> auto sign out
    startIdleTimer(async () => {
      await signOut();
      navigate("/admin/login?reason=unauthenticated", { replace: true });
    });
  }, [admin, navigate, session]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login", { replace: true });
  };

  if (!session || !admin) return null;

  return <AdminDashboardImpl />;
}