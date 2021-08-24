import "./App.css"
import  PokemonList  from "./containers/PokemonList/PokemonList"
import { PokemonContainer } from "./containers/PokemonContainer/PokemonContainer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Counter from "./components/Example/Example";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/pokemon/:pokemonId">
            <PokemonContainer />
          </Route>
          
          <Route path="/example">
            <Counter />
          </Route>
          <Route path="/">
            <PokemonList />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
