import { createContext, useState } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  // change the default state an to array since the result from the api call will also be an array
  const [items, setItems] = useState([]);

  const fetchdata = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();

    //  setitmes to the results array from the data result object
    setItems(data.results);
  };

  return (
    <PokemonContext.Provider
      value={{
        items,
        fetchdata,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
