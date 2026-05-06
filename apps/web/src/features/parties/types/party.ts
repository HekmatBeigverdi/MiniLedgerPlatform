export type PartyType =
  | "Customer"
  | "Vendor"
  | "Employee"
  | "Shareholder"
  | "Other";

export type PartyStatus = "Active" | "Inactive";

export type Party = {
  id: string;
  code: string;
  displayName: string;
  type: PartyType;
  status: PartyStatus;
  email?: string;
  phone?: string;
  taxId?: string;
  address?: string;
  openingBalance: number;
  createdAt: string;
};