"use client";

import { Sun, Moon, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { useCallback } from "react";

const TOKEN_KEY = "demo_admin_token";

export type TopbarProps = {
  title?: string;
};

export const Topbar = ({ title = "Dashboard" }: TopbarProps) => {
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();

  const handleSignOut = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    navigate("/admin/login", { replace: true });
  }, [navigate]);

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 items-center gap-3 px-4">
        <h1 className="text-sm font-medium text-muted-foreground">{title}</h1>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-card text-foreground hover:bg-accent"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <button
            type="button"
            aria-label="Sign out"
            onClick={handleSignOut}
            className="inline-flex h-9 items-center gap-2 rounded-md border bg-card px-3 text-sm hover:bg-accent"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Sign out</span>
          </button>
        </div>
      </div>
    </header>
  );
};