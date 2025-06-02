import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
function App() {
 
  return (
    <>
      <Navbar/>
      <div className="cards">
      
      <Card title= "title1" discription ="discription1" />
      <Card title= "title2" discription ="discription2"/>
      <Card title= "title3" discription ="discription3"/>
      <Card title= "title4" discription ="discription4"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
