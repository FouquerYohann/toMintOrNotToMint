import React from "react";
import { InputForm } from "./Input/InputForm";
import "./App.css";
import { Stack } from "@mui/material";
import { PriceHeader } from "./header/Header";
import { Results } from "./Result/Results";

const App = () => {
  return (
    <div className="App">
      <header className="HeaderArea">
        <PriceHeader />
      </header>
      <div className="InputFormArea">
        <Stack spacing={3}>
          <InputForm />
        </Stack>
      </div>
      <div className="ResultArea">
        <Results />
      </div>
      <div className="GraphArea"></div>
    </div>
  );
};

export default App;
