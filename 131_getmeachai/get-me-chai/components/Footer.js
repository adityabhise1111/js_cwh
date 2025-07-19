import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <span>&copy; {new Date().getFullYear()} Get Me Chai. All rights reserved.</span>
            <div className="flex space-x-4 mt-2 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer