import React from "react";
import { InputForm } from "./Input/InputForm";
import "./App.css";
import { Stack } from "@mui/material";
import { PriceHeader } from "./header/Header";

const App = () => {
  return (
    <div className="App">
      <header className="HeaderArea">
        <PriceHeader />
      </header>
      <div className="InputFormArea">
        <Stack spacing={3}>
          <InputForm title="First Shoe" index={0} />
          <InputForm title="Second Shoe" index={1} />
        </Stack>
      </div>
    </div>
  );
};

export default App;
