import {
  createParty,
  getParties,
} from "@/features/parties/services/parties-service";
import type { PartiesProvider } from "@/features/parties/services/parties-provider";

export const mockPartiesProvider: PartiesProvider = {
  getParties,
  createParty,
};