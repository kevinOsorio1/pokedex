export function pokemonListReducer(state, action) {
    switch (action.type) {
      case 'SUCCESS': {
        return {
          error: null,
          pokemonList: action.pokemonList,
        }
      }
      case 'ERROR': {
        return {
          error: action.error,
          pokemonList: null,
        }
      }
      default: {
        return state
      }
    }
  }