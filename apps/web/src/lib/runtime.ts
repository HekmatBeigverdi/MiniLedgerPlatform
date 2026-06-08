import { appConfig } from "@/config/app";

export function isTauriRuntime() {
  if (typeof window === "undefined") {
    return false;
  }

  const tauriWindow = window as unknown as {
    __TAURI__?: unknown;
    __TAURI_INTERNALS__?: unknown;
  };

  return Boolean(tauriWindow.__TAURI__ || tauriWindow.__TAURI_INTERNALS__);
}

export function isDesktopMode() {
  return appConfig.mode === "desktop" || isTauriRuntime();
}

export function isWebMode() {
  return !isDesktopMode();
}