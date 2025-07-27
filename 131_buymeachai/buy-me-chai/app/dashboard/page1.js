"use client"
import React from 'react'
import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation'

const Dashboard = () => {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Dashboard</h1>
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Welcome back!</h2>
          <p className="text-gray-300 mb-2">Email: {session?.user?.email}</p>
          <p className="text-gray-300">Name: {session?.user?.name || 'Not provided'}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Total Supporters</h3>
            <p className="text-3xl font-bold text-indigo-400">0</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">Total Donations</h3>
            <p className="text-3xl font-bold text-green-400">$0</p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-2">This Month</h3>
            <p className="text-3xl font-bold text-blue-400">$0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
