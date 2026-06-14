import type { Account } from "@/features/accounts/types/account";

export type SqliteAccountRow = {
  id: string;
  code: string;
  name: string;
  type: Account["type"];
  normal_balance: Account["normalBalance"];
  status: Account["status"];
  description: string | null;
  created_at: string;
};

export function mapSqliteAccountToAccount(row: SqliteAccountRow): Account {
  return {
    id: row.id,
    code: row.code,
    name: row.name,
    type: row.type,
    normalBalance: row.normal_balance,
    status: row.status,
    description: row.description ?? undefined,
    createdAt: row.created_at,
  };
}