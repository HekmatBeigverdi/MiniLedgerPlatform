"use client";

import { useState } from "react";
import { Download, FileText, Printer } from "lucide-react";

import type {
  LedgerEntry,
  TrialBalanceRow,
} from "@/features/reports/types/report";
import {
  exportLedgerReport,
  exportTrialBalanceReport,
} from "@/features/reports/services/reports-export-resolver";
import {
  exportLedgerReportToPdf,
  exportTrialBalanceToPdf,
} from "@/features/reports/services/reports-pdf-export";
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

  async function runExport(action: () => Promise<unknown>) {
    setIsExporting(true);

    try {
      await action();
    } finally {
      setIsExporting(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-end gap-2 print:hidden">
      <Button
        type="button"
        variant="outline"
        onClick={() => runExport(() => exportLedgerReport(ledgerEntries))}
        disabled={isExporting || ledgerEntries.length === 0}
      >
        <Download className="mr-2 h-4 w-4" />
        Ledger CSV
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={() =>
          runExport(() => exportTrialBalanceReport(trialBalanceRows))
        }
        disabled={isExporting || trialBalanceRows.length === 0}
      >
        <Download className="mr-2 h-4 w-4" />
        Trial CSV
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={() => runExport(() => exportLedgerReportToPdf(ledgerEntries))}
        disabled={isExporting || ledgerEntries.length === 0}
      >
        <FileText className="mr-2 h-4 w-4" />
        Ledger PDF
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={() => runExport(() => exportTrialBalanceToPdf(trialBalanceRows))}
        disabled={isExporting || trialBalanceRows.length === 0}
      >
        <FileText className="mr-2 h-4 w-4" />
        Trial PDF
      </Button>

      <Button type="button" onClick={handlePrint}>
        <Printer className="mr-2 h-4 w-4" />
        Print
      </Button>
    </div>
  );
}