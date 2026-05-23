import { PageHeader } from "@/components/layout/page-header";
import { VouchersModule } from "@/features/vouchers/components/vouchers-module";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vouchers",
  description: "Create and manage balanced accounting vouchers.",
};

export default function VouchersPage() {
  return (
    <>
      <PageHeader
        title="Vouchers"
        description="Create and manage balanced journal vouchers with debit and credit lines."
      />

      <div className="p-6">
        <VouchersModule />
      </div>
    </>
  );
}