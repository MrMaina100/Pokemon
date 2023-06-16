import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import Pokemons from "./Pages/Pokemons"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Footer from "./Components/Footer"
import { PokemonProvider } from "./Context/PokemonContext"


function App() {
  return (
    <PokemonProvider>
    <Router >
      
      <div className=" min-h-screen flex flex-col justify-between space-y-5">
      <Header/>

      <main className="container mx-auto px-2 ">

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pokemons" element={<Pokemons/>}/>
          <Route path="/about" element={<About/>}/>
          
        </Routes>


      </main>

      <Footer/>

      </div>




    </Router>
    </PokemonProvider>
  )
}
export default App