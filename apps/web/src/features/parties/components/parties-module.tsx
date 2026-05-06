"use client";

import { useEffect, useState } from "react";

import { CreatePartyDialog } from "@/features/parties/components/create-party-dialog";
import { PartiesOverviewCards } from "@/features/parties/components/parties-overview-cards";
import { PartiesTable } from "@/features/parties/components/parties-table";
import { getParties } from "@/features/parties/services/parties-service";
import type { Party } from "@/features/parties/types/party";
import { Button } from "@/components/ui/button";
import React from "react";

export function PartiesModule() {
  const [parties, setParties] = useState<Party[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadParties() {
      const data = await getParties();

      if (isMounted) {
        setParties(data);
        setIsLoading(false);
      }
    }

    loadParties();

    return () => {
      isMounted = false;
    };
  }, []);

  function handlePartyCreated(party: Party) {
    setParties((current) => [party, ...current]);
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-32 animate-pulse rounded-lg border bg-muted"
            />
          ))}
        </div>

        <div className="h-96 animate-pulse rounded-lg border bg-muted" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PartiesOverviewCards parties={parties} />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            Parties directory
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage customers, vendors, employees, shareholders, and other
            related entities.
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <CreatePartyDialog onPartyCreated={handlePartyCreated} />
        </div>
      </div>

      <PartiesTable parties={parties} />
    </div>
  );
}