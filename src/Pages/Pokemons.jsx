import PokemonContext from "../Context/PokemonContext";
import { useContext, useEffect } from "react";
function Pokemons() {
  // destructuring the fetchdata function from the context so that we can call it from the pokemons component and update the items state on the context
  const { items, fetchdata } = useContext(PokemonContext);

  // fecthing data on initial render of the component
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      {items.map((result) => {
        return <li key={result.id}>{result.name}</li>;
      })}
    </div>
  );
}
export default Pokemons;
