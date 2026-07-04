import { Building2 } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organization",
  description: "Company and workspace information.",
};

export default function OrganizationPage() {
  return (
    <>
      <PageHeader
        title="Organization"
        description="Company and workspace information."
      />

      <div className="p-6">
        <EmptyState
          title="Organization settings are coming soon"
          description="Company profile, branding, and workspace configuration will be available in a later phase."
          icon={<Building2 className="h-10 w-10" />}
        />
      </div>
    </>
  );
}
