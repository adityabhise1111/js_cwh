"use client";
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="text-white text-2xl font-bold hover:text-blue-200 transition-colors duration-200">
            MyApp
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-blue-200 hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-blue-200 hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-white hover:text-blue-200 hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 p-2 rounded-md"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-3">
            <div className="px-2 pt-2 space-y-1">
              <Link 
                href="/" 
                className="text-white hover:text-blue-200 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-blue-200 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-blue-200 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar