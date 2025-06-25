import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const a = useRef(0);

  //when we use useRef the value persist across renders
  //it does not trigger a re-render when the value changes
  //it is useful for keeping track of mutable values that do not require re-rendering
  //for example, keeping track of a previous value, or a timer ID
  //it is also useful for accessing DOM elements directly without using state
  //useRef returns a mutable object with a .current property

  //beware that useRef does not trigger a re-render when the value changes
  //so if you want to trigger a re-render when the value changes, you should use
  //useState instead 


  const btnRef = useRef()
  useEffect(() => {
    console.log(` a is ${a.current}`)
    a.current=a.current +1;
    btnRef.current.style.backgroundColor = 'red'
  },[])
  


  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref = {btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
