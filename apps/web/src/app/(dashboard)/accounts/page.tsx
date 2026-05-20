import { PageHeader } from "@/components/layout/page-header";
import { AccountsModule } from "@/features/accounts/components/accounts-module";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounts",
  description: "Manage the chart of accounts.",
};

export default function AccountsPage() {
  return (
    <>
      <PageHeader
        title="Accounts"
        description="Manage the chart of accounts used across vouchers, ledgers, and reports."
      />

      <div className="p-6">
        <AccountsModule />
      </div>
    </>
  );
}