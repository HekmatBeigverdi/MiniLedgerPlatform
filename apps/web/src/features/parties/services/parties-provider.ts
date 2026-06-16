import type { CreatePartyFormValues } from "@/features/parties/schemas/party-schema";
import type { Party } from "@/features/parties/types/party";

export type PartiesProvider = {
  getParties: () => Promise<Party[]>;
  createParty: (values: CreatePartyFormValues) => Promise<Party>;
};