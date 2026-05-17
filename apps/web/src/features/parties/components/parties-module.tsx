"use client";

import { Users } from "lucide-react";

import { CreatePartyDialog } from "@/features/parties/components/create-party-dialog";
import { PartiesOverviewCards } from "@/features/parties/components/parties-overview-cards";
import { PartiesTable } from "@/features/parties/components/parties-table";
import { useParties } from "@/features/parties/services/use-parties";
import type { Party } from "@/features/parties/types/party";
import { EmptyState } from "@/components/shared/empty-state";
import { ErrorState } from "@/components/shared/error-state";
import { PageLoadingState } from "@/components/shared/page-loading-state";
import { Button } from "@/components/ui/button";
import React from "react";

export function PartiesModule() {
  const {
    data: parties,
    setData: setParties,
    isLoading,
    error,
    reload,
  } = useParties();

  function handlePartyCreated(party: Party) {
    setParties((current) => [party, ...current]);
  }

  if (isLoading) {
    return <PageLoadingState />;
  }

  if (error) {
    return (
      <ErrorState
        title="Parties could not be loaded"
        description={error.message}
        onRetry={reload}
      />
    );
  }

  if (parties.length === 0) {
    return (
      <EmptyState
        title="No parties found"
        description="Create your first party to start managing customers, vendors, and other entities."
        icon={<Users className="h-10 w-10" />}
        action={<CreatePartyDialog onPartyCreated={handlePartyCreated} />}
      />
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