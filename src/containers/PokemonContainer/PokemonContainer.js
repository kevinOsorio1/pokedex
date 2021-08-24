import React, { useEffect, useReducer } from "react"
import { useHistory, useParams } from "react-router"
import { pokemonReducer } from "../../reducers/pokemonReducer"
import { pokemonService } from "../../services/services"
import { PokemonCard } from "../../components/PokemonCard/PokemonCard"

export function PokemonContainer() {
  const history = useHistory()
  const [{ error, pokemon }, dispatch] = useReducer(pokemonReducer, {
    error: null,
    pokemon: {},
  })
  const { pokemonId } = useParams()

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await pokemonService.findOne(pokemonId || 1)
      dispatch(data)
    }
    fetchPokemon()
    return () => {
      dispatch({ type: "SUCCESS", pokemon: {} })
    }
  }, [pokemonId])

  function nextPokemon() {
    history.push(`/pokemon/${Number(pokemonId || 0) + 1}`)
  }
  function prevPokemon() {
    history.push(`/pokemon/${Number(pokemonId || 0) - 1}`)
  }

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
      {error && <h3>Pokemon not found</h3>}
    </div>
  )
}
