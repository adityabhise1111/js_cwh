import React, { useContext } from 'react'
import Button from './Button'
import { TodoContext } from '../context/TodoContext'
import { RiEdit2Fill } from "react-icons/ri";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { GiBladeBite } from "react-icons/gi";


const Todo = ({text, isCompleted , id ,toggleTick}) => {

    const { handleAdd, handleDelete, handleEdit, handleCheckBox , todo } = useContext(TodoContext)
    return (toggleTick || !isCompleted)&&(
        <div className="todo flex w-1/2 justify-between ">
            <input 
            type="checkbox" 
            name={id} 
            checked={isCompleted} 
            onChange={()=>handleCheckBox(id)} 
             />
            <div className={isCompleted ? "font-bold line-through " : "font-bold "}>{text}</div>
            <div className="buttons flex">
                <Button onClick={()=>handleEdit(id)} text={<RiEdit2Fill />}  />
            
            
                <Button onClick={()=>handleDelete(id)} text={<RiDeleteBin7Fill />}  />
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