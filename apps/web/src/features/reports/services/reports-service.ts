import {
  mockLedgerEntries,
  mockReportsSummary,
  mockTrialBalanceRows,
} from "@/features/reports/data/mock-reports";
import type {
  LedgerEntry,
  ReportDateRange,
  ReportsSummary,
  TrialBalanceRow,
} from "@/features/reports/types/report";

export type LedgerReportFilters = {
  accountCode: string;
  dateRange: ReportDateRange;
};

export type TrialBalanceFilters = {
  dateRange: ReportDateRange;
};

export async function getReportsSummary(
  dateRange: ReportDateRange
): Promise<ReportsSummary> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  console.log("Loading reports summary for date range:", dateRange);

  return mockReportsSummary;
}

export async function getLedgerReport(
  filters: LedgerReportFilters
): Promise<LedgerEntry[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return mockLedgerEntries.filter(
    (entry) => entry.accountCode === filters.accountCode
  );
}

export async function getTrialBalanceReport(
  filters: TrialBalanceFilters
): Promise<TrialBalanceRow[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  console.log("Loading trial balance for date range:", filters.dateRange);

  return mockTrialBalanceRows;
}