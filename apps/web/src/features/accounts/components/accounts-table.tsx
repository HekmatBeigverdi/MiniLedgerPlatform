import { MoreHorizontal } from "lucide-react";

import { AccountStatusBadge } from "@/features/accounts/components/account-status-badge";
import { AccountTypeBadge } from "@/features/accounts/components/account-type-badge";
import type { Account } from "@/features/accounts/types/account";
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

type AccountsTableProps = {
  accounts: Account[];
};

export function AccountsTable({ accounts }: AccountsTableProps) {
  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Normal Balance</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">Created</TableHead>
            <TableHead className="w-12" />
          </TableRow>
        </TableHeader>

        <TableBody>
          {accounts.map((account) => (
            <TableRow key={account.id}>
              <TableCell className="font-mono text-sm">
                {account.code}
              </TableCell>
              <TableCell className="whitespace-normal">
                <div>
                  <p className="font-medium">{account.name}</p>
                  {account.description ? (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {account.description}
                    </p>
                  ) : null}
                </div>
              </TableCell>
              <TableCell>
                <AccountTypeBadge type={account.type} />
              </TableCell>
              <TableCell>{account.normalBalance}</TableCell>
              <TableCell>
                <AccountStatusBadge status={account.status} />
              </TableCell>
              <TableCell className="hidden text-muted-foreground md:table-cell">
                {new Intl.DateTimeFormat("en", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(account.createdAt))}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open account actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Account actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Edit account</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Deactivate
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