import type { VoucherStatus } from "@/features/vouchers/types/voucher";
import { Badge } from "@/components/ui/badge";
import React from "react";

type VoucherStatusBadgeProps = {
  status: VoucherStatus;
};

export function VoucherStatusBadge({
  status,
}: VoucherStatusBadgeProps) {
  if (status === "Posted") {
    return <Badge>{status}</Badge>;
  }

  if (status === "Draft") {
    return <Badge variant="secondary">{status}</Badge>;
  }

  return <Badge variant="destructive">{status}</Badge>;
}