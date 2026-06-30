"use client";

import { Download, Printer } from "lucide-react";

import type {
  LedgerEntry,
  TrialBalanceRow,
} from "@/features/reports/types/report";
import {
  exportLedgerReportToCsv,
  exportTrialBalanceToCsv,
} from "@/features/reports/services/reports-export";
import { Button } from "@/components/ui/button";

type ReportsToolbarProps = {
  ledgerEntries: LedgerEntry[];
  trialBalanceRows: TrialBalanceRow[];
};

export function ReportsToolbar({
  ledgerEntries,
  trialBalanceRows,
}: ReportsToolbarProps) {
  function handlePrint() {
    window.print();
  }

  return (
    <div className="flex flex-wrap items-center justify-end gap-2 print:hidden">
      <Button
        type="button"
        variant="outline"
        onClick={() => exportLedgerReportToCsv(ledgerEntries)}
        disabled={ledgerEntries.length === 0}
      >
        <Download className="mr-2 h-4 w-4" />
        Export ledger CSV
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={() => exportTrialBalanceToCsv(trialBalanceRows)}
        disabled={trialBalanceRows.length === 0}
      >
        <Download className="mr-2 h-4 w-4" />
        Export trial balance CSV
      </Button>

      <Button type="button" onClick={handlePrint}>
        <Printer className="mr-2 h-4 w-4" />
        Print
      </Button>
    </div>
  );
}