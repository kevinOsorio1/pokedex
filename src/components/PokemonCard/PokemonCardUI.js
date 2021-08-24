import React, { memo } from "react"
import { Box, Button } from "@material-ui/core"
import { useStyles } from "./PokemonCardStyles"
import PokemonName from "../PokemonName/PokemonName"
import PokemonTypes from "./PokemonTypes"
import PokemonImage from "../PokemonImage/PokemonImage"
import PokemonAbilities from "../PokemonAbilities/PokemonAbilities"
import { useParams } from "react-router"

function PokemonCardUI({
  pokemonColor,
  types,
  name,
  sprites,
  changeView,
  abilities,
  view,
  prevPokemon,
  nextPokemon,
}) {
  const classes = useStyles({ gradient: pokemonColor })
  const { pokemonId } = useParams()
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Button onClick={pokemonId === "1" ? null : prevPokemon}>{"<="}</Button>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        m={1}
        p={0}
        className={classes.cardContainer}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          {<PokemonTypes types={types} />}
        </Box>
        {name && (
          <Box m={1} p={0}>
            <PokemonName name={name} />
          </Box>
        )}
        <PokemonImage sprites={sprites} changeView={changeView} view={view} />
        {abilities?.length && (
          <Box m={1} p={0}>
            tabs
            <PokemonAbilities abilities={abilities} />
          </Box>
        )}
      </Box>
      <Button onClick={nextPokemon}>{"=>"}</Button>
    </Box>
  )
}

export default memo(PokemonCardUI)
