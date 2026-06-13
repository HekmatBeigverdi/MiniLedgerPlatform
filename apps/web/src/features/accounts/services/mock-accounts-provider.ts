import { createAccount, getAccounts } from "@/features/accounts/services/accounts-service";
import type { AccountsProvider } from "@/features/accounts/services/accounts-provider";

export const mockAccountsProvider: AccountsProvider = {
  getAccounts,
  createAccount,
};