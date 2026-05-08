"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { CreateVoucherForm } from "@/features/vouchers/components/create-voucher-form";
import type { Voucher } from "@/features/vouchers/types/voucher";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

type CreateVoucherDialogProps = {
  onVoucherCreated: (voucher: Voucher) => void;
};

export function CreateVoucherDialog({
  onVoucherCreated,
}: CreateVoucherDialogProps) {
  const [open, setOpen] = useState(false);

  function handleVoucherCreated(voucher: Voucher) {
    onVoucherCreated(voucher);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New voucher
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-6xl">
        <DialogHeader>
          <DialogTitle>Create voucher</DialogTitle>
          <DialogDescription>
            Create a balanced journal voucher using debit and credit lines.
          </DialogDescription>
        </DialogHeader>

        <CreateVoucherForm
          onVoucherCreated={handleVoucherCreated}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}