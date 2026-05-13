import { mockAccounts } from "@/features/accounts/data/mock-accounts";
import type { ReportDateRange } from "@/features/reports/types/report";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

type ReportsFilterBarProps = {
  selectedAccountCode: string;
  dateRange: ReportDateRange;
  onAccountChange: (accountCode: string) => void;
  onDateRangeChange: (dateRange: ReportDateRange) => void;
  onRefresh: () => void;
};

export function ReportsFilterBar({
  selectedAccountCode,
  dateRange,
  onAccountChange,
  onDateRangeChange,
  onRefresh,
}: ReportsFilterBarProps) {
  const activeAccounts = mockAccounts.filter(
    (account) => account.status === "Active"
  );

  return (
    <div className="grid gap-4 rounded-lg border bg-card p-4 lg:grid-cols-[1.4fr_1fr_1fr_auto] lg:items-end">
      <div className="grid gap-2">
        <label className="text-sm font-medium">Ledger account</label>
        <Select value={selectedAccountCode} onValueChange={onAccountChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select account" />
          </SelectTrigger>

          <SelectContent>
            {activeAccounts.map((account) => (
              <SelectItem key={account.id} value={account.code}>
                {account.code} — {account.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">From</label>
        <Input
          type="date"
          value={dateRange.from}
          onChange={(event) =>
            onDateRangeChange({
              ...dateRange,
              from: event.target.value,
            })
          }
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">To</label>
        <Input
          type="date"
          value={dateRange.to}
          onChange={(event) =>
            onDateRangeChange({
              ...dateRange,
              to: event.target.value,
            })
          }
        />
      </div>

      <Button type="button" onClick={onRefresh}>
        Refresh
      </Button>
    </div>
  );
}