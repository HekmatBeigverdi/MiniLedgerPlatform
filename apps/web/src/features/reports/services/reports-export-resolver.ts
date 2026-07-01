import type {
  LedgerEntry,
  TrialBalanceRow,
} from "@/features/reports/types/report";
import { convertRowsToCsv, downloadCsv } from "@/lib/csv";
import { isDesktopMode } from "@/lib/runtime";
import { exportTextFileNatively } from "@/lib/native-file-export";

function ledgerRows(entries: LedgerEntry[]) {
  return entries.map((entry) => ({
    Date: entry.date,
    Voucher: entry.voucherNumber,
    AccountCode: entry.accountCode,
    AccountName: entry.accountName,
    Party: entry.partyName ?? "",
    Description: entry.description ?? "",
    Debit: entry.debit,
    Credit: entry.credit,
    RunningBalance: entry.runningBalance,
  }));
}

function trialBalanceRows(rows: TrialBalanceRow[]) {
  return rows.map((row) => ({
    AccountCode: row.accountCode,
    AccountName: row.accountName,
    AccountType: row.accountType,
    Debit: row.debit,
    Credit: row.credit,
  }));
}

export async function exportLedgerReport(entries: LedgerEntry[]) {
  const rows = ledgerRows(entries);

  if (isDesktopMode()) {
    const csv = convertRowsToCsv(rows);

    return exportTextFileNatively({
      defaultFilename: "ledger-report.csv",
      contents: csv,
      title: "Save ledger report",
      filters: [
        {
          name: "CSV file",
          extensions: ["csv"],
        },
      ],
    });
  }

  downloadCsv("ledger-report.csv", rows);

  return {
    saved: true,
    path: null,
  };
}

export async function exportTrialBalanceReport(rowsInput: TrialBalanceRow[]) {
  const rows = trialBalanceRows(rowsInput);

  if (isDesktopMode()) {
    const csv = convertRowsToCsv(rows);

    return exportTextFileNatively({
      defaultFilename: "trial-balance.csv",
      contents: csv,
      title: "Save trial balance report",
      filters: [
        {
          name: "CSV file",
          extensions: ["csv"],
        },
      ],
    });
  }

  downloadCsv("trial-balance.csv", rows);

  return {
    saved: true,
    path: null,
  };
}