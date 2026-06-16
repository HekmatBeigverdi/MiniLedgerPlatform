import type { Party } from "@/features/parties/types/party";

export type SqlitePartyRow = {
  id: string;
  code: string;
  display_name: string;
  type: Party["type"];
  status: Party["status"];
  email: string | null;
  phone: string | null;
  tax_id: string | null;
  address: string | null;
  opening_balance: number;
  created_at: string;
};

export function mapSqlitePartyToParty(row: SqlitePartyRow): Party {
  return {
    id: row.id,
    code: row.code,
    displayName: row.display_name,
    type: row.type,
    status: row.status,
    email: row.email ?? undefined,
    phone: row.phone ?? undefined,
    taxId: row.tax_id ?? undefined,
    address: row.address ?? undefined,
    openingBalance: row.opening_balance,
    createdAt: row.created_at,
  };
}