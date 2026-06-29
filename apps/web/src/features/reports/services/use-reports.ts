"use client";

import { useCallback, useState } from "react";

import { getReportsProvider } from "@/features/reports/services/reports-provider-resolver";
import type {
  LedgerEntry,
  ReportDateRange,
  ReportsSummary,
  TrialBalanceRow,
} from "@/features/reports/types/report";
import { useAsyncData } from "@/hooks/use-async-data";

type ReportsData = {
  summary: ReportsSummary | null;
  ledgerEntries: LedgerEntry[];
  trialBalanceRows: TrialBalanceRow[];
};

export function useReports() {
  const [selectedAccountCode, setSelectedAccountCode] = useState("1000");
  const [dateRange, setDateRange] = useState<ReportDateRange>({
    from: "2026-02-01",
    to: "2026-12-31",
  });

  const loadReports = useCallback(async (): Promise<ReportsData> => {
    const provider = getReportsProvider();

    const [summary, ledgerEntries, trialBalanceRows] = await Promise.all([
      provider.getReportsSummary(dateRange),
      provider.getLedgerReport({
        accountCode: selectedAccountCode,
        dateRange,
      }),
      provider.getTrialBalanceReport({
        dateRange,
      }),
    ]);

    return {
      summary,
      ledgerEntries,
      trialBalanceRows,
    };
  }, [dateRange, selectedAccountCode]);

  const asyncState = useAsyncData<ReportsData>({
    load: loadReports,
    initialData: {
      summary: null,
      ledgerEntries: [],
      trialBalanceRows: [],
    },
  });

  return {
    selectedAccountCode,
    setSelectedAccountCode,
    dateRange,
    setDateRange,
    ...asyncState,
  };
}