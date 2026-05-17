"use client";

import { useCallback } from "react";

import { getVouchers } from "@/features/vouchers/services/vouchers-service";
import type { Voucher } from "@/features/vouchers/types/voucher";
import { useAsyncData } from "@/hooks/use-async-data";

export function useVouchers() {
  const loadVouchers = useCallback(() => getVouchers(), []);

  return useAsyncData<Voucher[]>({
    load: loadVouchers,
    initialData: [],
  });
}