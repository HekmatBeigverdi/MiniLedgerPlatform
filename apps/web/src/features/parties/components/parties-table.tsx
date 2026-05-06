import { MoreHorizontal } from "lucide-react";

import { PartyStatusBadge } from "@/features/parties/components/party-status-badge";
import { PartyTypeBadge } from "@/features/parties/components/party-type-badge";
import type { Party } from "@/features/parties/types/party";
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

type PartiesTableProps = {
  parties: Party[];
};

export function PartiesTable({ parties }: PartiesTableProps) {
  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Opening Balance</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="w-12" />
          </TableRow>
        </TableHeader>

        <TableBody>
          {parties.map((party) => (
            <TableRow key={party.id}>
              <TableCell className="font-mono text-sm">{party.code}</TableCell>

              <TableCell>
                <div>
                  <p className="font-medium">{party.displayName}</p>
                  {party.taxId ? (
                    <p className="mt-1 text-xs text-muted-foreground">
                      Tax ID: {party.taxId}
                    </p>
                  ) : null}
                </div>
              </TableCell>

              <TableCell>
                <PartyTypeBadge type={party.type} />
              </TableCell>

              <TableCell>
                <div className="text-sm">
                  {party.email ? <p>{party.email}</p> : null}
                  {party.phone ? (
                    <p className="text-muted-foreground">{party.phone}</p>
                  ) : null}
                  {!party.email && !party.phone ? (
                    <span className="text-muted-foreground">No contact</span>
                  ) : null}
                </div>
              </TableCell>

              <TableCell>
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: "USD",
                }).format(party.openingBalance)}
              </TableCell>

              <TableCell>
                <PartyStatusBadge status={party.status} />
              </TableCell>

              <TableCell className="text-muted-foreground">
                {new Intl.DateTimeFormat("en", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(party.createdAt))}
              </TableCell>

              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open party actions</span>
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Party actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View details</DropdownMenuItem>
                    <DropdownMenuItem>Edit party</DropdownMenuItem>
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