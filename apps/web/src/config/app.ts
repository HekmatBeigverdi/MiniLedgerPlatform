export const appConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? "MiniLedgerPlatform",
  description:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ??
    "A web-first and desktop-ready accounting platform.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  apiBaseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000",
  mode: process.env.NEXT_PUBLIC_APP_MODE ?? "web",
};