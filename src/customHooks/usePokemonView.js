import { useState } from 'react'

export function usePokemonView(initState){
    const [view, setView] = useState(initState.front_default)

    function changeView(){
        setView(prevState => {
            if(prevState === initState.front_default){
                return initState.back_default
            }else{
                return initState.front_default
            }
        })
    }

    return {view,changeView}
}