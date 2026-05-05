"use client";

import { useEffect, useState } from "react";

import { AccountsOverviewCards } from "@/features/accounts/components/accounts-overview-cards";
import { AccountsTable } from "@/features/accounts/components/accounts-table";
import { CreateAccountDialog } from "@/features/accounts/components/create-account-dialog";
import { getAccounts } from "@/features/accounts/services/accounts-service";
import type { Account } from "@/features/accounts/types/account";
import { Button } from "@/components/ui/button";
import React from "react";

export function AccountsModule() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadAccounts() {
      const data = await getAccounts();

      if (isMounted) {
        setAccounts(data);
        setIsLoading(false);
      }
    }

    loadAccounts();

    return () => {
      isMounted = false;
    };
  }, []);

  function handleAccountCreated(account: Account) {
    setAccounts((current) => [account, ...current]);
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