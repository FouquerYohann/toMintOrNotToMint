import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DecoteState = {
  decote: number[];
};
const initState: DecoteState = {
  decote: [0, 0],
};

type setDecotePayload = { index: number; value: number };

export const DecoteStateSlice = createSlice({
  name: "DecoteStateSlice",
  initialState: initState,
  reducers: {
    setDecoteValue: (state, action: PayloadAction<setDecotePayload>) => {
      if (action.payload.index === 0) {
        state.decote = [action.payload.value, state.decote[1]];
      }
      if (action.payload.index === 1) {
        state.decote = [state.decote[0], action.payload.value];
      }
    },
  },
});

export const { setDecoteValue } = DecoteStateSlice.actions;
