"use client";

import { useCallback } from "react";

import { getVouchersProvider } from "@/features/vouchers/services/vouchers-provider-resolver";
import type { Voucher } from "@/features/vouchers/types/voucher";
import { useAsyncData } from "@/hooks/use-async-data";

export function useVouchers() {
  const loadVouchers = useCallback(() => {
    return getVouchersProvider().getVouchers();
  }, []);

  return useAsyncData<Voucher[]>({
    load: loadVouchers,
    initialData: [],
  });
}