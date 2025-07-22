"use client"
import React, { use, useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)
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

  return (
    <nav className='bg-black text-white shadow-md w-full'>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold text-white">GetMeChai</div>
        <ul className="flex space-x-8">
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
        <div>
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
      </div>
    </nav>
  )
}

export default Navbar