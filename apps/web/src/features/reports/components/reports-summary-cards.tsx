import { BarChart3, CheckCircle2, Scale, WalletCards } from "lucide-react";

import type { ReportsSummary } from "@/features/reports/types/report";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type ReportsSummaryCardsProps = {
  summary: ReportsSummary;
};

export function ReportsSummaryCards({ summary }: ReportsSummaryCardsProps) {
  const items = [
    {
      title: "Total Debit",
      value: new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
      }).format(summary.totalDebit),
      description: "Combined debit movements",
      icon: WalletCards,
    },
    {
      title: "Total Credit",
      value: new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
      }).format(summary.totalCredit),
      description: "Combined credit movements",
      icon: BarChart3,
    },
    {
      title: "Difference",
      value: new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
      }).format(summary.difference),
      description: summary.isBalanced
        ? "Trial balance is balanced"
        : "Trial balance is not balanced",
      icon: Scale,
    },
    {
      title: "Report Status",
      value: summary.isBalanced ? "Balanced" : "Unbalanced",
      description: `${summary.totalAccounts} accounts, ${summary.totalMovements} movements`,
      icon: CheckCircle2,
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