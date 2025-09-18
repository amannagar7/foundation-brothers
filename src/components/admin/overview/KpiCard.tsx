"use client";

import { ReactNode } from "react";

export type KpiCardProps = {
  label: string;
  value: ReactNode;
  hint?: string;
  icon?: ReactNode;
};

export const KpiCard = ({ label, value, hint, icon }: KpiCardProps) => {
  return (
    <div className="rounded-lg border bg-card p-4 text-card-foreground">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">{label}</div>
        {icon}
      </div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
      {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
    </div>
  );
};