import { mockParties } from "@/features/parties/data/mock-parties";
import type { CreatePartyFormValues } from "@/features/parties/schemas/party-schema";
import type { Party } from "@/features/parties/types/party";

export async function getParties(): Promise<Party[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return mockParties;
}

export async function createParty(
  values: CreatePartyFormValues
): Promise<Party> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    id: `pty_${crypto.randomUUID()}`,
    code: values.code,
    displayName: values.displayName,
    type: values.type,
    status: values.status,
    email: values.email || undefined,
    phone: values.phone || undefined,
    taxId: values.taxId || undefined,
    address: values.address || undefined,
    openingBalance: values.openingBalance,
    createdAt: new Date().toISOString(),
  };
}