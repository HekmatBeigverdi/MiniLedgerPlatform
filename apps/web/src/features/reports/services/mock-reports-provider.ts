import {
  getLedgerReport,
  getReportsSummary,
  getTrialBalanceReport,
} from "@/features/reports/services/reports-service";
import type { ReportsProvider } from "@/features/reports/services/reports-provider";

export const mockReportsProvider: ReportsProvider = {
  getReportsSummary,
  getLedgerReport,
  getTrialBalanceReport,
};