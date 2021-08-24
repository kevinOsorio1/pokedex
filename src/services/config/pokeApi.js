import axios from "axios"

export const pokeApi = axios.create({
  baseURL: "http://pokeapi.co/api/v2/",
  timeout: 1000,
})
