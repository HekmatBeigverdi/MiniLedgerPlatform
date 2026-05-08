import { mockVouchers } from "@/features/vouchers/data/mock-vouchers";
import type { CreateVoucherFormValues } from "@/features/vouchers/schemas/voucher-schema";
import type { Voucher } from "@/features/vouchers/types/voucher";

export async function getVouchers(): Promise<Voucher[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return mockVouchers;
}

export async function createVoucher(
  values: CreateVoucherFormValues
): Promise<Voucher> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  const totalDebit = values.lines.reduce(
    (sum, line) => sum + line.debit,
    0
  );

  const totalCredit = values.lines.reduce(
    (sum, line) => sum + line.credit,
    0
  );

  return {
    id: `vch_${crypto.randomUUID()}`,
    number: `JV-${Math.floor(Math.random() * 10000)}`,
    date: values.date,
    reference: values.reference,
    description: values.description,
    status: "Draft",
    lines: values.lines.map((line) => ({
      ...line,
      id: crypto.randomUUID(),
    })),
    totalDebit,
    totalCredit,
    createdAt: new Date().toISOString(),
  };
}