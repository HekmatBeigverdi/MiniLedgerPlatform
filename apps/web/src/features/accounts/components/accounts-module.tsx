"use client";

import { BookOpen } from "lucide-react";

import { AccountsOverviewCards } from "@/features/accounts/components/accounts-overview-cards";
import { AccountsTable } from "@/features/accounts/components/accounts-table";
import { CreateAccountDialog } from "@/features/accounts/components/create-account-dialog";
import { useAccounts } from "@/features/accounts/services/use-accounts";
import type { Account } from "@/features/accounts/types/account";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/shared/empty-state";
import { ErrorState } from "@/components/shared/error-state";
import { PageLoadingState } from "@/components/shared/page-loading-state";
import React from "react";

export function AccountsModule() {
  const {
    data: accounts,
    setData: setAccounts,
    isLoading,
    error,
    reload,
  } = useAccounts();

  function handleAccountCreated(account: Account) {
    setAccounts((current) => [account, ...current]);
  }

  if (isLoading) {
    return <PageLoadingState />;
  }

  if (error) {
    return (
      <ErrorState
        title="Accounts could not be loaded"
        description={error.message}
        onRetry={reload}
      />
    );
  }

  if (accounts.length === 0) {
    return (
      <EmptyState
        title="No accounts found"
        description="Create your first account to start building the chart of accounts."
        icon={<BookOpen className="h-10 w-10" />}
        action={<CreateAccountDialog onAccountCreated={handleAccountCreated} />}
      />
    );
  }

  return (
    <div className="space-y-6">
      <AccountsOverviewCards accounts={accounts} />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            Chart of accounts
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage account codes, account types, and their normal balances.
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <CreateAccountDialog onAccountCreated={handleAccountCreated} />
        </div>
      </div>

      <AccountsTable accounts={accounts} />
    </div>
  );
}