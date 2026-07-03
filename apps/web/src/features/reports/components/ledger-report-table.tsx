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
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Voucher</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="hidden md:table-cell">Party</TableHead>
            <TableHead>Debit</TableHead>
            <TableHead>Credit</TableHead>
            <TableHead>Running Balance</TableHead>
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

              <TableCell className="whitespace-normal">
                {entry.description ? (
                  entry.description
                ) : (
                  <span className="text-muted-foreground">No description</span>
                )}
              </TableCell>

              <TableCell className="hidden md:table-cell">
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

              <TableCell className="font-medium">
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
            <TableCell colSpan={3} className="table-cell md:hidden">
              Total
            </TableCell>
            <TableCell colSpan={4} className="hidden md:table-cell">
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
            <TableCell />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}