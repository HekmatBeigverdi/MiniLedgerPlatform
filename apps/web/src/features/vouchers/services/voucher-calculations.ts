import type { CreateVoucherFormValues } from "@/features/vouchers/schemas/voucher-schema";

export function calculateVoucherTotals(lines: CreateVoucherFormValues["lines"]) {
  const totalDebit = lines.reduce((sum, line) => {
    return sum + Number(line.debit || 0);
  }, 0);

  const totalCredit = lines.reduce((sum, line) => {
    return sum + Number(line.credit || 0);
  }, 0);

  const difference = totalDebit - totalCredit;

  return {
    totalDebit,
    totalCredit,
    difference,
    isBalanced: totalDebit > 0 && totalDebit === totalCredit,
  };
}