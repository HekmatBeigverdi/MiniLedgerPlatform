import { isDesktopMode } from "@/lib/runtime";
import type { AccountsProvider } from "@/features/accounts/services/accounts-provider";
import { desktopAccountsProvider } from "@/features/accounts/services/desktop-accounts-provider";
import { mockAccountsProvider } from "@/features/accounts/services/mock-accounts-provider";

export function getAccountsProvider(): AccountsProvider {
  if (isDesktopMode()) {
    return desktopAccountsProvider;
  }

  return mockAccountsProvider;
}