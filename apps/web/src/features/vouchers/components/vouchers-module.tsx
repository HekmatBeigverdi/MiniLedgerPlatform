"use client";

import { useEffect, useState } from "react";

import { CreateVoucherDialog } from "@/features/vouchers/components/create-voucher-dialog";
import { VouchersOverviewCards } from "@/features/vouchers/components/vouchers-overview-cards";
import { VouchersTable } from "@/features/vouchers/components/vouchers-table";
import { getVouchers } from "@/features/vouchers/services/vouchers-service";
import type { Voucher } from "@/features/vouchers/types/voucher";
import { Button } from "@/components/ui/button";
import React from "react";

export function VouchersModule() {
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadVouchers() {
      const data = await getVouchers();

      if (isMounted) {
        setVouchers(data);
        setIsLoading(false);
      }
    }

    loadVouchers();

    return () => {
      isMounted = false;
    };
  }, []);

  function handleVoucherCreated(voucher: Voucher) {
    setVouchers((current) => [voucher, ...current]);
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
      <VouchersOverviewCards vouchers={vouchers} />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            Journal vouchers
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage draft, posted, and voided accounting vouchers.
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <CreateVoucherDialog onVoucherCreated={handleVoucherCreated} />
        </div>
      </div>

      <VouchersTable vouchers={vouchers} />
    </div>
  );
}