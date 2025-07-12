import React, { useState } from 'react'

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
      {/* Logo/Brand */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active' : ''}>Home</a></li>
            <li><a onClick={() => setActiveTab('about')} className={activeTab === 'about' ? 'active' : ''}>About</a></li>
            <li><a onClick={() => setActiveTab('services')} className={activeTab === 'services' ? 'active' : ''}>Services</a></li>
            <li><a onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          SecurePass
        </a>
      </div>
      
      {/* Center Navigation Tabs - Hidden on mobile */}
      <div className="navbar-center hidden lg:flex">
        <div className="tabs tabs-boxed">
          <a 
            className={`tab ${activeTab === 'home' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </a>
          <a 
            className={`tab ${activeTab === 'about' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </a>
          <a 
            className={`tab ${activeTab === 'services' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            Services
          </a>
          <a 
            className={`tab ${activeTab === 'contact' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </a>
        </div>
      </div>
      
      {/* Right side actions */}
      <div className="navbar-end">
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <label className="swap swap-rotate btn btn-ghost btn-circle">
            <input type="checkbox" className="theme-controller" value="dark" />
            <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
            </svg>
            <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
            </svg>
          </label>

          {/* Login button */}
          <button className="btn btn-primary btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Login
          </button>

          {/* Sign up button */}
          <button className="btn btn-outline btn-sm">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar