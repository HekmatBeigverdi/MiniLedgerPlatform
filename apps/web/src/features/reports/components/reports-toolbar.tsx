"use client";

import { useState } from "react";
import { Download, Printer } from "lucide-react";

import type {
  LedgerEntry,
  TrialBalanceRow,
} from "@/features/reports/types/report";
import {
  exportLedgerReport,
  exportTrialBalanceReport,
} from "@/features/reports/services/reports-export-resolver";
import { Button } from "@/components/ui/button";

type ReportsToolbarProps = {
  ledgerEntries: LedgerEntry[];
  trialBalanceRows: TrialBalanceRow[];
};

export function ReportsToolbar({
  ledgerEntries,
  trialBalanceRows,
}: ReportsToolbarProps) {
  const [isExporting, setIsExporting] = useState(false);

  function handlePrint() {
    window.print();
  }

  async function handleExportLedger() {
    setIsExporting(true);

    try {
      await exportLedgerReport(ledgerEntries);
    } finally {
      setIsExporting(false);
    }
  }

  async function handleExportTrialBalance() {
    setIsExporting(true);

    try {
      await exportTrialBalanceReport(trialBalanceRows);
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-end gap-2 print:hidden">
      <Button
        type="button"
        variant="outline"
        onClick={handleExportLedger}
        disabled={isExporting || ledgerEntries.length === 0}
      >
        <Download className="mr-2 h-4 w-4" />
        Export ledger CSV
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={handleExportTrialBalance}
        disabled={isExporting || trialBalanceRows.length === 0}
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