import { Shoe } from "../values/Shoes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ShoesState = {
  shoes: Shoe[];
};

export const initShoesState: ShoesState = {
  shoes: [
    { rarity: "Common", type: "Walker", nbMint: 2 },
    { rarity: "Uncommon", type: "Runner", nbMint: 1 },
  ],
};

type SetShoeKeyValueProps = {
  index: number;
  key: string;
  value: string | number;
};

export const shoeStateSlice = createSlice({
  name: "ShoeState",
  initialState: initShoesState,
  reducers: {
    setShoeKeyValue: (state, action: PayloadAction<SetShoeKeyValueProps>) => {
      const { index, key, value } = action.payload;
      const newShoe = {
        ...state.shoes[index],
        [key]: value,
      };
      if (index === 0) {
        state.shoes = [newShoe, state.shoes[1]];
      } else if (index === 1) {
        state.shoes = [state.shoes[0], newShoe];
      }
    },
    debug: (state) => {
      state.shoes = [
        { rarity: "Common", type: "Walker", nbMint: 2 },
        { rarity: "Uncommon", type: "Runner", nbMint: 1 },
      ];
    },
  },
});

export const { setShoeKeyValue, debug } = shoeStateSlice.actions;
