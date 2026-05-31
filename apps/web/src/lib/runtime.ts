import { appConfig } from "@/config/app";

export function isDesktopMode() {
  return appConfig.mode === "desktop";
}

export function isWebMode() {
  return appConfig.mode === "web";
}