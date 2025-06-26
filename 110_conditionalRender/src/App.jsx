import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [shwbtn, setshwbtn] = useState(true)
  const [todo, settodo] = useState(
    [
      { title: "Todo 1", desc: "This is the first todo" },
      { title: "Todo 2", desc: "This is the second todo" },
      { title: "Todo 3", desc: "This is the third todo" },
    ]
  )

  const ToDo = ({ todo }) => {
    return (
      <>

        <div className="todo">
          <div className="todo">{todo.title}</div>
          {todo.desc}
        </div>
      </>
    )
  }

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
        {shwbtn ? <button> im true</button> : <button> im not false</button>} <br />
        {shwbtn && <button> im only visible if its true</button>} <br />
        <button onClick={() => setshwbtn((shwbtn) => !shwbtn)}>
          count is {count}
        </button>

        {todo.map(item => {
          // return <ToDo key={item.title} todo ={item} />

          return (
              <div key={item.title} className="todo">
                <div className="todo">{item.title}</div>
                {item.desc}
              </div>
            
          )
        })}

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
