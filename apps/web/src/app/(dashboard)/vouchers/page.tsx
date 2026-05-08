import { PageHeader } from "@/components/layout/page-header";
import { VouchersModule } from "@/features/vouchers/components/vouchers-module";
import React from "react";

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