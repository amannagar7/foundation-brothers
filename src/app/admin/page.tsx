import { AdminShell } from "@/components/admin/AdminShell";
import { Overview } from "@/components/admin/overview/Overview";

export default function AdminOverviewPage() {
  return (
    <AdminShell title="Overview">
      <Overview />
    </AdminShell>
  );
}