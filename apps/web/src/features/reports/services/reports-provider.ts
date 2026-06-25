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

export type ReportsProvider = {
  getReportsSummary: (dateRange: ReportDateRange) => Promise<ReportsSummary>;
  getLedgerReport: (filters: LedgerReportFilters) => Promise<LedgerEntry[]>;
  getTrialBalanceReport: (
    filters: TrialBalanceFilters
  ) => Promise<TrialBalanceRow[]>;
};