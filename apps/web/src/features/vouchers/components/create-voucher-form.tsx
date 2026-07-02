"use client";

import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";

import { voucherAccountOptions, voucherPartyOptions } from "@/features/vouchers/data/voucher-form-options";
import {
  createVoucherSchema,
  type CreateVoucherFormValues,
} from "@/features/vouchers/schemas/voucher-schema";
import { calculateVoucherTotals } from "@/features/vouchers/services/voucher-calculations";
import { getVouchersProvider } from "@/features/vouchers/services/vouchers-provider-resolver";
import type { Voucher } from "@/features/vouchers/types/voucher";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

type CreateVoucherFormProps = {
  onVoucherCreated: (voucher: Voucher) => void;
  onCancel?: () => void;
};

export function CreateVoucherForm({
  onVoucherCreated,
  onCancel,
}: CreateVoucherFormProps) {
  const form = useForm<CreateVoucherFormValues>({
    resolver: zodResolver(createVoucherSchema),
    defaultValues: {
      date: new Date().toISOString().slice(0, 10),
      reference: "",
      description: "",
      lines: [
        {
          accountCode: "",
          accountName: "",
          partyCode: "",
          partyName: "",
          description: "",
          debit: 0,
          credit: 0,
        },
        {
          accountCode: "",
          accountName: "",
          partyCode: "",
          partyName: "",
          description: "",
          debit: 0,
          credit: 0,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "lines",
  });

  const watchedLines = useWatch({
    control: form.control,
    name: "lines",
  });

  const totals = useMemo(() => {
    return calculateVoucherTotals(watchedLines);
  }, [watchedLines]);

  const isSubmitting = form.formState.isSubmitting;

  function addLine() {
    append({
      accountCode: "",
      accountName: "",
      partyCode: "",
      partyName: "",
      description: "",
      debit: 0,
      credit: 0,
    });
  }

  async function onSubmit(values: CreateVoucherFormValues) {
    const createdVoucher = await getVouchersProvider().createVoucher(values);

    onVoucherCreated(createdVoucher);
    form.reset();
  }

  return (
    <Form {...form}>
      <form className="grid gap-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-4 sm:grid-cols-3">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Voucher date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="reference"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reference</FormLabel>
                <FormControl>
                  <Input placeholder="INV-1001" {...field} />
                </FormControl>
                <FormDescription>
                  Optional invoice, bill, or tracking number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-end">
            <Badge
              variant={totals.isBalanced ? "default" : "secondary"}
              className="h-10 px-4"
            >
              {totals.isBalanced ? "Balanced" : "Not balanced"}
            </Badge>
          </div>
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Voucher description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the accounting transaction."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator />

        <div className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-semibold tracking-tight">
                Voucher lines
              </h3>
              <p className="text-sm text-muted-foreground">
                Add at least two lines and make sure total debit equals total
                credit.
              </p>
            </div>

            <Button type="button" variant="outline" onClick={addLine}>
              <Plus className="mr-2 h-4 w-4" />
              Add line
            </Button>
          </div>

          <div className="space-y-4">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="grid gap-4 rounded-lg border bg-card p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Line {index + 1}</p>

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    disabled={fields.length <= 2}
                    onClick={() => remove(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove line</span>
                  </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.2fr_1.2fr_1fr_1fr]">
                  <FormField
                    control={form.control}
                    name={`lines.${index}.accountCode`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={(value) => {
                            const selectedAccount = voucherAccountOptions.find(
                              (account) => account.code === value
                            );

                            field.onChange(value);

                            form.setValue(
                              `lines.${index}.accountName`,
                              selectedAccount?.name ?? ""
                            );
                          }}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select account" />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            {voucherAccountOptions.map((account) => (
                              <SelectItem
                                key={account.code}
                                value={account.code}
                              >
                                {account.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`lines.${index}.partyCode`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Party</FormLabel>
                        <Select
                          value={field.value || "none"}
                          onValueChange={(value) => {
                            if (value === "none") {
                              field.onChange("");
                              form.setValue(`lines.${index}.partyName`, "");
                              return;
                            }

                            const selectedParty = voucherPartyOptions.find(
                              (party) => party.code === value
                            );

                            field.onChange(value);

                            form.setValue(
                              `lines.${index}.partyName`,
                              selectedParty?.name ?? ""
                            );
                          }}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Optional party" />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value="none">No party</SelectItem>
                            {voucherPartyOptions.map((party) => (
                              <SelectItem key={party.code} value={party.code}>
                                {party.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`lines.${index}.debit`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Debit</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="0" 
                            step="0.01" 
                            {...field}
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value === "" ? 0 : parseFloat(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`lines.${index}.credit`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Credit</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="0" 
                            step="0.01" 
                            {...field}
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value === "" ? 0 : parseFloat(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name={`lines.${index}.description`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Line description</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Optional line description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>

          {form.formState.errors.lines?.root?.message ? (
            <p className="text-sm font-medium text-destructive">
              {form.formState.errors.lines.root.message}
            </p>
          ) : null}

          {typeof form.formState.errors.lines?.message === "string" ? (
            <p className="text-sm font-medium text-destructive">
              {form.formState.errors.lines.message}
            </p>
          ) : null}
        </div>

        <div className="grid gap-3 rounded-lg border bg-muted/40 p-4 sm:grid-cols-3">
          <div>
            <p className="text-sm text-muted-foreground">Total debit</p>
            <p className="text-lg font-semibold">
              {new Intl.NumberFormat("en", {
                style: "currency",
                currency: "USD",
              }).format(totals.totalDebit)}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Total credit</p>
            <p className="text-lg font-semibold">
              {new Intl.NumberFormat("en", {
                style: "currency",
                currency: "USD",
              }).format(totals.totalCredit)}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Difference</p>
            <p className="text-lg font-semibold">
              {new Intl.NumberFormat("en", {
                style: "currency",
                currency: "USD",
              }).format(totals.difference)}
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          {onCancel ? (
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
          ) : null}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create voucher"}
          </Button>
        </div>
      </form>
    </Form>
  );
}