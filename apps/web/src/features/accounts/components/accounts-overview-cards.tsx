import { BookOpen, CircleDollarSign, Layers, Wallet } from "lucide-react";

import type { Account } from "@/features/accounts/types/account";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="mt-1 text-xs text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}