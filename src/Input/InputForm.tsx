import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { Rarity, ShoeType } from "../values/types";
import * as React from "react";
import { ChangeEvent, FC } from "react";
import { useAppDispatch } from "../state/hooks";
import { setShoeKeyValue } from "../state/shoeState";

interface InputFormProps {
  title: string;
  index: number;
}

export const InputForm: FC<InputFormProps> = ({ title, index }) => {
  const dispatch = useAppDispatch();
  const handleInput = (
    e: SelectChangeEvent | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(setShoeKeyValue({ index, key: name, value }));
  };

  return (
    <Stack direction="row" spacing={10} alignItems="center">
      <div style={{ minWidth: 150 }}>{title}</div>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="shoe-type">Shoe Type</InputLabel>
        <Select
          defaultValue=""
          labelId="shoe-type"
          label="Shoe Type"
          sx={{ minWidth: 120 }}
          onChange={handleInput}
          name="type"
        >
          {Object.keys(ShoeType).map((key) => (
            <MenuItem value={key}>{key}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="shoe-rarity">Shoe Rarity</InputLabel>
        <Select
          defaultValue=""
          labelId="shoe-rarity"
          label="Shoe Rarity"
          name="rarity"
          onChange={handleInput}
        >
          {Object.keys(Rarity).map((key) => (
            <MenuItem value={key}>{key}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <TextField
          id="outlined-number"
          label="nbMint"
          type="number"
          name="nbMint"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleInput}
        />
      </FormControl>
    </Stack>
  );
};
