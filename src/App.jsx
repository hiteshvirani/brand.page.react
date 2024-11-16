import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation/>
      <HeroSection/>
    </div>
  )
}

export default App
