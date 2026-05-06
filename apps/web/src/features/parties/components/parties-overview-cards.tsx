import { Building2, Handshake, Users, WalletCards } from "lucide-react";

import type { Party } from "@/features/parties/types/party";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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