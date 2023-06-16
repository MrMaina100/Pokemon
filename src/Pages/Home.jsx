import { useState } from "react"


function Home() {

   const [name, setName] = useState('')

   const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(name);
      setName('')

   }
  return (
    <div>
      <form onSubmit={handleSubmit}>
         <input
          type="text"
          value={name}
          onChange={(e)=> setName(e.target.value)}
           className="shadow border rounded  focus:outline-none p-4" placeholder="search for a pokemon " />
          <input type="submit" />
      </form>
      
    </div>
  )
}
export default Home