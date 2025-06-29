import React from 'react';
import Button from './Button'; // Reuse your existing button component
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';


const Empty = ({ todo, handleChange, handleAdd }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-violet-100 to-violet-300">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center">
                <h1 className="text-3xl font-bold text-violet-700 mb-6">Your To-Do List is Empty</h1>
                <p className="text-gray-500 mb-8">Start by adding your first task ✨</p>

                <div className="flex items-center justify-center gap-2">
                    <input
                        type="text"
                        value={todo}
                        onChange={handleChange}
                        placeholder="Enter your task..."
                        className="flex-1 px-4 py-2 rounded-xl border-2 border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-600"
                    />
                    <Button text="Add" onClick={handleAdd} />
                </div>
            </div>
        </div>
    );
};

export default Empty;
