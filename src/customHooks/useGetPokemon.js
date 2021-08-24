import { useCallback, useEffect, useReducer, useState } from "react"
import { pokemonReducer } from "../reducers/pokemonReducer"
import { pokemonService } from "../services/services"

export const useGetPokemon = () => {
  const [{ error, pokemon }, dispatch] = useReducer(pokemonReducer, {
    error: null,
    pokemon: {},
  })
  const [pokemonLoaded, setPokemonLoaded] = useState(false)
  const [pokemonId, setPokemonId] = useState(1)

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await pokemonService.findOne(pokemonId)
      dispatch(data)
    }
    if (!pokemonLoaded) {
      setPokemonLoaded(true)
      fetchPokemon()
    }
  }, [pokemonId, pokemonLoaded])

  const nextPokemon = useCallback(function () {
    setPokemonId((prevState) => prevState + 1)
    setPokemonLoaded(false)
  }, [])
  const prevPokemon = useCallback(function () {
    setPokemonId((prevState) => {
      if (prevState > 1) {
        setPokemonLoaded(false)
        return prevState - 1
      }
      return 1
    })
  }, [])

  return { pokemon, error, nextPokemon, prevPokemon }
}
