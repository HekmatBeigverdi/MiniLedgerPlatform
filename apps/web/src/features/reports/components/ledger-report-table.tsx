import type { LedgerEntry } from "@/features/reports/types/report";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

type LedgerReportTableProps = {
  entries: LedgerEntry[];
};

export function LedgerReportTable({ entries }: LedgerReportTableProps) {
  const totalDebit = entries.reduce((sum, entry) => sum + entry.debit, 0);
  const totalCredit = entries.reduce((sum, entry) => sum + entry.credit, 0);

  return (
    <div className="@container min-w-0 rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Voucher</TableHead>
            <TableHead className="hidden @min-[720px]:table-cell">
              Description
            </TableHead>
            <TableHead className="hidden @min-[720px]:table-cell">
              Party
            </TableHead>
            <TableHead>Debit</TableHead>
            <TableHead>Credit</TableHead>
            <TableHead className="hidden @min-[720px]:table-cell">
              Running Balance
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {entries.map((entry) => (
            <TableRow key={entry.id}>
              <TableCell className="text-muted-foreground">
                {new Intl.DateTimeFormat("en", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(entry.date))}
              </TableCell>

              <TableCell className="font-mono text-sm">
                {entry.voucherNumber}
              </TableCell>

              <TableCell className="hidden whitespace-normal @min-[720px]:table-cell">
                {entry.description ? (
                  entry.description
                ) : (
                  <span className="text-muted-foreground">No description</span>
                )}
              </TableCell>

              <TableCell className="hidden @min-[720px]:table-cell">
                {entry.partyName ? (
                  entry.partyName
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </TableCell>

              <TableCell>
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: "USD",
                }).format(entry.debit)}
              </TableCell>

              <TableCell>
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: "USD",
                }).format(entry.credit)}
              </TableCell>

              <TableCell className="hidden font-medium @min-[720px]:table-cell">
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: "USD",
                }).format(entry.runningBalance)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} className="table-cell @min-[720px]:hidden">
              Total
            </TableCell>
            <TableCell
              colSpan={4}
              className="hidden @min-[720px]:table-cell"
            >
              Total
            </TableCell>
            <TableCell>
              {new Intl.NumberFormat("en", {
                style: "currency",
                currency: "USD",
              }).format(totalDebit)}
            </TableCell>
            <TableCell>
              {new Intl.NumberFormat("en", {
                style: "currency",
                currency: "USD",
              }).format(totalCredit)}
            </TableCell>
            <TableCell className="hidden @min-[720px]:table-cell" />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}