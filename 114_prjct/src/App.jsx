import { useState } from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Todo from './components/Todo';
import { TodoContext } from './context/TodoContext';
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const handleEdit = () => {
    console.log("Edit button clicked");

  }

   const handleDelete = (id) => {
    console.log("Delete button clicked");
    let index = todos.findIndex((item) => {
      return item.id === id;
    })
    console.log(index)

    let newTodo = [...todos];
    newTodo.splice(index,1);
    setTodos(newTodo);
    console.log(newTodo)
   }


  const handleAdd = () => {
    console.log("Add button clicked");
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos);

  }
  const handleChange = (e) => {
    console.log("handle button clicked");
    setTodo(e.target.value);
  }
  const handleCheckBox = (id) => {
    // console.log("checkbox clicked");

    
    let index = todos.findIndex((item) => {
      return item.id === id;
    })

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    // console.log(newTodos)

  };

  return (
    <>
      <TodoContext.Provider value={{ handleAdd, handleDelete, handleEdit, handleCheckBox, todo }}>

        <Navbar />
        <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-screen">
          <div className="">
            <div className="addTodo">
              <h2 className="text-lg font-bold">Add ToDo</h2>
              <div className="flex">
                <input type="text" onChange={()=>handleChange} value={todo} name="" id="" />
                <Button text="Add" value onClick={()=>handleAdd} />
              </div>
            </div>
            <h2 className='text-xl font-bold'>Your ToDo</h2>
            <div className="todos   justify-between">
              {
                todos.map((item) => (
                  <Todo
                    text={item.todo}
                    isCompleted={item.isCompleted}
                    key={item.id}
                    id={item.id}
                  />
                )

                )
              }
            </div>
          </div>
        </div>
      </TodoContext.Provider>
    </>
  );
}

export default App;
