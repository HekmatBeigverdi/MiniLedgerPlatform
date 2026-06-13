import type { CreateAccountFormValues } from "@/features/accounts/schemas/account-schema";
import type { Account } from "@/features/accounts/types/account";

export type AccountsProvider = {
  getAccounts: () => Promise<Account[]>;
  createAccount: (values: CreateAccountFormValues) => Promise<Account>;
};