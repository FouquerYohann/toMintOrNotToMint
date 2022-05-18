import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FloorPriceState = {
  [key: string]: number | undefined;
};
const initState: FloorPriceState = {
  "Walker-Common": undefined,
  "Walker-Uncommon": undefined,
  "Walker-Rare": undefined,
  "Walker-Epic": undefined,
  "Walker-Legendary": undefined,
  "Jogger-Common": undefined,
  "Jogger-Uncommon": undefined,
  "Jogger-Rare": undefined,
  "Jogger-Epic": undefined,
  "Jogger-Legendary": undefined,
  "Runner-Common": undefined,
  "Runner-Uncommon": undefined,
  "Runner-Rare": undefined,
  "Runner-Epic": undefined,
  "Runner-Legendary": undefined,
  "Trainer-Common": undefined,
  "Trainer-Uncommon": undefined,
  "Trainer-Rare": undefined,
  "Trainer-Epic": undefined,
  "Trainer-Legendary": undefined,
};

type setFloorPricePayload = { name: string; value: number };

export const FloorPriceStateSlice = createSlice({
  name: "FloorPriceStateSlice",
  initialState: initState,
  reducers: {
    setFloorPriceValue: (
      state,
      action: PayloadAction<setFloorPricePayload>
    ) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { setFloorPriceValue } = FloorPriceStateSlice.actions;
