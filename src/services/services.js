import { pokeApi } from "./config/pokeApi"
import { endpoints } from "./endpoints"

export const pokemonService = {
  findOne: async (id) => {
    return pokeApi
      .get(`${endpoints.pokemon}/${id}`)
      .then((response) => ({ type: "SUCCESS", pokemon: response.data }))
      .catch((error) => ({ type: "ERROR", error: error }))
  },
  findAllByOffset: async(offset, limit) => {
    return pokeApi
      .get(`${endpoints.pokemon}?offset=${offset}&limit=${limit}`)
      
  },
}
