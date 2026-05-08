export type VoucherStatus =
  | "Draft"
  | "Posted"
  | "Voided";

export type VoucherLine = {
  id: string;
  accountCode: string;
  accountName: string;
  partyCode?: string;
  partyName?: string;
  description?: string;
  debit: number;
  credit: number;
};

export type Voucher = {
  id: string;
  number: string;
  date: string;
  reference?: string;
  description?: string;
  status: VoucherStatus;
  lines: VoucherLine[];
  totalDebit: number;
  totalCredit: number;
  createdAt: string;
};