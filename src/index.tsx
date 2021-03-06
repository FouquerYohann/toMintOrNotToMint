import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { shoeStateSlice } from "./state/shoeState";
import { CurrencyStateSlice } from "./state/CurrencyState";
import { FloorPriceStateSlice } from "./state/FloorPriceState";
import { DecoteStateSlice } from "./state/DecoteState";
import { MintingStateSlice } from "./state/MintingState";

const store = configureStore({
  reducer: {
    shoesState: shoeStateSlice.reducer,
    floorPriceState: FloorPriceStateSlice.reducer,
    decoteState: DecoteStateSlice.reducer,
    mintingState: MintingStateSlice.reducer,
    currencyState: CurrencyStateSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
