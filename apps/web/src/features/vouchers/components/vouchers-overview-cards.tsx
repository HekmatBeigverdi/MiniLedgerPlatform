import {
  CircleDollarSign,
  FileSpreadsheet,
  Scale,
  Wallet,
} from "lucide-react";

import type { Voucher } from "@/features/vouchers/types/voucher";
import { StatCardGrid } from "@/components/shared/stat-card";
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

  return <StatCardGrid items={items} />;
}