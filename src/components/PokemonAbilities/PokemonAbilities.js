import React, { memo } from 'react'
import Box from "@material-ui/core/Box"

 function PokemonAbilities({abilities}){
    return abilities.map((object, index) => {
        const ability = object.ability
        return (
          <Box m={1} p={0} key={index}>
            <a href={ability.url}>{ability.name}</a>
          </Box>
        )
      })
}
export default memo(PokemonAbilities)