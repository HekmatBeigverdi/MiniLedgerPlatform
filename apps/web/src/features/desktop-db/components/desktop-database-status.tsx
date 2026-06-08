"use client";

import { useState } from "react";
import { Database, RefreshCw } from "lucide-react";

import {
  getDesktopDatabaseHealth,
  type DesktopDatabaseHealth,
} from "@/features/desktop-db/services/desktop-database";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DesktopDatabaseStatus() {
  const [health, setHealth] = useState<DesktopDatabaseHealth | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  async function checkDatabase() {
    setIsChecking(true);

    const result = await getDesktopDatabaseHealth();

    setHealth(result);
    setIsChecking(false);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Desktop database status
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={health?.isDesktop ? "default" : "secondary"}>
            {health?.isDesktop ? "Desktop mode" : "Web mode"}
          </Badge>

          <Badge variant={health?.connected ? "default" : "outline"}>
            {health?.connected ? "Connected" : "Not connected"}
          </Badge>

          {health?.schemaVersion ? (
            <Badge variant="secondary">
              Schema v{health.schemaVersion}
            </Badge>
          ) : null}
        </div>

        <p className="text-sm leading-7 text-muted-foreground">
          {health?.message ??
            "Run the health check to verify whether the local SQLite database is available."}
        </p>

        <Button type="button" onClick={checkDatabase} disabled={isChecking}>
          <RefreshCw className="mr-2 h-4 w-4" />
          {isChecking ? "Checking..." : "Check database"}
        </Button>
      </CardContent>
    </Card>
  );
}