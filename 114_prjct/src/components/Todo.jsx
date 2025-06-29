import React, { useContext } from 'react'
import Button from './Button'
import { TodoContext } from '../context/TodoContext'


const Todo = ({text, isCompleted , id }) => {

    const { handleAdd, handleDelete, handleEdit, handleCheckBox , todo } = useContext(TodoContext)
    return (
        <div className="todo flex w-1/2 justify-between ">
            <input 
            type="checkbox" 
            name={id} 
            value={isCompleted} 
            onChange={()=>handleCheckBox(id)} 
             />
            <div className={isCompleted ? "font-bold line-through " : "font-bold "}>{text}</div>
            <div className="buttons flex">
                <Button onClick={()=>handleEdit(id)} text="Edit"  />
            
            
                <Button onClick={()=>handleDelete(id)} text="Delete"  />
            </div>
        </div>
    )
}

export default Todo



/* we cannot do it like onclick={ handleAnything()} 
//this gives erroe 
//Never call state-setting functions (setTodos) inside component render directly.
//Always wrap them in event handlers: () => handleX() not handleX().
//Update your functions to take id directly if needed.

| Goal                          | Correct Syntax                |
| ----------------------------- | ----------------------------- |
| Pass a function directly      | `onChange={handleX}`          |
| Call with parameter (like id) | `onClick={() => handleX(id)}` |
| ❌Dont do this                | `onClick={() => handleX}`     |
*/