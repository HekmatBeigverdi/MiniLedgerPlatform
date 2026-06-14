"use client";

import { useCallback } from "react";

import { getAccountsProvider } from "@/features/accounts/services/accounts-provider-resolver";
import type { Account } from "@/features/accounts/types/account";
import { useAsyncData } from "@/hooks/use-async-data";

export function useAccounts() {
  const loadAccounts = useCallback(() => {
    return getAccountsProvider().getAccounts();
  }, []);

  return useAsyncData<Account[]>({
    load: loadAccounts,
    initialData: [],
  });
}