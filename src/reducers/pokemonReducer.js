export function pokemonReducer(state, action) {
    switch (action.type) {
      case 'SUCCESS': {
        return {
          error: null,
          pokemon: action.pokemon,
        }
      }
      case 'ERROR': {
        return {
          error: action.error,
          pokemon: null,
        }
      }
      default: {
        return state
      }
    }
  }