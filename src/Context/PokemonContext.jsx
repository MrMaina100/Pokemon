import { createContext, useState, useEffect } from "react";

const PokemonContext = createContext();

export const PokemonProvider = ({children})=>{


   const [items, setItems] = useState({});


   useEffect(()=>{
      setItems()

   }, [])

  

   

   const fetchdata = async ()=>{
      const res = await fetch('https://pokeapi.co/api/v2/pokemon')
      const data = await res.json();

     

      setItems(data)
   }


   return <PokemonContext.Provider value={{
    items,
    fetchdata

   }}>

      {children} 

   </PokemonContext.Provider>

}

export default PokemonContext