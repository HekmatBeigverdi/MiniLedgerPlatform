import type { AccountType } from "@/features/accounts/types/account";
import { Badge } from "@/components/ui/badge";
import React from "react";

type AccountTypeBadgeProps = {
  type: AccountType;
};

export function AccountTypeBadge({ type }: AccountTypeBadgeProps) {
  return <Badge variant="secondary">{type}</Badge>;
}