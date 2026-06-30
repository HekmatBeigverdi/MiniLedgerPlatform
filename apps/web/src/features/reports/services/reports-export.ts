import type {
  LedgerEntry,
  TrialBalanceRow,
} from "@/features/reports/types/report";
import { downloadCsv } from "@/lib/csv";

export function exportLedgerReportToCsv(entries: LedgerEntry[]) {
  downloadCsv(
    "ledger-report.csv",
    entries.map((entry) => ({
      Date: entry.date,
      Voucher: entry.voucherNumber,
      AccountCode: entry.accountCode,
      AccountName: entry.accountName,
      Party: entry.partyName ?? "",
      Description: entry.description ?? "",
      Debit: entry.debit,
      Credit: entry.credit,
      RunningBalance: entry.runningBalance,
    }))
  );
}

export function exportTrialBalanceToCsv(rows: TrialBalanceRow[]) {
  downloadCsv(
    "trial-balance.csv",
    rows.map((row) => ({
      AccountCode: row.accountCode,
      AccountName: row.accountName,
      AccountType: row.accountType,
      Debit: row.debit,
      Credit: row.credit,
    }))
  );
}