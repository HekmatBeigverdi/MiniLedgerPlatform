import { Settings } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings",
  description: "Application preferences and configuration.",
};

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Application preferences and configuration."
      />

      <div className="p-6">
        <EmptyState
          title="Settings are coming soon"
          description="Application preferences, notifications, and account configuration will be available in a later phase."
          icon={<Settings className="h-10 w-10" />}
        />
      </div>
    </>
  );
}
