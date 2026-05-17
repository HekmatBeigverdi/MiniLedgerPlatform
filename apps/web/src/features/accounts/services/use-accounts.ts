"use client";

import { useCallback } from "react";

import { getAccounts } from "@/features/accounts/services/accounts-service";
import type { Account } from "@/features/accounts/types/account";
import { useAsyncData } from "@/hooks/use-async-data";

export function useAccounts() {
  const loadAccounts = useCallback(() => getAccounts(), []);

  return useAsyncData<Account[]>({
    load: loadAccounts,
    initialData: [],
  });
}