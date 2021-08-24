import React, { memo } from "react"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"
import PokemonName from "../../components/PokemonName/PokemonName"
import { useGetPokemon } from "../../customHooks/useGetPokemon"
import { useGetPokemonList } from "../../customHooks/useGetPokemonList"

function PokemonList() {
  const { pokemon, pokemonError, nextPokemon, prevPokemon } = useGetPokemon()

  const { pokemonList, listError, nextPage, prevPage, changeLimit } =
    useGetPokemonList()

  return (
    <div>
      {pokemon && pokemon.name && (
        <PokemonCard
          name={pokemon.name}
          sprites={pokemon.sprites}
          abilities={pokemon.abilities}
          types={pokemon.types}
          prevPokemon={prevPokemon}
          nextPokemon={nextPokemon}
        />
      )}
      {pokemonList &&
        pokemonList.map((poke, index) => {
          return <PokemonName name={poke.name} key={index} />
        })}
      {(pokemonError || listError) && (
        <h3>Pokemon not found or list is not exist</h3>
      )}
    </div>
  )
}

export default memo(PokemonList)
