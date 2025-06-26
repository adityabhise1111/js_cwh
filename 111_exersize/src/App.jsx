import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [data, setdata] = useState()
  
  useEffect(() => {

    //creating a async function to call
    const fetchdata = async () => {

      //taking a responce from the api
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      //now responce in json format so take into the result as json
      const result = await response.json()
      //saving value into the data state
      setdata(result)
    }
    fetchdata()  //here we call the function
  }, [])
  


  return (
    <div>
      <div>
        <Card info={data} />

        { data && data.map((item) => {
          return(
            <Card
            userId={item.userId}
            id={item.id}
            title={item.title}
            body={item.body}
            />
          )
        })}     
        
      </div>
    </div>
  )
}

export default App
