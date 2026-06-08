import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { DesktopDatabaseStatus } from "@/features/desktop-db/components/desktop-database-status";

export const metadata: Metadata = {
  title: "Desktop Database",
  description: "Inspect the local SQLite database connection for desktop mode.",
};

export default function DesktopDatabasePage() {
  return (
    <>
      <PageHeader
        title="Desktop Database"
        description="Verify the Tauri SQLite connection and local database initialization."
      />

      <div className="p-6">
        <DesktopDatabaseStatus />
      </div>
    </>
  );
}