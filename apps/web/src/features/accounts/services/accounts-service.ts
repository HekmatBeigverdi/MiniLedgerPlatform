import { mockAccounts } from "@/features/accounts/data/mock-accounts";
import type { CreateAccountFormValues } from "@/features/accounts/schemas/account-schema";
import type { Account } from "@/features/accounts/types/account";

export async function getAccounts(): Promise<Account[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return mockAccounts;
}

export async function createAccount(
  values: CreateAccountFormValues
): Promise<Account> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    id: `acc_${crypto.randomUUID()}`,
    code: values.code,
    name: values.name,
    type: values.type,
    normalBalance: values.normalBalance,
    status: values.status,
    description: values.description,
    createdAt: new Date().toISOString(),
  };
}