import {
  getDesktopDatabase,
  runInitialDesktopMigrations,
} from "@/features/desktop-db/services/desktop-database";
import type { CreatePartyFormValues } from "@/features/parties/schemas/party-schema";
import { seedDesktopPartiesIfEmpty } from "@/features/parties/services/desktop-parties-seed";
import type { PartiesProvider } from "@/features/parties/services/parties-provider";
import {
  mapSqlitePartyToParty,
  type SqlitePartyRow,
} from "@/features/parties/services/parties-sqlite-mapper";
import type { Party } from "@/features/parties/types/party";

export const desktopPartiesProvider: PartiesProvider = {
  async getParties() {
    await runInitialDesktopMigrations();
    await seedDesktopPartiesIfEmpty();

    const db = await getDesktopDatabase();

    const rows = await db.select<SqlitePartyRow[]>(
      `SELECT
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
      FROM parties
      ORDER BY code ASC`
    );

    return rows.map(mapSqlitePartyToParty);
  },

  async createParty(values: CreatePartyFormValues) {
    await runInitialDesktopMigrations();

    const db = await getDesktopDatabase();

    const party: Party = {
      id: `pty_${crypto.randomUUID()}`,
      code: values.code,
      displayName: values.displayName,
      type: values.type,
      status: values.status,
      email: values.email || undefined,
      phone: values.phone || undefined,
      taxId: values.taxId || undefined,
      address: values.address || undefined,
      openingBalance: values.openingBalance,
      createdAt: new Date().toISOString(),
    };

    await db.execute(
      `INSERT INTO parties (
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

    return party;
  },
};