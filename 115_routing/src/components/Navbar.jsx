import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="nav">
      <div className="title">Navbar</div>
      <nav>
        <ul>
          <NavLink className={(e)=>{return e.isActive? "red" : ""}}  to="/"><li>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive? "red" : ""}} to="/about"><li>About</li></NavLink>
          <NavLink className={(e)=>{return e.isActive? "red" : ""}} to="/login"><li>Login</li></NavLink>
          <NavLink className={(e)=>{return e.isActive? "red" : ""}} to="/contact"><li>Contact</li></NavLink>
          
        </ul>
      </nav>
    </div>
  )
}

export default Navbar