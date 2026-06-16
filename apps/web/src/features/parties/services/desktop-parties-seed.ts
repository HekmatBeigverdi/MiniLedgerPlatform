import { mockParties } from "@/features/parties/data/mock-parties";
import {
  getDesktopDatabase,
  runInitialDesktopMigrations,
} from "@/features/desktop-db/services/desktop-database";

export async function seedDesktopPartiesIfEmpty() {
  await runInitialDesktopMigrations();

  const db = await getDesktopDatabase();

  const rows = await db.select<Array<{ count: number }>>(
    "SELECT COUNT(*) as count FROM parties"
  );

  const count = Number(rows[0]?.count ?? 0);

  if (count > 0) {
    return;
  }

  for (const party of mockParties) {
    await db.execute(
      `INSERT OR IGNORE INTO parties (
        id,
        code,
        display_name,
        type,
        status,
        email,
        phone,
        tax_id,
        address,
        opening_balance,
        created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        party.id,
        party.code,
        party.displayName,
        party.type,
        party.status,
        party.email ?? null,
        party.phone ?? null,
        party.taxId ?? null,
        party.address ?? null,
        party.openingBalance,
        party.createdAt,
      ]
    );
  }
}