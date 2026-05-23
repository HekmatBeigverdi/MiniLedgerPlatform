import { PageHeader } from "@/components/layout/page-header";
import { PartiesModule } from "@/features/parties/components/parties-module";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parties",
  description: "Manage customers, vendors, employees, and related entities.",
};

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