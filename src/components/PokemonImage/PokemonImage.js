import React, { memo } from "react"
import Box from "@material-ui/core/Box"
import { useStyles } from "./PokemonImageStyles"

function PokemonImage({ sprites, changeView, view }) {
  const classes = useStyles()
  return (
    sprites && (
      <Box
        m={1}
        p={0}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Box m={1} p={0}>
          <button onClick={changeView}>{"<="}</button>
        </Box>
        <Box m={1} p={1} className={classes.imageContainer}>
          <img className={classes.bottom}
            src={
              "https://www.guiasnintendo.com/2a_WII/super_smash_bros_brawl/super_smash_bros_brawl_sp/imagenes/fotos/esnor_15.jpg"
            }
            alt="Platform"
          ></img>
          <img src={sprites[view]} alt="Pokemon" className={classes.top}></img>
        </Box>
        <Box m={1} p={0}>
          <button onClick={changeView}>{"=>"}</button>
        </Box>
      </Box>
    )
  )
}
export default memo(PokemonImage)
