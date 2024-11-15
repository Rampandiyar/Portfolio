import Navbar from "./Components/Navbar"
import "./App.css"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Service from "./Components/Service"
import Mywork from "./Components/Mywork"
function App() {
  return (
    <div className="m-0 p-0 h-fit bg-darkOrangeBrown text-white font-outfit">
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Mywork/>
    </div>
  )
}

export default App
