import type { TrialBalanceRow } from "@/features/reports/types/report";
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

type TrialBalanceTableProps = {
  rows: TrialBalanceRow[];
};

export function TrialBalanceTable({ rows }: TrialBalanceTableProps) {
  const totalDebit = rows.reduce((sum, row) => sum + row.debit, 0);
  const totalCredit = rows.reduce((sum, row) => sum + row.credit, 0);
  const isBalanced = totalDebit === totalCredit;

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Account Code</TableHead>
            <TableHead>Account Name</TableHead>
            <TableHead className="hidden md:table-cell">Type</TableHead>
            <TableHead>Debit</TableHead>
            <TableHead>Credit</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-mono text-sm">
                {row.accountCode}
              </TableCell>

              <TableCell className="whitespace-normal font-medium">
                {row.accountName}
              </TableCell>

              <TableCell className="hidden text-muted-foreground md:table-cell">
                {row.accountType}
              </TableCell>

              <TableCell>
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: "USD",
                }).format(row.debit)}
              </TableCell>

              <TableCell>
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: "USD",
                }).format(row.credit)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={2} className="table-cell md:hidden">
              {isBalanced ? "Balanced total" : "Unbalanced total"}
            </TableCell>
            <TableCell colSpan={3} className="hidden md:table-cell">
              {isBalanced ? "Balanced total" : "Unbalanced total"}
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
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}