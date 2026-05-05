import { z } from "zod";

export const createAccountSchema = z.object({
  code: z
    .string()
    .min(1, "Account code is required.")
    .max(20, "Account code must be 20 characters or fewer."),
  name: z
    .string()
    .min(1, "Account name is required.")
    .max(120, "Account name must be 120 characters or fewer."),
  type: z.enum(["Asset", "Liability", "Equity", "Revenue", "Expense"], {
    message: "Please select an account type.",
  }),
  normalBalance: z.enum(["Debit", "Credit"], {
    message: "Please select the normal balance.",
  }),
  status: z.enum(["Active", "Inactive"], {
    message: "Please select account status.",
  }),
  description: z.string().max(500).optional(),
});

export type CreateAccountFormValues = z.infer<typeof createAccountSchema>;