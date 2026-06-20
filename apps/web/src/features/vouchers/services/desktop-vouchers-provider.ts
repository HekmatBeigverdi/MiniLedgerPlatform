import {
  getDesktopDatabase,
  runInitialDesktopMigrations,
} from "@/features/desktop-db/services/desktop-database";
import type { CreateVoucherFormValues } from "@/features/vouchers/schemas/voucher-schema";
import { calculateVoucherTotals } from "@/features/vouchers/services/voucher-calculations";
import { seedDesktopVouchersIfEmpty } from "@/features/vouchers/services/desktop-vouchers-seed";
import type { VouchersProvider } from "@/features/vouchers/services/vouchers-provider";
import {
  mapSqliteVoucherLineToVoucherLine,
  mapSqliteVoucherToVoucher,
  type SqliteVoucherLineRow,
  type SqliteVoucherRow,
} from "@/features/vouchers/services/vouchers-sqlite-mapper";
import type { Voucher } from "@/features/vouchers/types/voucher";

export const desktopVouchersProvider: VouchersProvider = {
  async getVouchers() {
    await runInitialDesktopMigrations();
    await seedDesktopVouchersIfEmpty();

    const db = await getDesktopDatabase();

    const voucherRows = await db.select<SqliteVoucherRow[]>(
      `SELECT
        id,
        number,
        date,
        reference,
        description,
        status,
        total_debit,
        total_credit,
        created_at
      FROM vouchers
      ORDER BY date DESC, number DESC`
    );

    const vouchers: Voucher[] = [];

    for (const voucherRow of voucherRows) {
      const lineRows = await db.select<SqliteVoucherLineRow[]>(
        `SELECT
          id,
          voucher_id,
          account_code,
          account_name,
          party_code,
          party_name,
          description,
          debit,
          credit,
          line_order
        FROM voucher_lines
        WHERE voucher_id = ?
        ORDER BY line_order ASC`,
        [voucherRow.id]
      );

      const lines = lineRows.map(mapSqliteVoucherLineToVoucherLine);

      vouchers.push(mapSqliteVoucherToVoucher(voucherRow, lines));
    }

    return vouchers;
  },

  async createVoucher(values: CreateVoucherFormValues) {
    await runInitialDesktopMigrations();

    const db = await getDesktopDatabase();

    const totals = calculateVoucherTotals(values.lines);

    const voucher: Voucher = {
      id: `vch_${crypto.randomUUID()}`,
      number: `JV-${Date.now()}`,
      date: values.date,
      reference: values.reference || undefined,
      description: values.description || undefined,
      status: "Draft",
      lines: values.lines.map((line) => ({
        id: `line_${crypto.randomUUID()}`,
        accountCode: line.accountCode,
        accountName: line.accountName,
        partyCode: line.partyCode || undefined,
        partyName: line.partyName || undefined,
        description: line.description || undefined,
        debit: Number(line.debit || 0),
        credit: Number(line.credit || 0),
      })),
      totalDebit: totals.totalDebit,
      totalCredit: totals.totalCredit,
      createdAt: new Date().toISOString(),
    };

    await db.execute(
      `INSERT INTO vouchers (
        id,
        number,
        date,
        reference,
        description,
        status,
        total_debit,
        total_credit,
        created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        voucher.id,
        voucher.number,
        voucher.date,
        voucher.reference ?? null,
        voucher.description ?? null,
        voucher.status,
        voucher.totalDebit,
        voucher.totalCredit,
        voucher.createdAt,
      ]
    );

    for (const [index, line] of voucher.lines.entries()) {
      await db.execute(
        `INSERT INTO voucher_lines (
          id,
          voucher_id,
          account_code,
          account_name,
          party_code,
          party_name,
          description,
          debit,
          credit,
          line_order
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          line.id,
          voucher.id,
          line.accountCode,
          line.accountName,
          line.partyCode ?? null,
          line.partyName ?? null,
          line.description ?? null,
          line.debit,
          line.credit,
          index,
        ]
      );
    }

    return voucher;
  },
};