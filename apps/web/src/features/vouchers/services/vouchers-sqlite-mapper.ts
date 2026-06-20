import type { Voucher, VoucherLine } from "@/features/vouchers/types/voucher";

export type SqliteVoucherRow = {
  id: string;
  number: string;
  date: string;
  reference: string | null;
  description: string | null;
  status: Voucher["status"];
  total_debit: number;
  total_credit: number;
  created_at: string;
};

export type SqliteVoucherLineRow = {
  id: string;
  voucher_id: string;
  account_code: string;
  account_name: string;
  party_code: string | null;
  party_name: string | null;
  description: string | null;
  debit: number;
  credit: number;
  line_order: number;
};

export function mapSqliteVoucherLineToVoucherLine(
  row: SqliteVoucherLineRow
): VoucherLine {
  return {
    id: row.id,
    accountCode: row.account_code,
    accountName: row.account_name,
    partyCode: row.party_code ?? undefined,
    partyName: row.party_name ?? undefined,
    description: row.description ?? undefined,
    debit: row.debit,
    credit: row.credit,
  };
}

export function mapSqliteVoucherToVoucher(
  row: SqliteVoucherRow,
  lines: VoucherLine[]
): Voucher {
  return {
    id: row.id,
    number: row.number,
    date: row.date,
    reference: row.reference ?? undefined,
    description: row.description ?? undefined,
    status: row.status,
    lines,
    totalDebit: row.total_debit,
    totalCredit: row.total_credit,
    createdAt: row.created_at,
  };
}