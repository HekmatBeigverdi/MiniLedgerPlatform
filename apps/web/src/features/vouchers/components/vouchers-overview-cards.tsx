import {
  CircleDollarSign,
  FileSpreadsheet,
  Scale,
  Wallet,
} from "lucide-react";

import type { Voucher } from "@/features/vouchers/types/voucher";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type VouchersOverviewCardsProps = {
  vouchers: Voucher[];
};

export function VouchersOverviewCards({
  vouchers,
}: VouchersOverviewCardsProps) {
  const draftCount = vouchers.filter(
    (voucher) => voucher.status === "Draft"
  ).length;

  const postedCount = vouchers.filter(
    (voucher) => voucher.status === "Posted"
  ).length;

  const totalDebit = vouchers.reduce(
    (sum, voucher) => sum + voucher.totalDebit,
    0
  );

  const items = [
    {
      title: "Total Vouchers",
      value: vouchers.length,
      description: "All accounting journal entries",
      icon: FileSpreadsheet,
    },
    {
      title: "Draft Vouchers",
      value: draftCount,
      description: "Pending accounting review",
      icon: Scale,
    },
    {
      title: "Posted Vouchers",
      value: postedCount,
      description: "Finalized accounting entries",
      icon: Wallet,
    },
    {
      title: "Total Debit",
      value: new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
      }).format(totalDebit),
      description: "Combined debit movement",
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