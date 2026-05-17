"use client";

import { BarChart3 } from "lucide-react";

import { LedgerReportTable } from "@/features/reports/components/ledger-report-table";
import { ReportsFilterBar } from "@/features/reports/components/reports-filter-bar";
import { ReportsSummaryCards } from "@/features/reports/components/reports-summary-cards";
import { TrialBalanceTable } from "@/features/reports/components/trial-balance-table";
import { useReports } from "@/features/reports/services/use-reports";
import { EmptyState } from "@/components/shared/empty-state";
import { ErrorState } from "@/components/shared/error-state";
import { PageLoadingState } from "@/components/shared/page-loading-state";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export function ReportsModule() {
  const {
    selectedAccountCode,
    setSelectedAccountCode,
    dateRange,
    setDateRange,
    data,
    isLoading,
    error,
    reload,
  } = useReports();

  if (isLoading && !data.summary) {
    return <PageLoadingState />;
  }

  if (error) {
    return (
      <ErrorState
        title="Reports could not be loaded"
        description={error.message}
        onRetry={reload}
      />
    );
  }

  if (!data.summary) {
    return (
      <EmptyState
        title="No reports available"
        description="Reports will appear after accounting data is available."
        icon={<BarChart3 className="h-10 w-10" />}
      />
    );
  }

  return (
    <div className="space-y-6">
      <ReportsFilterBar
        selectedAccountCode={selectedAccountCode}
        dateRange={dateRange}
        onAccountChange={setSelectedAccountCode}
        onDateRangeChange={setDateRange}
        onRefresh={reload}
      />

      <ReportsSummaryCards summary={data.summary} />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Ledger report</CardTitle>
            <CardDescription>
              Account movement for the selected account and date range.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <LedgerReportTable entries={data.ledgerEntries} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trial balance</CardTitle>
            <CardDescription>
              Debit and credit totals by account for the selected period.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <TrialBalanceTable rows={data.trialBalanceRows} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}