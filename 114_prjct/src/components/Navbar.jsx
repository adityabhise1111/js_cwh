import React from 'react'
import { GiBlackHoleBolas } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-violet-900 text-white py-2'> 
    
    <div className="logo flex">
        {/* <div className="icon"><GiBlackHoleBolas /></div> */}
        <span className="font-bold text-xl mx-8 flex"><GiBlackHoleBolas />i-Task</span>
    </div>
        <ul className="flex gap-7 mx-9 ">
            <li className='cursor-pointer hover:font-bold transition-all duration-75' >Home</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-75'>About</li>
            <li className='cursor-pointer hover:font-bold transition-all duration-75   '>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar