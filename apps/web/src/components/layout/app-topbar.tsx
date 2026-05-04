import { Bell, Search } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { LogoutButton } from "@/features/auth/components/logout-button";
import React from "react";

export function AppTopbar() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:px-6">
      <div className="flex items-center gap-3">
        <MobileSidebar />

        <div>
          <p className="text-sm font-medium">MiniLedgerPlatform</p>
          <p className="hidden text-xs text-muted-foreground sm:block">
            Web-first accounting workspace
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" type="button">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>

        <Button variant="outline" size="icon" type="button">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>

        <ThemeToggle />

        <LogoutButton />

        <Avatar className="h-9 w-9">
          <AvatarFallback>ML</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}