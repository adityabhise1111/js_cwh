import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/contact">{props.logoText}</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
