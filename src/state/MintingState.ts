import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MintingState = {
  gst: number;
  gmt: number;
};
const initState: MintingState = {
  gst: 0,
  gmt: 0,
};

type setGSTPayload = { value: number };

export const MintingStateSlice = createSlice({
  name: "MintingStateSlice",
  initialState: initState,
  reducers: {
    setGSTValue: (state, action: PayloadAction<setGSTPayload>) => {
      state.gst = action.payload.value;
    },
    setGMTValue: (state, action: PayloadAction<setGSTPayload>) => {
      state.gmt = action.payload.value;
    },
  },
});

export const { setGSTValue, setGMTValue } = MintingStateSlice.actions;
