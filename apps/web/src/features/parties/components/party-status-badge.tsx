import type { PartyStatus } from "@/features/parties/types/party";
import { Badge } from "@/components/ui/badge";
import React from "react";

type PartyStatusBadgeProps = {
  status: PartyStatus;
};

export function PartyStatusBadge({ status }: PartyStatusBadgeProps) {
  return (
    <Badge variant={status === "Active" ? "default" : "outline"}>
      {status}
    </Badge>
  );
}