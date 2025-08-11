"use client"
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-900 sticky top-0 z-50">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">EduMaths</span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${menuOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white hover:bg-gray-100 md:hover:bg-transparent">Home</a>
            </li>
            <li>
              <a href="/about" className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white hover:bg-gray-100 md:hover:bg-transparent">About</a>
            </li>
            <li>
              <a href="/contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white hover:bg-gray-100 md:hover:bg-transparent">Contact</a>
            </li>
            <li>
              <a href="/login" className="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white hover:bg-gray-100 md:hover:bg-transparent">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}