import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { mintChance, shoeBoxChance, shoeType } from "../values/minterChance";
import { Rarity, RarityKeys } from "../values/types";

const getFromObject = (
  first: string,
  second: string,
  map: { [key: string]: number[] }
) => {
  const el = map[`${first}-${second}`];
  return el !== undefined ? el : map[`${second}-${first}`];
};

export const selectShoeBoxChance = (state: RootState) => {
  const [shoe1, shoe2] = state.shoesState.shoes;
  return getFromObject(shoe1.rarity, shoe2.rarity, mintChance);
};

export const selectTypeshoes = (state: RootState) => {
  const [shoe1, shoe2] = state.shoesState.shoes;
  return getFromObject(shoe1.type, shoe2.type, shoeType);
};

const getShoeChance = (rarity: RarityKeys, boxProportion: number[]) => {
  let chance = boxProportion
    .map((p) => p / 100)
    .map((p, index) => p * (shoeBoxChance[index][Rarity[rarity]] / 100))
    .reduce((previousValue, currentValue) => previousValue + currentValue);
  return Math.round((chance + Number.EPSILON) * 100) / 100;
};

export const chanceTotalMint = createSelector(
  selectShoeBoxChance,
  (boxProportion) => {
    const commonShoe = getShoeChance("Common", boxProportion);
    const uncommonShoe = getShoeChance("Uncommon", boxProportion);
    const rareShoe = getShoeChance("Rare", boxProportion);
    const epicShoe = getShoeChance("Epic", boxProportion);
    const legendaryShoe = getShoeChance("Legendary", boxProportion);
    return [commonShoe, uncommonShoe, rareShoe, epicShoe, legendaryShoe];
  }
);
