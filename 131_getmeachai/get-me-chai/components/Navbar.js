import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white shadow-md'>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold text-white">GetMeChai</div>
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="text-white hover:text-indigo-400 transition-colors duration-200">Home</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-indigo-400 transition-colors duration-200">About</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-indigo-400 transition-colors duration-200">Menu</a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-indigo-400 transition-colors duration-200">Contact</a>
          </li>
        </ul>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200">
          Sign In
        </button>
      </div>
    </nav>
  )
}

export default Navbar