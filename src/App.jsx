import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Highlights from './components/Highlights.jsx'
import Model from './components/Model.jsx'
import Features from './components/Features.jsx'
import Chip from './components/Chip.jsx'

const App = () => {
  return (
    <main className="bp-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <Chip/>
    </main>
  )
}

export default App
