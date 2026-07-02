import { BookOpen, CircleDollarSign, Layers, Wallet } from "lucide-react";

import type { Account } from "@/features/accounts/types/account";
import { StatCardGrid } from "@/components/shared/stat-card";
import React from "react";

type AccountsOverviewCardsProps = {
  accounts: Account[];
};

export function AccountsOverviewCards({
  accounts,
}: AccountsOverviewCardsProps) {
  const activeAccounts = accounts.filter(
    (account) => account.status === "Active"
  ).length;

  const assetAccounts = accounts.filter(
    (account) => account.type === "Asset"
  ).length;

  const revenueAccounts = accounts.filter(
    (account) => account.type === "Revenue"
  ).length;

  const expenseAccounts = accounts.filter(
    (account) => account.type === "Expense"
  ).length;

  const items = [
    {
      title: "Total Accounts",
      value: accounts.length,
      description: "All configured ledger accounts",
      icon: BookOpen,
    },
    {
      title: "Active Accounts",
      value: activeAccounts,
      description: "Available for accounting entries",
      icon: Layers,
    },
    {
      title: "Asset Accounts",
      value: assetAccounts,
      description: "Cash, bank, and receivables",
      icon: Wallet,
    },
    {
      title: "Revenue / Expense",
      value: `${revenueAccounts}/${expenseAccounts}`,
      description: "Income and cost tracking",
      icon: CircleDollarSign,
    },
  ];

  return <StatCardGrid items={items} />;
}