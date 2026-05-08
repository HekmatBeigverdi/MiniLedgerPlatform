import { mockAccounts } from "@/features/accounts/data/mock-accounts";
import { mockParties } from "@/features/parties/data/mock-parties";

export const voucherAccountOptions = mockAccounts
  .filter((account) => account.status === "Active")
  .map((account) => ({
    code: account.code,
    name: account.name,
    label: `${account.code} — ${account.name}`,
  }));

export const voucherPartyOptions = mockParties
  .filter((party) => party.status === "Active")
  .map((party) => ({
    code: party.code,
    name: party.displayName,
    label: `${party.code} — ${party.displayName}`,
  }));