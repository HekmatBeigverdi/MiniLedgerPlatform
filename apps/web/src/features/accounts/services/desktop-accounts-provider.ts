import { runInitialDesktopMigrations, getDesktopDatabase } from "@/features/desktop-db/services/desktop-database";
import type { CreateAccountFormValues } from "@/features/accounts/schemas/account-schema";
import type { AccountsProvider } from "@/features/accounts/services/accounts-provider";
import {
  mapSqliteAccountToAccount,
  type SqliteAccountRow,
} from "@/features/accounts/services/accounts-sqlite-mapper";
import type { Account } from "@/features/accounts/types/account";

export const desktopAccountsProvider: AccountsProvider = {
  async getAccounts() {
    await runInitialDesktopMigrations();

    const db = await getDesktopDatabase();

    const rows = await db.select<SqliteAccountRow[]>(
      `SELECT
        id,
        code,
        name,
        type,
        normal_balance,
        status,
        description,
        created_at
      FROM accounts
      ORDER BY code ASC`
    );

    return rows.map(mapSqliteAccountToAccount);
  },

  async createAccount(values: CreateAccountFormValues) {
    await runInitialDesktopMigrations();

    const db = await getDesktopDatabase();

    const account: Account = {
      id: `acc_${crypto.randomUUID()}`,
      code: values.code,
      name: values.name,
      type: values.type,
      normalBalance: values.normalBalance,
      status: values.status,
      description: values.description,
      createdAt: new Date().toISOString(),
    };

    await db.execute(
      `INSERT INTO accounts (
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

    return account;
  },
};