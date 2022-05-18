import React, { Dispatch, useEffect } from "react";
import { Stack } from "@mui/material";
import { setGmt, setGst, setSol } from "../state/CurrencyState";
import { useAppDispatch, useAppSelector } from "../state/hooks";

function getPrice(dispatch: Dispatch<any>) {
  fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=green-satoshi-token,stepn,solana&vs_currencies=USD&include_24hr_change=true"
  )
    .then((response) => response.json())
    .then((response) => {
      dispatch(
        setGst({
          price: response["green-satoshi-token"].usd,
          percentChange: response["green-satoshi-token"].usd_24h_change,
          name: "GST",
        })
      );
      dispatch(
        setGmt({
          price: response["stepn"].usd,
          percentChange: response["stepn"].usd_24h_change,
          name: "GMT",
        })
      );
      dispatch(
        setSol({
          price: response["solana"].usd,
          percentChange: response["solana"].usd_24h_change,
          name: "SOL",
        })
      );
    })
    .catch(console.log);
}

export const PriceHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const { gst, gmt, sol } = useAppSelector((state) => state.currencyState);

  useEffect(() => {
    getPrice(dispatch);
  }, []);

  return (
    <Stack direction="row" spacing={10}>
      <div>
        ${gst.price} gst | {gst.percentChange?.toFixed(2)}%
      </div>
      <div>
        ${gmt.price} gmt | {gmt.percentChange?.toFixed(2)}%
      </div>
      <div>
        ${sol.price} sol | {sol.percentChange?.toFixed(2)}%
      </div>
    </Stack>
  );
};
