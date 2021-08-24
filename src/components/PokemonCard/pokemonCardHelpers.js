import { pokemonColors } from "../../utils/pokemonColors/pokemonColors"

export function givePokemonColors(types){
    let linearGradient = "linear-gradient(40deg,"
    if (types.length > 1) {
      const formatedColors = types.reduce((colors, type, index) => {
        const lastColor = index === types.length - 1
        const color = pokemonColors[type.type.name]
        const thisColor = lastColor ? color : color + ","
        return colors + thisColor
      }, "")
      return linearGradient + formatedColors + ")"
    }
    return pokemonColors[types[0].type.name]
}