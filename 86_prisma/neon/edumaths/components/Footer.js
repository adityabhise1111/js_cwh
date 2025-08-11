import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <span className="text-lg font-semibold">EduMaths</span>
          <span className="ml-2 text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300" aria-label="Twitter">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20c7.547 0 11.675-6.155 11.675-11.495 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.19 8.19 0 01-2.357.637A4.118 4.118 0 0021.448 4.1a8.224 8.224 0 01-2.605.977A4.107 4.107 0 0015.448 3c-2.266 0-4.104 1.828-4.104 4.083 0 .32.036.634.106.934C7.728 7.87 4.1 6.13 1.671 3.149a4.07 4.07 0 00-.555 2.052c0 1.419.724 2.675 1.823 3.413A4.093 4.093 0 01.8 7.575v.051c0 1.98 1.417 3.633 3.301 4.008a4.1 4.1 0 01-1.085.144c-.265 0-.522-.026-.772-.075.523 1.623 2.037 2.804 3.833 2.834A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="GitHub">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.528 2.341 1.088 2.91.833.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.175 22 16.427 22 12.012 22 6.484 17.523 2 12 2z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer