import * as React from "react";
import { InputFormShoe } from "./InputShoe";
import { InputShoePrice } from "./InputShoePrice";
import { InputDecote } from "./InputDecote";
import { InputMintingPrice } from "./InputMintingPrice";

export const InputForm = () => (
  <>
    <InputFormShoe title="First Shoe" index={0} />
    <InputFormShoe title="Second Shoe" index={1} />
    <InputShoePrice />
    <InputDecote />
    <InputMintingPrice />
  </>
);
