import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Rarity, ShoeType } from "../values/types";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { setFloorPriceValue } from "../state/FloorPriceState";

const InputFloor: React.FC<{ type: string; rarity: string }> = ({
  type,
  rarity,
}) => {
  const key = `${type}-${rarity}`;
  const value = useAppSelector((state) => state.floorPriceState[key]);
  const dispatch = useAppDispatch();
  return (
    <Grid key={key}>
      <FormControl sx={{ m: 1, width: 180 }}>
        <InputLabel htmlFor={key}>
          FloorPrice {type} {rarity}
        </InputLabel>
        <OutlinedInput
          id={key}
          type="number"
          value={value}
          onChange={(e) => {
            const { name, value } = e.target;
            dispatch(setFloorPriceValue({ name, value: Number(value) }));
          }}
          startAdornment={<InputAdornment position="start">SOL</InputAdornment>}
          label={`FloorPrice ${type} ${rarity}`}
          name={key}
        />
      </FormControl>
    </Grid>
  );
};

export const InputShoePrice = () => {
  return (
    <Grid
      container
      direction="row"
      alignContent="center"
      alignItems="center"
      wrap="wrap"
    >
      {Object.keys(ShoeType).map((type) =>
        Object.keys(Rarity).map((rarity) => (
          <InputFloor type={type} rarity={rarity} />
        ))
      )}
    </Grid>
  );
};
