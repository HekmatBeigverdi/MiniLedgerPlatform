"use client";

import { useEffect, useState } from "react";

import { LedgerReportTable } from "@/features/reports/components/ledger-report-table";
import { ReportsFilterBar } from "@/features/reports/components/reports-filter-bar";
import { ReportsSummaryCards } from "@/features/reports/components/reports-summary-cards";
import { TrialBalanceTable } from "@/features/reports/components/trial-balance-table";
import {
  getLedgerReport,
  getReportsSummary,
  getTrialBalanceReport,
} from "@/features/reports/services/reports-service";
import type {
  LedgerEntry,
  ReportDateRange,
  ReportsSummary,
  TrialBalanceRow,
} from "@/features/reports/types/report";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export function ReportsModule() {
  const [selectedAccountCode, setSelectedAccountCode] = useState("1000");
  const [dateRange, setDateRange] = useState<ReportDateRange>({
    from: "2026-02-01",
    to: "2026-02-28",
  });

  const [summary, setSummary] = useState<ReportsSummary | null>(null);
  const [ledgerEntries, setLedgerEntries] = useState<LedgerEntry[]>([]);
  const [trialBalanceRows, setTrialBalanceRows] = useState<TrialBalanceRow[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(true);

  const loadReports = React.useCallback(async () => {
    setIsLoading(true);

    const [summaryData, ledgerData, trialBalanceData] = await Promise.all([
      getReportsSummary(dateRange),
      getLedgerReport({
        accountCode: selectedAccountCode,
        dateRange,
      }),
      getTrialBalanceReport({
        dateRange,
      }),
    ]);

    setSummary(summaryData);
    setLedgerEntries(ledgerData);
    setTrialBalanceRows(trialBalanceData);
    setIsLoading(false);
  }, [selectedAccountCode, dateRange]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setIsLoading(true);

      const [summaryData, ledgerData, trialBalanceData] = await Promise.all([
        getReportsSummary(dateRange),
        getLedgerReport({
          accountCode: selectedAccountCode,
          dateRange,
        }),
        getTrialBalanceReport({
          dateRange,
        }),
      ]);

      if (!cancelled) {
        setSummary(summaryData);
        setLedgerEntries(ledgerData);
        setTrialBalanceRows(trialBalanceData);
        setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [selectedAccountCode, dateRange]);

  if (isLoading && !summary) {
    return (
      <div className="space-y-6">
        <div className="h-28 animate-pulse rounded-lg border bg-muted" />

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
      <ReportsFilterBar
        selectedAccountCode={selectedAccountCode}
        dateRange={dateRange}
        onAccountChange={setSelectedAccountCode}
        onDateRangeChange={setDateRange}
        onRefresh={loadReports}
      />

      {summary ? <ReportsSummaryCards summary={summary} /> : null}

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Ledger report</CardTitle>
            <CardDescription>
              Account movement for the selected account and date range.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <LedgerReportTable entries={ledgerEntries} />
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
            <TrialBalanceTable rows={trialBalanceRows} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}