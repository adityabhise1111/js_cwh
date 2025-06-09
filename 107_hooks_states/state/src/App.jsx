import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(2)

  return (
    <>
    <div>{count}</div>
    <button onClick={()=>{setCount(count**2)}} >up</button>
    
    <button onClick={()=>{setCount(count-1)}} >down</button>
    
    </>
  )
}

export default App
