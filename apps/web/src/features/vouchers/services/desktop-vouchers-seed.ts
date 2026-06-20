import { mockVouchers } from "@/features/vouchers/data/mock-vouchers";
import {
  getDesktopDatabase,
  runInitialDesktopMigrations,
} from "@/features/desktop-db/services/desktop-database";

export async function seedDesktopVouchersIfEmpty() {
  await runInitialDesktopMigrations();

  const db = await getDesktopDatabase();

  const rows = await db.select<Array<{ count: number }>>(
    "SELECT COUNT(*) as count FROM vouchers"
  );

  const count = Number(rows[0]?.count ?? 0);

  if (count > 0) {
    return;
  }

  for (const voucher of mockVouchers) {
    await db.execute(
      `INSERT OR IGNORE INTO vouchers (
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
        `INSERT OR IGNORE INTO voucher_lines (
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
  }
}