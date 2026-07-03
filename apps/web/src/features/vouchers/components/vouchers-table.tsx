import { MoreHorizontal } from "lucide-react";

import { VoucherStatusBadge } from "@/features/vouchers/components/voucher-status-badge";
import type { Voucher } from "@/features/vouchers/types/voucher";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

type VouchersTableProps = {
  vouchers: Voucher[];
};

export function VouchersTable({ vouchers }: VouchersTableProps) {
  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Voucher</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="hidden md:table-cell">Reference</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Total Debit</TableHead>
            <TableHead>Total Credit</TableHead>
            <TableHead className="w-12" />
          </TableRow>
        </TableHeader>

        <TableBody>
          {vouchers.map((voucher) => (
            <TableRow key={voucher.id}>
              <TableCell className="font-mono text-sm font-medium">
                {voucher.number}
              </TableCell>

              <TableCell className="text-muted-foreground">
                {new Intl.DateTimeFormat("en", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(voucher.date))}
              </TableCell>

              <TableCell className="hidden md:table-cell">
                {voucher.reference ? (
                  <span className="font-mono text-sm">{voucher.reference}</span>
                ) : (
                  <span className="text-muted-foreground">—</span>
                )}
              </TableCell>

              <TableCell className="whitespace-normal">
                {voucher.description ? (
                  <span>{voucher.description}</span>
                ) : (
                  <span className="text-muted-foreground">No description</span>
                )}
              </TableCell>

              <TableCell>
                <VoucherStatusBadge status={voucher.status} />
              </TableCell>

              <TableCell>
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: "USD",
                }).format(voucher.totalDebit)}
              </TableCell>

              <TableCell>
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: "USD",
                }).format(voucher.totalCredit)}
              </TableCell>

              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open voucher actions</span>
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Voucher actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Edit voucher</DropdownMenuItem>
                    <DropdownMenuItem>Post voucher</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Void voucher
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}