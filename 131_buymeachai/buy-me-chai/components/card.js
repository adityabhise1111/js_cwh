import { Router } from 'next/router'
import React from 'react'
import { useRouter } from 'next/navigation'

const Card = ({ user }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${user.username}`);
  };

  return (
    <div onClick={handleClick} className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200 rounded-xl p-4 w-64 shadow-lg flex flex-col items-center text-white">
      <img
        className="rounded-full w-20 h-20 border-4 border-indigo-600 shadow-md object-cover"
        src={user.profilePicture || "/default-profile.png"}
        alt={user.name}
      />
      <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-300">{user.email}</p>
    </div>
  )
}

export default Card
