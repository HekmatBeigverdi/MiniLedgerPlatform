import { ArrowUpRight, CreditCard, FileText, Wallet } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { StatCardGrid } from "@/components/shared/stat-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import type { Metadata } from "next";

const summaryCards = [
  {
    title: "Total Balance",
    value: "$128,430.00",
    description: "Across all active accounts",
    icon: Wallet,
  },
  {
    title: "Open Vouchers",
    value: "24",
    description: "Draft and pending entries",
    icon: FileText,
  },
  {
    title: "Monthly Revenue",
    value: "$42,800.00",
    description: "Current reporting period",
    icon: ArrowUpRight,
  },
  {
    title: "Cash Accounts",
    value: "8",
    description: "Bank and cash ledgers",
    icon: CreditCard,
  },
];

const recentActivities = [
  {
    title: "Sales voucher created",
    description: "Journal entry #JV-1024 was added as draft.",
    status: "Draft",
  },
  {
    title: "Account balance reviewed",
    description: "Cash account reconciliation was checked.",
    status: "Reviewed",
  },
  {
    title: "Party profile updated",
    description: "Vendor information was updated.",
    status: "Updated",
  },
];

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Overview of accounting activity and operational status.",
};

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Overview of accounting activity, balances, and operational status."
        actions={
          <>
            <Button variant="outline">View reports</Button>
            <Button>Create voucher</Button>
          </>
        }
      />

      <div className="space-y-6 p-6">
        <StatCardGrid items={summaryCards} />

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card>
            <CardHeader>
              <CardTitle>Financial snapshot</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="flex h-72 items-center justify-center rounded-lg border border-dashed">
                <div className="text-center">
                  <p className="text-sm font-medium">Chart placeholder</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Reporting charts will be introduced in a later phase.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent activity</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.title}
                  className="rounded-lg border bg-card p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {activity.description}
                      </p>
                    </div>

                    <Badge variant="secondary">{activity.status}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}