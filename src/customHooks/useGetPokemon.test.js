import {renderHook, act} from '@testing-library/react-hooks'
import { useGetPokemon } from './useGetPokemon'

test('should permit navigate on pokemons',()=>{
    const {result} = renderHook(()=> useGetPokemon())
    
})