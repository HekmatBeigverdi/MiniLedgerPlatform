export type ReportDateRange = {
  from: string;
  to: string;
};

export type LedgerEntry = {
  id: string;
  date: string;
  voucherNumber: string;
  accountCode: string;
  accountName: string;
  partyName?: string;
  description?: string;
  debit: number;
  credit: number;
  runningBalance: number;
};

export type TrialBalanceRow = {
  id: string;
  accountCode: string;
  accountName: string;
  accountType: "Asset" | "Liability" | "Equity" | "Revenue" | "Expense";
  debit: number;
  credit: number;
};

export type ReportsSummary = {
  totalDebit: number;
  totalCredit: number;
  difference: number;
  isBalanced: boolean;
  totalAccounts: number;
  totalMovements: number;
};