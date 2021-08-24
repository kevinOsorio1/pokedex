import React, { memo } from "react"
import Box from "@material-ui/core/Box"

 function PokemonTypes({ types }) {
  return (
    types &&
    types.map((objectType, index) => {
      return (
        <Box m={1} p={0} key={index}>
          <h4>{objectType.type.name}</h4>
        </Box>
      )
    })
  )
}
export default memo(PokemonTypes)