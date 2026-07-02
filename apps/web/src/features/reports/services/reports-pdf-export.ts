import type {
  LedgerEntry,
  TrialBalanceRow,
} from "@/features/reports/types/report";
import {
  createTablePdf,
  downloadPdf,
  getPdfArrayBuffer,
} from "@/lib/pdf";
import { isDesktopMode } from "@/lib/runtime";
import { exportBinaryFileNatively } from "@/lib/native-file-export";

export async function exportLedgerReportToPdf(entries: LedgerEntry[]) {
  const doc = createTablePdf({
    title: "Ledger Report",
    subtitle: "MiniLedgerPlatform",
    columns: [
      { header: "Date", dataKey: "date" },
      { header: "Voucher", dataKey: "voucher" },
      { header: "Account", dataKey: "account" },
      { header: "Party", dataKey: "party" },
      { header: "Description", dataKey: "description" },
      { header: "Debit", dataKey: "debit" },
      { header: "Credit", dataKey: "credit" },
      { header: "Balance", dataKey: "runningBalance" },
    ],
    rows: entries.map((entry) => ({
      date: entry.date,
      voucher: entry.voucherNumber,
      account: `${entry.accountCode} - ${entry.accountName}`,
      party: entry.partyName ?? "",
      description: entry.description ?? "",
      debit: entry.debit.toFixed(2),
      credit: entry.credit.toFixed(2),
      runningBalance: entry.runningBalance.toFixed(2),
    })),
  });

  if (isDesktopMode()) {
    return exportBinaryFileNatively({
      defaultFilename: "ledger-report.pdf",
      contents: getPdfArrayBuffer(doc),
      title: "Save ledger report PDF",
      filters: [
        {
          name: "PDF file",
          extensions: ["pdf"],
        },
      ],
    });
  }

  downloadPdf("ledger-report.pdf", doc);

  return {
    saved: true,
    path: null,
  };
}

export async function exportTrialBalanceToPdf(rows: TrialBalanceRow[]) {
  const doc = createTablePdf({
    title: "Trial Balance",
    subtitle: "MiniLedgerPlatform",
    columns: [
      { header: "Account Code", dataKey: "accountCode" },
      { header: "Account Name", dataKey: "accountName" },
      { header: "Type", dataKey: "accountType" },
      { header: "Debit", dataKey: "debit" },
      { header: "Credit", dataKey: "credit" },
    ],
    rows: rows.map((row) => ({
      accountCode: row.accountCode,
      accountName: row.accountName,
      accountType: row.accountType,
      debit: row.debit.toFixed(2),
      credit: row.credit.toFixed(2),
    })),
  });

  if (isDesktopMode()) {
    return exportBinaryFileNatively({
      defaultFilename: "trial-balance.pdf",
      contents: getPdfArrayBuffer(doc),
      title: "Save trial balance PDF",
      filters: [
        {
          name: "PDF file",
          extensions: ["pdf"],
        },
      ],
    });
  }

  downloadPdf("trial-balance.pdf", doc);

  return {
    saved: true,
    path: null,
  };
}