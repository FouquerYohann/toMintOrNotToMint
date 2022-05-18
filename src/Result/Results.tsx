import React from "react";
import { useAppSelector } from "../state/hooks";
import {
  chanceTotalMint,
  selectShoeBoxChance,
  selectTypeshoes,
} from "./function";
import { Rarity, RarityKeys, ShoeType, ShoeTypeKeys } from "../values/types";

const getStatisticsRevenuSentence = () => {
  const string = Object.keys(ShoeType)
    .map((type) => `%${type}*floorPrice`)
    .reduce((previous, next) => `${previous}+${next}`);
  const truc = Object.keys(Rarity)
    .map((rarity) => `%${rarity}*(${string})`)
    .reduce((previous, next) => `${previous}\n+${next}`);

  return `((${truc})\n * 0.94)-(decoteFirst+decoteSecond) - (2* (10gmt +20gst) -(gstMintPrice +gmtMintPrice) ))`;
};

export const Results = () => {
  const [commonBox, uncommonBox, rareBox, epicBox, legendaryBox] =
    useAppSelector(selectShoeBoxChance);
  const totaMintLuck = useAppSelector(chanceTotalMint);
  const typeShoesLuck = useAppSelector(selectTypeshoes);
  const [walker, jogger, runner, trainer] = typeShoesLuck;
  const [commonShoe, uncommonShoe, rareShoe, epicShoe, legendaryShoe] =
    totaMintLuck;
  const floorPrice = useAppSelector((state) => state.floorPriceState);
  const decote = useAppSelector((state) => state.decoteState);
  const mintingState = useAppSelector((state) => state.mintingState);
  const { sol, gst, gmt } = useAppSelector((state) => state.currencyState);

  const GetStatisticsRevenuReplaced = () => {
    let ret = Object.keys(Rarity)
      .map((rarity) => {
        const r = rarity as RarityKeys;
        const line = Object.keys(ShoeType)
          .map((type) => {
            const t = type as ShoeTypeKeys;
            const floorKey = `${t}-${r}`;
            const val = floorPrice[floorKey] ? floorPrice[floorKey] : 0;
            return `${typeShoesLuck[ShoeType[t]] / 100} * ${val}`;
          })
          .join(" + ");

        return `${totaMintLuck[Rarity[r]]} * (${line})\n`;
      })
      .join(" + ");

    ret = `(${ret})\n * 0.94 - (${decote.decote[0]} + ${
      decote.decote[1]
    }) - (2*(10*${gmt.price} + 20*${gst.price})) - ( ${
      mintingState.gst
    } * ${gst.price!} + ${mintingState.gmt} * ${gmt.price!})`;

    const all = Object.keys(Rarity)
      .map((rarity) => {
        const r = rarity as RarityKeys;
        return (
          totaMintLuck[Rarity[r]] *
          Object.keys(ShoeType)
            .map((type) => {
              const t = type as ShoeTypeKeys;
              const floorKey = `${t}-${r}`;
              const val = floorPrice[floorKey] ? floorPrice[floorKey] : 0;

              return (typeShoesLuck[ShoeType[t]] / 100) * val!;
            })
            .reduce((p, n) => p + n)
        );
      })
      .reduce((prev, next) => prev + next);

    const res =
      (all * 0.94 - (decote.decote[0] - decote.decote[1])) * sol.price! -
      2 * (10 * gmt.price! + 20 * gst.price!) -
      (mintingState.gst * gst.price! + mintingState.gmt * gmt.price!);
    return (
      <div>
        {ret}

        <div>={res} $</div>
      </div>
    );
  };

  return (
    <>
      <div>
        Les chances de drop de shoebox :
        <ul>
          <li>common : {commonBox} %</li>
          <li>uncommon : {uncommonBox} %</li>
          <li>rare : {rareBox} %</li>
          <li>epic : {epicBox} %</li>
          <li>legendary : {legendaryBox} %</li>
        </ul>
      </div>
      <div>
        les chances de type de chaussures :
        <ul>
          <li>walker : {walker} %</li>
          <li>jogger : {jogger} %</li>
          <li>runner : {runner} %</li>
          <li>trainer : {trainer} %</li>
        </ul>
      </div>
      <div>
        Les chances de chaussure :
        <ul>
          <li>common : {commonShoe * 100} %</li>
          <li>uncommon : {uncommonShoe * 100} %</li>
          <li>rare : {rareShoe * 100} %</li>
          <li>epic : {epicShoe * 100} %</li>
          <li>legendary : {legendaryShoe * 100} %</li>
        </ul>
      </div>

      <div>
        Revenu Statistique
        <br />
        <pre>{getStatisticsRevenuSentence()}</pre>
        <br />
        <pre>{<GetStatisticsRevenuReplaced />}</pre>
      </div>
    </>
  );
};
