import {
  createVoucher,
  getVouchers,
} from "@/features/vouchers/services/vouchers-service";
import type { VouchersProvider } from "@/features/vouchers/services/vouchers-provider";

export const mockVouchersProvider: VouchersProvider = {
  getVouchers,
  createVoucher,
};