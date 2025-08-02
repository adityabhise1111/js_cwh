"use client"
import React, { use, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMobileMenu(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className='bg-black text-white shadow-md w-full'>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-white">BuyMeChai</div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8">
          <li>
            <Link href="/" className="text-white hover:text-indigo-400 transition-colors duration-200">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-indigo-400 transition-colors duration-200">About</Link>
          </li>
          <li>
            <Link href="/menu" className="text-white hover:text-indigo-400 transition-colors duration-200">Menu</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-indigo-400 transition-colors duration-200">Contact</Link>
          </li>
        </ul>

        {/* Desktop Auth Section */}
        <div className="hidden md:block">
               {!session && (
                <div className="inline-block">
                  <Link
                    href="/login"
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200"
                  >
                    Sign In
                  </Link>
                </div>
               )}

          {session && (
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <button
                className="inline-flex justify-center w-full rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-black text-sm font-medium text-white hover:bg-gray-800 focus:outline-none"
                type="button"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                Menu
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>

              {showDropdown && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg ring-1 ring-gray-300 ring-opacity-20 focus:outline-none z-50 bg-white border border-gray-200">
                  <div className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      onClick={() => {
                        console.log("Dashboard clicked");
                        setShowDropdown(false);
                        }}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href={`/${session?.user?.name || 'profile'}`} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={() => {
                        console.log("Dashboard clicked");
                        setShowDropdown(false);
                      }}
                    >
                      Your page
                    </Link>
                    <button
                      onClick={() => {
                        console.log("Sign out clicked");
                        setShowDropdown(false);
                        signOut({ callbackUrl: '/' });
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-gray-400 hover:text-indigo-400 hover:border-indigo-400"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {showMobileMenu ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-white hover:text-indigo-400 hover:bg-gray-800 rounded-md"
              onClick={() => setShowMobileMenu(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-white hover:text-indigo-400 hover:bg-gray-800 rounded-md"
              onClick={() => setShowMobileMenu(false)}
            >
              About
            </Link>
            <Link
              href="/menu"
              className="block px-3 py-2 text-white hover:text-indigo-400 hover:bg-gray-800 rounded-md"
              onClick={() => setShowMobileMenu(false)}
            >
              Menu
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-white hover:text-indigo-400 hover:bg-gray-800 rounded-md"
              onClick={() => setShowMobileMenu(false)}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Auth Section */}
          <div className="pt-4 pb-3 border-t border-gray-700">
            {!session && (
              <div className="px-4">
                <Link
                  href="/login"
                  className="block w-full text-center bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors duration-200"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Sign In
                </Link>
              </div>
            )}

            {session && (
              <div className="px-4 space-y-1">
                <Link
                  href="/dashboard"
                  className="block px-3 py-2 text-white hover:text-indigo-400 hover:bg-gray-800 rounded-md"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Dashboard
                </Link>
                <Link
                  href={`/${session?.user?.name || 'profile'}`}
                  className="block px-3 py-2 text-white hover:text-indigo-400 hover:bg-gray-800 rounded-md"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Your page
                </Link>
                <button
                  onClick={() => {
                    setShowMobileMenu(false);
                    signOut({ callbackUrl: '/' });
                  }}
                  className="block w-full text-left px-3 py-2 text-red-400 hover:text-red-300 hover:bg-gray-800 rounded-md"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar