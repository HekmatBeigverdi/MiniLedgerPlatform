import type { PartyType } from "@/features/parties/types/party";
import { Badge } from "@/components/ui/badge";
import React from "react";

type PartyTypeBadgeProps = {
  type: PartyType;
};

export function PartyTypeBadge({ type }: PartyTypeBadgeProps) {
  return <Badge variant="secondary">{type}</Badge>;
}