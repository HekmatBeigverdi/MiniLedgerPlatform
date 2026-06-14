import { mockAccounts } from "@/features/accounts/data/mock-accounts";
import { getDesktopDatabase, runInitialDesktopMigrations } from "@/features/desktop-db/services/desktop-database";

export async function seedDesktopAccountsIfEmpty() {
  await runInitialDesktopMigrations();

  const db = await getDesktopDatabase();

  const rows = await db.select<Array<{ count: number }>>(
    "SELECT COUNT(*) as count FROM accounts"
  );

  const count = Number(rows[0]?.count ?? 0);

  if (count > 0) {
    return;
  }

  for (const account of mockAccounts) {
    await db.execute(
      `INSERT OR IGNORE INTO accounts (
        id,
        code,
        name,
        type,
        normal_balance,
        status,
        description,
        created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        account.id,
        account.code,
        account.name,
        account.type,
        account.normalBalance,
        account.status,
        account.description ?? null,
        account.createdAt,
      ]
    );
  }
}