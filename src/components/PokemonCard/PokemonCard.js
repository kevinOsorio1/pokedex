import React, { useMemo } from "react"
import { usePokemonView } from "../../customHooks/usePokemonView"
import { maleViews } from "./imageViews"
import { givePokemonColors } from "./pokemonCardHelpers"
import PokemonCardUI from "./PokemonCardUI"

export function PokemonCard({
  name,
  sprites,
  abilities,
  types,
  prevPokemon,
  nextPokemon,
}) {
  const { view, changeView } = usePokemonView(maleViews)

  const pokemonColor = useMemo(() => {
    return givePokemonColors(types)
  }, [types])


  return (
    <PokemonCardUI
      pokemonColor={pokemonColor}
      view={view}
      types={types}
      name={name}
      sprites={sprites}
      abilities={abilities}
      changeView={changeView}
      prevPokemon={prevPokemon}
      nextPokemon={nextPokemon}
    />
  )
}
