import { useCallback, useEffect, useReducer, useState } from "react"
import { pokemonListReducer } from "../reducers/pokemonListReducer"
import { pokemonService } from "../services/services"

export const useGetPokemonList = () => {
  const [firstPokemon, setFirstPokemon] = useState(0) //TODO: change for offset
  const [limit, setLimit] = useState(40)
  const [loading, setLoading] = useState(false)
  const [{ error, pokemonList }, dispatch] = useReducer(pokemonListReducer, {
    error: null,
    pokemonList: [],
  })

  useEffect(() => {
    const fetchPokemon = async () => {
      await pokemonService
        .findAllByOffset(firstPokemon, limit)
        .then((response) => {
          setFirstPokemon((prevState) => {
            return prevState + limit
          })
          dispatch({ type: "SUCCESS", pokemonList: response.data.results })
        })
        .catch((e) => dispatch({ type: "ERROR", error: e }))
    }
    if (!loading) {
      fetchPokemon()
      setLoading(true)
    }
  }, [firstPokemon, limit, loading])

  const nextPage = useCallback(() => {
    setLoading(true)
  }, [])
  const prevPage = useCallback(() => {
    setFirstPokemon((prevState) => prevState - limit)
  }, [limit])

  const changeLimit = (newLimit) => {
    setLimit((prevState) => {
      if (prevState === newLimit) {
        return prevState
      }
      return newLimit
    })
  }

  return {pokemonList,error,nextPage,prevPage,changeLimit}
}
