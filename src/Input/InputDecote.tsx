import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { setDecoteValue } from "../state/DecoteState";
import { useAppDispatch, useAppSelector } from "../state/hooks";

export const InputDecote = () => {
  const dispatch = useAppDispatch();
  const dec = useAppSelector((state) => state.decoteState);
  return (
    <Grid
      container
      direction="row"
      alignContent="center"
      alignItems="center"
      wrap="wrap"
    >
      <FormControl sx={{ m: 1, width: 180 }}>
        <InputLabel htmlFor={"FirstShoeDecote"}>
          Decote de mint First
        </InputLabel>
        <OutlinedInput
          id={"FirstShoeDecote"}
          type="number"
          value={dec.decote[0]}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(setDecoteValue({ index: 0, value: Number(value) }));
          }}
          startAdornment={<InputAdornment position="start">SOL</InputAdornment>}
          label={`"First Shoe Decote"`}
          name={"FirstShoeDecote"}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: 180 }}>
        <InputLabel htmlFor={"SecondShoeDecote"}>
          Decote de mint Second
        </InputLabel>
        <OutlinedInput
          id={"SecondShoeDecote"}
          type="number"
          value={dec.decote[1]}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(setDecoteValue({ index: 1, value: Number(value) }));
          }}
          startAdornment={<InputAdornment position="start">SOL</InputAdornment>}
          label={`"Seconde Shoe Decote"`}
          name={"SecondShoeDecote"}
        />
      </FormControl>
    </Grid>
  );
};
