import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Empty from './components/Empty';
import Todo from './components/Todo';
import { TodoContext } from './context/TodoContext';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [todo, setTodo] = useState("Wanna Go Home"); // Initialize with an empty string for new todos
  const [toggleTick, settoggleTick] = useState(true)

  useEffect(() => {
  
    console.log(toggleTick)
  }, [toggleTick])
  
  useEffect(() => {
    console.log("Saving todos to localStorage", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleEdit = (id) => {

    let mytodo = todos.filter(item => item.id === id);

    setTodo(mytodo[0].todo);


    let newTodo = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
  };


  const handleDelete = (id) => {
    const deleteConfirmed = window.confirm("Are you sure you want to delete this item?");
    if (deleteConfirmed) {

      let newTodo = todos.filter((item) => item.id !== id);
      setTodos(newTodo);
    }
  };

  const handleAdd = () => {
    if (todo.trim() === "") {
      return;
    }
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    // Clear the input field after adding.
    setTodo("");
  };

  // Handles changes in the todo input field.
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckBox = (id) => {
    let index = todos.findIndex((item) => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  

  return (
    <>
      {/* TodoContext.Provider makes these functions available to child components */}
      <TodoContext.Provider value={{ handleAdd, handleDelete, handleEdit, handleCheckBox, todo, handleChange }}>
        <Navbar />
        {todos.length !== 0 ? (
          <>
            <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] w-1/2">
              <div className="">
                <div className="addTodo mb-4"> {/* Added margin-bottom for spacing */}
                  
                  <h2 className="text-lg font-bold mb-2">Add ToDo</h2> {/* Added margin-bottom */}
                  <form
                    className="flex gap-2" // Added gap for spacing between input and button
                    onSubmit={e => {
                      e.preventDefault(); // Prevent default form submission behavior
                      handleAdd();
                    }}>
                    <input
                      type="text"
                      onChange={handleChange}
                      value={todo}
                      placeholder="Add a new todo..." // Added a placeholder
                      className="flex-grow p-2 border border-gray-300 rounded-md" // Tailwind classes for styling
                    />
                    <Button text="Save" type="submit" disabled={todo.length <= 3} /> {/* Disable if input is empty */}
                  </form>
                </div>
                <h2 className='text-xl font-bold mb-3'>Your ToDos</h2> {/* Changed to ToDos and added margin-bottom */}
                <div className="todos ">
                  <input type="checkbox" checked={toggleTick} onChange={() => settoggleTick(!toggleTick)} name="" id="" /><h7>Show Finished</h7>
                  {/* Map through the todos array and render a Todo component for each item */}
                  {
                    todos.map((item) => (
                      <Todo
                        text={item.todo}
                        isCompleted={item.isCompleted}
                        key={item.id} // Important for React list rendering
                        id={item.id}
                        toggleTick={toggleTick}
                      />
                    ))
                  }
                </div>
              </div>
            </div>
          </>
        ) : (
          // Render the Empty component if there are no todos.
          // The Empty component will now receive `todo` and `handleChange` from context.
          <Empty
            todo={todo}
            handleChange={handleChange}
            handleAdd={handleAdd}
          />
        )}
      </TodoContext.Provider>
    </>
  );
}

export default App;