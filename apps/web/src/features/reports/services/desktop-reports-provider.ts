import {
  getDesktopDatabase,
  runInitialDesktopMigrations,
} from "@/features/desktop-db/services/desktop-database";
import type { ReportsProvider } from "@/features/reports/services/reports-provider";
import {
  mapSqliteLedgerEntryToLedgerEntry,
  mapSqliteTrialBalanceRowToTrialBalanceRow,
  type SqliteLedgerEntryRow,
  type SqliteTrialBalanceRow,
} from "@/features/reports/services/reports-sqlite-mapper";
import type {
  LedgerEntry,
  ReportsSummary,
} from "@/features/reports/types/report";

function normalizeDateRange(from: string, to: string) {
  return {
    from,
    to,
  };
}

export const desktopReportsProvider: ReportsProvider = {
  async getReportsSummary(dateRange) {
    await runInitialDesktopMigrations();

    const db = await getDesktopDatabase();
    const range = normalizeDateRange(dateRange.from, dateRange.to);

    const totalRows = await db.select<
      Array<{
        total_debit: number | null;
        total_credit: number | null;
        total_movements: number;
      }>
    >(
      `SELECT
        COALESCE(SUM(vl.debit), 0) as total_debit,
        COALESCE(SUM(vl.credit), 0) as total_credit,
        COUNT(vl.id) as total_movements
      FROM voucher_lines vl
      INNER JOIN vouchers v ON v.id = vl.voucher_id
      WHERE v.date >= ? AND v.date <= ?`,
      [range.from, range.to]
    );

    const accountRows = await db.select<Array<{ total_accounts: number }>>(
      `SELECT COUNT(*) as total_accounts FROM accounts`
    );

    const totalDebit = Number(totalRows[0]?.total_debit ?? 0);
    const totalCredit = Number(totalRows[0]?.total_credit ?? 0);
    const difference = totalDebit - totalCredit;

    const summary: ReportsSummary = {
      totalDebit,
      totalCredit,
      difference,
      isBalanced: difference === 0,
      totalAccounts: Number(accountRows[0]?.total_accounts ?? 0),
      totalMovements: Number(totalRows[0]?.total_movements ?? 0),
    };

    return summary;
  },

  async getLedgerReport(filters) {
    await runInitialDesktopMigrations();

    const db = await getDesktopDatabase();
    const range = normalizeDateRange(
      filters.dateRange.from,
      filters.dateRange.to
    );

    const rows = await db.select<SqliteLedgerEntryRow[]>(
      `SELECT
        vl.id as id,
        v.date as date,
        v.number as voucher_number,
        vl.account_code as account_code,
        vl.account_name as account_name,
        vl.party_name as party_name,
        COALESCE(vl.description, v.description) as description,
        vl.debit as debit,
        vl.credit as credit
      FROM voucher_lines vl
      INNER JOIN vouchers v ON v.id = vl.voucher_id
      WHERE vl.account_code = ?
        AND v.date >= ?
        AND v.date <= ?
      ORDER BY v.date ASC, v.number ASC, vl.line_order ASC`,
      [filters.accountCode, range.from, range.to]
    );

    let runningBalance = 0;

    const entries: LedgerEntry[] = rows.map((row) => {
      runningBalance += Number(row.debit ?? 0) - Number(row.credit ?? 0);

      return mapSqliteLedgerEntryToLedgerEntry(row, runningBalance);
    });

    return entries;
  },

  async getTrialBalanceReport(filters) {
    await runInitialDesktopMigrations();

    const db = await getDesktopDatabase();
    const range = normalizeDateRange(
      filters.dateRange.from,
      filters.dateRange.to
    );

    const rows = await db.select<SqliteTrialBalanceRow[]>(
      `SELECT
        a.id as id,
        a.code as account_code,
        a.name as account_name,
        a.type as account_type,
        COALESCE(SUM(vl.debit), 0) as debit,
        COALESCE(SUM(vl.credit), 0) as credit
      FROM accounts a
      LEFT JOIN voucher_lines vl ON vl.account_code = a.code
      LEFT JOIN vouchers v ON v.id = vl.voucher_id
        AND v.date >= ?
        AND v.date <= ?
      GROUP BY
        a.id,
        a.code,
        a.name,
        a.type
      HAVING debit > 0 OR credit > 0
      ORDER BY a.code ASC`,
      [range.from, range.to]
    );

    return rows.map(mapSqliteTrialBalanceRowToTrialBalanceRow);
  },
};