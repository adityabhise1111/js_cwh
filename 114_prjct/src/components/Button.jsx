import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const Button = ({ text, onClick }) => {

    

    return (
        <button
            onClick={onClick}
            className="bg-violet-900 text-white px-3 py-2 mx-1 my-0.5 max-h-[50px] min-h-[50px] border-2-violet-1000  rounded-lg hover:bg-violet-600 transition"
        >
            {text}
        </button>)
}

export default Button