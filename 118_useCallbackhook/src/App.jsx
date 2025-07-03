import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [Adj, setAdj] = useState('cool')

  // const getAdj = () => {
  //   return "Adj"+count
  // }

  const getAdj = useCallback(() => {
    // using use callback to memoize the function
    // so it will not be recreated on each render
      return Adj +count
    },
    [Adj, count],
    // and it will only be recreated when Adj or count changes
  )
  



  return (
    <>
      <Navbar adjective= "cool" getAdj={getAdj} />

      {/* we used a function to pass the adjective to the Navbar component */}
      {/* and Js's function is unique on each render even its text or nothing changed */}
      { /* so we used useCallback to memoize the function */}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is not {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
   
    </>
  )
}

export default App
