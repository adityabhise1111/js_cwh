import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'

function App() {
  const [count, setCount] = useState(0)
  


  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <div className="hero min-h-96 bg-base-200">
        <Manager/>
      </div>

    </div>
  )
}

export default App
