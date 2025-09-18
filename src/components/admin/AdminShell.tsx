import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

// Auth is enforced by ProtectedRoute. This shell does not gate by token.

export type AdminShellProps = {
  title?: string;
  children: React.ReactNode;
};

export const AdminShell = ({ title, children }: AdminShellProps) => {
  // ProtectedRoute handles access; render immediately

  return (
    <div className="grid min-h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Sidebar />
      <div className="flex min-w-0 flex-col">
        <Topbar title={title} />
        <main className="min-h-0 flex-1 p-4">
          <div className="mx-auto max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
};