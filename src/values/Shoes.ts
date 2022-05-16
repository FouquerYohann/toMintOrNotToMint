import { RarityKeys, ShoeTypeKeys } from "./types";

export type Shoe = {
  rarity: RarityKeys;
  type: ShoeTypeKeys;
  nbMint: number;
};

export const initShoe = {
  rarity: undefined,
  type: undefined,
  nbMint: undefined,
};
