"use client";

import { useCallback, useState } from "react";

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
    to: "2026-02-28",
  });

  const loadReports = useCallback(async (): Promise<ReportsData> => {
    const [summary, ledgerEntries, trialBalanceRows] = await Promise.all([
      getReportsSummary(dateRange),
      getLedgerReport({
        accountCode: selectedAccountCode,
        dateRange,
      }),
      getTrialBalanceReport({
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