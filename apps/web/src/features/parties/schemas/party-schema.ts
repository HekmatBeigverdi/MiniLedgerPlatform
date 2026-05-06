import { z } from "zod";

export const createPartySchema = z.object({
  code: z
    .string()
    .min(1, "Party code is required.")
    .max(20, "Party code must be 20 characters or fewer."),
  displayName: z
    .string()
    .min(1, "Display name is required.")
    .max(120, "Display name must be 120 characters or fewer."),
  type: z.enum(["Customer", "Vendor", "Employee", "Shareholder", "Other"], {
    message: "Please select a party type.",
  }),
  status: z.enum(["Active", "Inactive"], {
    message: "Please select party status.",
  }),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
  phone: z.string().max(30, "Phone must be 30 characters or fewer.").optional(),
  taxId: z.string().max(50, "Tax ID must be 50 characters or fewer.").optional(),
  address: z
    .string()
    .max(500, "Address must be 500 characters or fewer.")
    .optional(),
  openingBalance: z.number().min(0, "Opening balance cannot be negative."),
});

export type CreatePartyFormValues = z.infer<typeof createPartySchema>;