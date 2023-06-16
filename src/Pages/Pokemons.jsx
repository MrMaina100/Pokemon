import PokemonContext from "../Context/PokemonContext"
import { useContext } from "react"
function Pokemons() {

  const {items} = useContext(PokemonContext)

  const {results} = items

 
  

  
  return (
    
    <div>

      {results.map((result)=>{
        return <li key={result.id}>{result.name}</li>
      })}
      
          
      
    </div>
  )
}
export default Pokemons