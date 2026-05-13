import { PageHeader } from "@/components/layout/page-header";
import { ReportsModule } from "@/features/reports/components/reports-module";
import React from "react";

export default function ReportsPage() {
  return (
    <>
      <PageHeader
        title="Reports"
        description="Review ledger movements, trial balance, and reporting summaries."
      />

      <div className="p-6">
        <ReportsModule />
      </div>
    </>
  );
}