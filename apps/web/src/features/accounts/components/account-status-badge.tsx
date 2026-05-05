import type { AccountStatus } from "@/features/accounts/types/account";
import { Badge } from "@/components/ui/badge";
import React from "react";

type AccountStatusBadgeProps = {
  status: AccountStatus;
};

export function AccountStatusBadge({ status }: AccountStatusBadgeProps) {
  return (
    <Badge variant={status === "Active" ? "default" : "outline"}>
      {status}
    </Badge>
  );
}