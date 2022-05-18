import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { setGMTValue, setGSTValue } from "../state/MintingState";

export const InputMintingPrice = () => {
  const dispatch = useAppDispatch();
  const mintingState = useAppSelector((state) => state.mintingState);
  return (
    <Grid
      container
      direction="row"
      alignContent="center"
      alignItems="center"
      wrap="wrap"
    >
      <FormControl sx={{ m: 1, width: 180 }}>
        <InputLabel htmlFor={"GSTMinting"}>Cost GST Minting</InputLabel>
        <OutlinedInput
          id={"GSTMinting"}
          type="number"
          value={mintingState.gst}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(setGSTValue({ value: Number(value) }));
          }}
          startAdornment={<InputAdornment position="start">GST</InputAdornment>}
          label={`Cost GST Minting`}
          name={"GSTMinting"}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: 180 }}>
        <InputLabel htmlFor={"GMTMinting"}>Cost GMT Minting</InputLabel>
        <OutlinedInput
          id={"GMTMinting"}
          type="number"
          value={mintingState.gmt}
          onChange={(e) => {
            const { value } = e.target;
            dispatch(setGMTValue({ value: Number(value) }));
          }}
          startAdornment={<InputAdornment position="start">GMT</InputAdornment>}
          label={`Cost GST Minting`}
          name={"GMTMinting"}
        />
      </FormControl>
    </Grid>
  );
};
