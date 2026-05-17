"use client";

import { FileSpreadsheet } from "lucide-react";

import { CreateVoucherDialog } from "@/features/vouchers/components/create-voucher-dialog";
import { VouchersOverviewCards } from "@/features/vouchers/components/vouchers-overview-cards";
import { VouchersTable } from "@/features/vouchers/components/vouchers-table";
import { useVouchers } from "@/features/vouchers/services/use-vouchers";
import type { Voucher } from "@/features/vouchers/types/voucher";
import { EmptyState } from "@/components/shared/empty-state";
import { ErrorState } from "@/components/shared/error-state";
import { PageLoadingState } from "@/components/shared/page-loading-state";
import { Button } from "@/components/ui/button";
import React from "react";

export function VouchersModule() {
  const {
    data: vouchers,
    setData: setVouchers,
    isLoading,
    error,
    reload,
  } = useVouchers();

  function handleVoucherCreated(voucher: Voucher) {
    setVouchers((current) => [voucher, ...current]);
  }

  if (isLoading) {
    return <PageLoadingState />;
  }

  if (error) {
    return (
      <ErrorState
        title="Vouchers could not be loaded"
        description={error.message}
        onRetry={reload}
      />
    );
  }

  if (vouchers.length === 0) {
    return (
      <EmptyState
        title="No vouchers found"
        description="Create your first balanced voucher to start recording accounting transactions."
        icon={<FileSpreadsheet className="h-10 w-10" />}
        action={<CreateVoucherDialog onVoucherCreated={handleVoucherCreated} />}
      />
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