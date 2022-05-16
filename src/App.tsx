import React from "react";
import { InputForm } from "./Input/InputForm";
import "./App.css";
import { useAppSelector } from "./state/hooks";
import { Stack } from "@mui/material";

const App = () => {
  const shoesState = useAppSelector((state) => state.shoesState);

  console.log(shoesState);

  return (
    <div className="App">
      <header className="HeaderArea">HEADER</header>
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
