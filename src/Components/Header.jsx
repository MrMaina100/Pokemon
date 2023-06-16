import { Link } from "react-router-dom"

function Header() {
  return (
   <div className="bg-gray-200 p-4">
      <div className="flex justify-between container mx-auto">
         
         <Link to='/'>
            <h2 className="text-bold ">KNOW THEM ALL</h2>
         </Link>

         <div className="flex justify-between space-x-6">
            <Link to='/pokemons'>Pokemons</Link>

            <Link to='about'>About</Link>

         </div>
      </div>
   </div>


  )
}
export default Header