import type {
  LedgerEntry,
  TrialBalanceRow,
} from "@/features/reports/types/report";

export type SqliteLedgerEntryRow = {
  id: string;
  date: string;
  voucher_number: string;
  account_code: string;
  account_name: string;
  party_name: string | null;
  description: string | null;
  debit: number;
  credit: number;
};

export type SqliteTrialBalanceRow = {
  id: string;
  account_code: string;
  account_name: string;
  account_type: TrialBalanceRow["accountType"];
  debit: number;
  credit: number;
};

export function mapSqliteLedgerEntryToLedgerEntry(
  row: SqliteLedgerEntryRow,
  runningBalance: number
): LedgerEntry {
  return {
    id: row.id,
    date: row.date,
    voucherNumber: row.voucher_number,
    accountCode: row.account_code,
    accountName: row.account_name,
    partyName: row.party_name ?? undefined,
    description: row.description ?? undefined,
    debit: row.debit,
    credit: row.credit,
    runningBalance,
  };
}

export function mapSqliteTrialBalanceRowToTrialBalanceRow(
  row: SqliteTrialBalanceRow
): TrialBalanceRow {
  return {
    id: row.id,
    accountCode: row.account_code,
    accountName: row.account_name,
    accountType: row.account_type,
    debit: row.debit,
    credit: row.credit,
  };
}