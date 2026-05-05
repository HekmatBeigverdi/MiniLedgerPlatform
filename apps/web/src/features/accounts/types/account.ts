export type AccountType =
  | "Asset"
  | "Liability"
  | "Equity"
  | "Revenue"
  | "Expense";

export type AccountStatus = "Active" | "Inactive";

export type NormalBalance = "Debit" | "Credit";

export type Account = {
  id: string;
  code: string;
  name: string;
  type: AccountType;
  normalBalance: NormalBalance;
  status: AccountStatus;
  description?: string;
  createdAt: string;
};