import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Currency = {
  price?: number;
  percentChange?: number;
  name: string;
};

const initCur: Currency = {} as Currency;

export type CurrencyState = {
  gst: Currency;
  gmt: Currency;
  sol: Currency;
};

export const CurrencyStateSlice = createSlice({
  name: "ShoeState",
  initialState: { gst: initCur, gmt: initCur, sol: initCur },
  reducers: {
    setGst: (state, action: PayloadAction<Currency>) => {
      state.gst = action.payload;
    },
    setGmt: (state, action: PayloadAction<Currency>) => {
      state.gmt = action.payload;
    },
    setSol: (state, action: PayloadAction<Currency>) => {
      state.sol = action.payload;
    },
  },
});

export const { setGst, setGmt, setSol } = CurrencyStateSlice.actions;
