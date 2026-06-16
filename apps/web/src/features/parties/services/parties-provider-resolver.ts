import { isDesktopMode } from "@/lib/runtime";
import { desktopPartiesProvider } from "@/features/parties/services/desktop-parties-provider";
import { mockPartiesProvider } from "@/features/parties/services/mock-parties-provider";
import type { PartiesProvider } from "@/features/parties/services/parties-provider";

export function getPartiesProvider(): PartiesProvider {
  if (isDesktopMode()) {
    return desktopPartiesProvider;
  }

  return mockPartiesProvider;
}