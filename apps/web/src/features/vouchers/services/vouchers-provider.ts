import type { CreateVoucherFormValues } from "@/features/vouchers/schemas/voucher-schema";
import type { Voucher } from "@/features/vouchers/types/voucher";

export type VouchersProvider = {
  getVouchers: () => Promise<Voucher[]>;
  createVoucher: (values: CreateVoucherFormValues) => Promise<Voucher>;
};