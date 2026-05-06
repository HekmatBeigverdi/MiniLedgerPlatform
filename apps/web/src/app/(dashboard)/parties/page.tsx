import { PageHeader } from "@/components/layout/page-header";
import { PartiesModule } from "@/features/parties/components/parties-module";
import React from "react";

export default function PartiesPage() {
  return (
    <>
      <PageHeader
        title="Parties"
        description="Manage customers, vendors, employees, shareholders, and other business entities."
      />

      <div className="p-6">
        <PartiesModule />
      </div>
    </>
  );
}