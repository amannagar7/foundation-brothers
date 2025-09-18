// src/routes/ProtectedRoute.tsx
import { ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSession, isAdmin, extendSession } from "../lib/auth";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const session = getSession();

  useEffect(() => {
    if (!session) {
      const redirect = encodeURIComponent(location.pathname + location.search);
      navigate(`/admin/login?reason=unauthenticated&redirect=${redirect}`, { replace: true });
      return;
    }
    if (!isAdmin(session)) {
      const redirect = encodeURIComponent(location.pathname + location.search);
      navigate(`/admin/login?reason=forbidden&redirect=${redirect}`, { replace: true });
    }
    // refresh session expiry on protected navigation
    extendSession();
  }, [location.pathname, location.search, navigate, session]);

  if (!session || !isAdmin(session)) return null;
  return <>{children}</>;
}