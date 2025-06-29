import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Empty from './components/Empty';
import Todo from './components/Todo';
import { TodoContext } from './context/TodoContext';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // Initialize todos state with data from localStorage or an empty array.
  // This function runs only once during the initial render.
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  // State for the current todo input.
  const [todo, setTodo] = useState(""); // Initialize with an empty string for new todos

  // This useEffect hook saves the 'todos' array to localStorage
  // whenever the 'todos' state changes.
  useEffect(() => {
    console.log("Saving todos to localStorage", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // Dependency array ensures this runs only when 'todos' changes

  // Handles editing a todo item.
  const handleEdit = (id) => {
    // Find the todo item to be edited.
    let mytodo = todos.filter(item => item.id === id);
    // Set the input field to the text of the todo being edited.
    setTodo(mytodo[0].todo);

    // Remove the original todo item from the list.
    let newTodo = todos.filter((item) => item.id !== id);
    setTodos(newTodo);
  };

  // Handles deleting a todo item.
  const handleDelete = (id) => {
    const deleteConfirmed = window.confirm("Are you sure you want to delete this item?");
    if (deleteConfirmed) {
      // Filter out the todo item with the matching ID.
      let newTodo = todos.filter((item) => item.id !== id);
      setTodos(newTodo);
    }
  };

  // Handles adding a new todo item.
  const handleAdd = () => {
    if (todo.trim() === "") { // Prevent adding empty todos
      return;
    }
    // Add a new todo with a unique ID, the current input value, and isCompleted set to false.
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    // Clear the input field after adding.
    setTodo("");
  };

  // Handles changes in the todo input field.
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // Handles toggling the completion status of a todo item.
  const handleCheckBox = (id) => {
    // Find the index of the todo item.
    let index = todos.findIndex((item) => item.id === id);
    // Create a mutable copy of the todos array.
    let newTodos = [...todos];
    // Toggle the isCompleted status.
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
            <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-screen">
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
                    <Button text="Add" type="submit" disabled={todo.trim() === ""} /> {/* Disable if input is empty */}
                  </form>
                </div>
                <h2 className='text-xl font-bold mb-3'>Your ToDos</h2> {/* Changed to ToDos and added margin-bottom */}
                <div className="todos">
                  {/* Map through the todos array and render a Todo component for each item */}
                  {
                    todos.map((item) => (
                      <Todo
                        text={item.todo}
                        isCompleted={item.isCompleted}
                        key={item.id} // Important for React list rendering
                        id={item.id}
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