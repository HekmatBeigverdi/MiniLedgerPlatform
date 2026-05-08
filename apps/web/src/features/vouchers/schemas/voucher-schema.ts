import { z } from "zod";

const voucherLineSchema = z.object({
  accountCode: z.string().min(1, "Account is required."),
  accountName: z.string().min(1),
  partyCode: z.string().optional(),
  partyName: z.string().optional(),
  description: z.string().optional(),
  debit: z.number().min(0),
  credit: z.number().min(0),
});

export const createVoucherSchema = z
  .object({
    date: z.string().min(1, "Voucher date is required."),
    reference: z.string().optional(),
    description: z.string().optional(),
    lines: z
      .array(voucherLineSchema)
      .min(2, "Voucher requires at least two lines."),
  })
  .superRefine((data, ctx) => {
    const totalDebit = data.lines.reduce(
      (sum, line) => sum + line.debit,
      0
    );

    const totalCredit = data.lines.reduce(
      (sum, line) => sum + line.credit,
      0
    );

    if (totalDebit !== totalCredit) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Total debit and total credit must be equal.",
        path: ["lines"],
      });
    }

    if (totalDebit <= 0 || totalCredit <= 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Voucher totals must be greater than zero.",
        path: ["lines"],
      });
    }
  });

export type CreateVoucherFormValues = z.infer<
  typeof createVoucherSchema
>;