import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const Button = ({ text, onClick }) => {

    

    return (
        <button
            onClick={onClick}
            className="bg-violet-500 text-white px-4 py-1 mx-1 my-0.5 border-2-violet-1000  rounded-lg hover:bg-violet-600 transition"
        >
            {text}
        </button>)
}

export default Button