"use client";

import { Link, useLocation } from "react-router-dom";
import { LayoutGrid, Users, FileText, FolderOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const SIDEBAR_KEY = "admin_sidebar_collapsed";

const nav = [
  {
    heading: "General",
    items: [
      { href: "/admin", label: "Overview", icon: LayoutGrid },
    ],
  },
  {
    heading: "Management",
    items: [
      { href: "/admin/users", label: "Users", icon: Users },
      { href: "/admin/audit", label: "Audit", icon: FileText },
      { href: "/admin/blog", label: "Blog", icon: FolderOpen },
    ],
  },
];

export const Sidebar = () => {
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  useEffect(() => {
    const v = localStorage.getItem(SIDEBAR_KEY);
    setCollapsed(v === "1");
  }, []);

  const toggle = () => {
    const next = !collapsed;
    setCollapsed(next);
    localStorage.setItem(SIDEBAR_KEY, next ? "1" : "0");
  };

  return (
    <aside
      className={`flex h-full flex-col border-r bg-sidebar text-sidebar-foreground transition-[width] duration-200 ${
        collapsed ? "w-[64px]" : "w-56"
      }`}
    >
      <div className="flex h-14 items-center justify-between px-2">
        {!collapsed && (
          <span className="ml-2 text-sm font-semibold">Super Admin</span>
        )}
        <button
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border hover:bg-sidebar-accent"
          onClick={toggle}
          aria-label="Toggle sidebar"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      <nav className="flex-1 overflow-auto px-2 pb-3">
        {nav.map((group) => (
          <div key={group.heading} className="mt-2">
            {!collapsed && (
              <div className="px-2 pb-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                {group.heading}
              </div>
            )}
            <ul className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={`group flex items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-sidebar-accent ${
                        active ? "bg-sidebar-accent" : ""
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span className="truncate">{item.label}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};