import { Building2, Handshake, Users, WalletCards } from "lucide-react";

import type { Party } from "@/features/parties/types/party";
import { StatCardGrid } from "@/components/shared/stat-card";
import React from "react";

type PartiesOverviewCardsProps = {
  parties: Party[];
};

export function PartiesOverviewCards({ parties }: PartiesOverviewCardsProps) {
  const activeParties = parties.filter((party) => party.status === "Active").length;
  const customers = parties.filter((party) => party.type === "Customer").length;
  const vendors = parties.filter((party) => party.type === "Vendor").length;
  const totalOpeningBalance = parties.reduce(
    (total, party) => total + party.openingBalance,
    0
  );

  const items = [
    {
      title: "Total Parties",
      value: parties.length,
      description: "All configured business entities",
      icon: Users,
    },
    {
      title: "Active Parties",
      value: activeParties,
      description: "Available for transactions",
      icon: Handshake,
    },
    {
      title: "Customers / Vendors",
      value: `${customers}/${vendors}`,
      description: "Receivable and payable relationships",
      icon: Building2,
    },
    {
      title: "Opening Balances",
      value: new Intl.NumberFormat("en", {
        style: "currency",
        currency: "USD",
      }).format(totalOpeningBalance),
      description: "Initial balances across parties",
      icon: WalletCards,
    },
  ];

  return <StatCardGrid items={items} />;
}