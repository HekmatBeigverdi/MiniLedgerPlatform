import { isDesktopMode } from "@/lib/runtime";
import { desktopReportsProvider } from "@/features/reports/services/desktop-reports-provider";
import { mockReportsProvider } from "@/features/reports/services/mock-reports-provider";
import type { ReportsProvider } from "@/features/reports/services/reports-provider";

export function getReportsProvider(): ReportsProvider {
  if (isDesktopMode()) {
    return desktopReportsProvider;
  }

  return mockReportsProvider;
}