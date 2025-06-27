import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import User from './components/User'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About' // <-- Add this!
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<><Navbar/><Home/></>,
      errorElement: <div>Page not found</div>
    },
    {path: '/about',
      element:<><Navbar/><About/></>,
      errorElement: <div>Page not found</div>
    },
    {
      path: '/login',
      element:<><Navbar/><Login/></>,
      errorElement: <div>Page not found</div>
    },
    {
      path: '/user/:username',
      element:<><Navbar/><User/></>,
      errorElement: <div>Page not found</div>
    }
  ])

  return (
    <>
    
    <RouterProvider router={router} />
    </>
  )
}

export default App
