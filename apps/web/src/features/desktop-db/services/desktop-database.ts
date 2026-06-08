import Database from "@tauri-apps/plugin-sql";

import { initialSchemaStatements } from "@/features/desktop-db/data/initial-schema";
import { isDesktopMode } from "@/lib/runtime";

const DATABASE_URL = "sqlite:miniledger.db";

export type DesktopDatabaseHealth = {
  isDesktop: boolean;
  connected: boolean;
  schemaVersion: string | null;
  message: string;
};

let databasePromise: Promise<Database> | null = null;

export function canUseDesktopDatabase() {
  return isDesktopMode() && typeof window !== "undefined";
}

export async function getDesktopDatabase() {
  if (!canUseDesktopDatabase()) {
    throw new Error("Desktop database is only available in desktop mode.");
  }

  databasePromise ??= Database.load(DATABASE_URL);

  return databasePromise;
}

export async function runInitialDesktopMigrations() {
  const db = await getDesktopDatabase();

  for (const statement of initialSchemaStatements) {
    await db.execute(statement);
  }
}

export async function getDesktopDatabaseHealth(): Promise<DesktopDatabaseHealth> {
  if (!canUseDesktopDatabase()) {
    return {
      isDesktop: false,
      connected: false,
      schemaVersion: null,
      message: "Desktop database is not available in web mode.",
    };
  }

  try {
    await runInitialDesktopMigrations();

    const db = await getDesktopDatabase();

    const rows = await db.select<Array<{ value: string }>>(
      "SELECT value FROM app_settings WHERE key = ?",
      ["schema_version"]
    );

    return {
      isDesktop: true,
      connected: true,
      schemaVersion: rows[0]?.value ?? null,
      message: "SQLite database is connected and initialized.",
    };
  } catch (error) {
    console.error("Desktop database health check failed:", error);

    let message = "Unknown desktop database error.";

    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === "string") {
      message = error;
    } else {
      try {
        message = JSON.stringify(error);
      } catch {
        message = String(error);
      }
    }

    return {
      isDesktop: true,
      connected: false,
      schemaVersion: null,
      message,
    };
  }
}