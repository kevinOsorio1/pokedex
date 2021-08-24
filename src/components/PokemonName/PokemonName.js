import React, { memo } from 'react'

 function PokemonName({name}){
    return <div>
        <h3>{name}</h3>
    </div>
}

export default memo(PokemonName)