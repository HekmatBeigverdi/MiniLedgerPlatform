import { isDesktopMode } from "@/lib/runtime";
import { desktopVouchersProvider } from "@/features/vouchers/services/desktop-vouchers-provider";
import { mockVouchersProvider } from "@/features/vouchers/services/mock-vouchers-provider";
import type { VouchersProvider } from "@/features/vouchers/services/vouchers-provider";

export function getVouchersProvider(): VouchersProvider {
  if (isDesktopMode()) {
    return desktopVouchersProvider;
  }

  return mockVouchersProvider;
}