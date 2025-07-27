import React, { use } from 'react'
import { FaHeart, FaCoffee, FaUsers, FaRocket, FaShieldAlt, FaGlobe } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { AiOutlineTeam } from 'react-icons/ai'


export default function About() {
    
  return (
    <>
      {/* Hero Section */}
      <div className="relative z-20 text-white p-8 pb-20 gap-16 sm:p-20 flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            About Buy Me Chai
          </h1>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Empowering creators and building communities through the simple joy of sharing a chai. 
            We believe every creator deserves support, and every supporter deserves recognition.
          </p>
          <div className="flex justify-center space-x-4">
            <FaCoffee className="text-3xl text-amber-400" />
            <FaHeart className="text-3xl text-pink-400" />
            <FaUsers className="text-3xl text-blue-400" />
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* Mission Section */}
      <div className="text-white container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img 
              className="rounded-lg shadow-lg w-full" 
              src="/man.jpg" 
              alt="Creator working" 
              width={500}
              height={300}
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              At Buy Me Chai, we're on a mission to democratize creator funding. We believe that great content 
              and innovative ideas shouldn't be limited by financial constraints.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Just like how a simple cup of chai brings people together in Indian culture, our platform 
              creates meaningful connections between creators and their supporters worldwide.
            </p>
            <div className="flex items-center space-x-3">
              <FaRocket className="text-2xl text-indigo-400" />
              <span className="text-lg font-semibold">Launching dreams, one chai at a time</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* Why Choose Us Section */}
      <div className="text-white container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Buy Me Chai?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="item space-y-4 flex flex-col items-center justify-center text-center p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm">
            <div className="bg-indigo-600 p-4 rounded-full">
              <FaShieldAlt className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-semibold">Secure & Trusted</h3>
            <p className="text-gray-300">Your transactions are protected with bank-level security and encryption.</p>
          </div>
          
          <div className="item space-y-4 flex flex-col items-center justify-center text-center p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm">
            <div className="bg-green-600 p-4 rounded-full">
              <FaGlobe className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-semibold">Global Reach</h3>
            <p className="text-gray-300">Connect with supporters from around the world with multi-currency support.</p>
          </div>
          
          <div className="item space-y-4 flex flex-col items-center justify-center text-center p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm">
            <div className="bg-purple-600 p-4 rounded-full">
              <BiSupport className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="text-gray-300">Our dedicated team is always here to help you succeed on your journey.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* How It Works Section */}
      <div className="text-white container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col lg:flex-row gap-8 justify-around">
          <div className="item space-y-4 flex flex-col items-center justify-center text-center max-w-sm">
            <div className="relative">
              <img className="bg-white rounded-full shadow-lg" src="/coin.jpeg" width={120} height={120} alt="Create Profile" />
              <div className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
            </div>
            <h3 className="text-xl font-semibold">Create Your Profile</h3>
            <p className="text-gray-300">Set up your creator profile and share your story with the world.</p>
          </div>
          
          <div className="item space-y-4 flex flex-col items-center justify-center text-center max-w-sm">
            <div className="relative">
              <img className="bg-white rounded-full shadow-lg" src="/fund.png" width={120} height={120} alt="Share Content" />
              <div className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
            </div>
            <h3 className="text-xl font-semibold">Share Your Work</h3>
            <p className="text-gray-300">Showcase your creativity and connect with your audience.</p>
          </div>
          
          <div className="item space-y-4 flex flex-col items-center justify-center text-center max-w-sm">
            <div className="relative">
              <img className="bg-white rounded-full shadow-lg" src="/man.jpg" width={120} height={120} alt="Receive Support" />
              <div className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
            </div>
            <h3 className="text-xl font-semibold">Receive Support</h3>
            <p className="text-gray-300">Get funded by supporters who believe in your vision.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* Stats Section */}
      <div className="text-white container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-indigo-400">10K+</div>
            <div className="text-gray-300">Creators Supported</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-green-400">₹50L+</div>
            <div className="text-gray-300">Funds Raised</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-pink-400">100K+</div>
            <div className="text-gray-300">Chais Bought</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-yellow-400">50+</div>
            <div className="text-gray-300">Countries</div>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* CTA Section */}
      <div className="text-white container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of creators who are already building their communities and achieving their dreams.
        </p>
        <div className="space-x-4">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold">
            Start Creating
          </button>
          <button className="border border-indigo-600 text-indigo-400 px-8 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200 font-semibold">
            Support Creators
          </button>
        </div>
      </div>
    </>
  )
}

export const metadata = {
  title: 'About | Buy Me Chai',
  description: 'Learn about Buy Me Chai, our mission, and why creators love our platform.',
}