import type { Voucher } from "@/features/vouchers/types/voucher";

export const mockVouchers: Voucher[] = [
  {
    id: "vch_1000",
    number: "JV-1000",
    date: "2026-02-01",
    reference: "INV-2048",
    description: "Cash sales entry",
    status: "Posted",
    totalDebit: 2500,
    totalCredit: 2500,
    createdAt: "2026-02-01T10:00:00Z",
    lines: [
      {
        id: "line_1",
        accountCode: "1000",
        accountName: "Cash",
        debit: 2500,
        credit: 0,
      },
      {
        id: "line_2",
        accountCode: "4000",
        accountName: "Sales Revenue",
        debit: 0,
        credit: 2500,
      },
    ],
  },
  {
    id: "vch_1001",
    number: "JV-1001",
    date: "2026-02-03",
    reference: "BILL-900",
    description: "Office expense payment",
    status: "Draft",
    totalDebit: 600,
    totalCredit: 600,
    createdAt: "2026-02-03T14:00:00Z",
    lines: [
      {
        id: "line_1",
        accountCode: "5000",
        accountName: "Office Expense",
        debit: 600,
        credit: 0,
      },
      {
        id: "line_2",
        accountCode: "1000",
        accountName: "Cash",
        debit: 0,
        credit: 600,
      },
    ],
  },
];