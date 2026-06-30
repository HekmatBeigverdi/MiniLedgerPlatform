"use client";

import { ReportsFilterBar } from "@/features/reports/components/reports-filter-bar";
import { ReportsSummaryCards } from "@/features/reports/components/reports-summary-cards";
import { ReportsToolbar } from "@/features/reports/components/reports-toolbar";
import { LedgerReportTable } from "@/features/reports/components/ledger-report-table";
import { TrialBalanceTable } from "@/features/reports/components/trial-balance-table";
import { useReports } from "@/features/reports/services/use-reports";

export function ReportsModule() {
  const {
    data,
    isLoading,
    error,
    reload,
    selectedAccountCode,
    setSelectedAccountCode,
    dateRange,
    setDateRange,
  } = useReports();

  if (isLoading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Loading reports...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-6">
        <h2 className="text-lg font-semibold text-destructive">
          Failed to load reports
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="hidden print:block">
        <h1 className="text-2xl font-bold">
          MiniLedgerPlatform Reports
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Reporting period: {dateRange.from} to {dateRange.to}
        </p>
      </div>

      <ReportsFilterBar
        selectedAccountCode={selectedAccountCode}
        dateRange={dateRange}
        onAccountChange={setSelectedAccountCode}
        onDateRangeChange={setDateRange}
        onRefresh={reload}
      />

      {data.summary && <ReportsSummaryCards summary={data.summary} />}

      <ReportsToolbar
        ledgerEntries={data.ledgerEntries}
        trialBalanceRows={data.trialBalanceRows}
      />

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <LedgerReportTable
          entries={data.ledgerEntries}
        />

        <TrialBalanceTable
          rows={data.trialBalanceRows}
        />
      </div>
    </div>
  );
}
