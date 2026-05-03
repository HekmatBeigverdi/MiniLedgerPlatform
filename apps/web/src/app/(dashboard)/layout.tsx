import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppTopbar } from "@/components/layout/app-topbar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex min-h-screen">
        <AppSidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <AppTopbar />

          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}