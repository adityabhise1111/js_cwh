import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("name")
  const [form, setform] = useState({}) // if its () empty then no components is visible
  const [btnText, setbtnText] = useState("dont click me")
  const [btnVisibility, setbtnVisibility] = useState(true)
  function clickalert() {
    
    alert('bye bye!')//how to give alert delay? ans= to delay the alert, you can use setTimeout function
    
    setbtnVisibility(false)
    
  }
  function hoveralert() {
    setTimeout(() => {
      alert('dont touch me!')
    }, 1000) // this will delay the alert by 1 second
    
    setbtnText("I said dont touch me!")
  }
  function handlechange(e) {
    setform({...form, [e.target.name]: e.target.value})
    console.log(form)
    // this will update the form state with the new value of the input field
    //here is no logic just react syntax to update the state
    //its a unnnecessary react feature that they have provided to update the state
    //else we use placeholder to and dont set value in input field

    //if we log form here, it will not show the updated value immediately
    //because state updates are asynchronous in nature
    //so log goes first and then state updates its late.
  }

  return (
    <>
      {btnVisibility && <div className="button">

        <input type="text" value={form.name? form.name:""} name="name" id="name" onChange={handlechange} />
        <input type="phone" value={form.phone? form.phone:""} name="phone" id="phone" onChange={handlechange} />
        
        <button  onClick={clickalert} onMouseOver={hoveralert}>
          {btnText}
        </button>
      </div>}
    </>
  )
}

export default App
