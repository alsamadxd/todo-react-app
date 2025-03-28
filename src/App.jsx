import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    
  };
  const handleEdit = () => {};
  const handleDelete = () => {};

  return (
    <>
      <NavBar />
      <div className="container mx-auto my-5 rounded-xl bg-slate-300 p-5 min-h-[80vh]">
        <div className="addTodo">
          <h2 className="text-lg font-bold"> Add a Todo</h2>
          <input type="text" className="bg-white w-2/5" />
          <button
            onClick={handleAdd()}
            className="bg-slate-700 hover:bg-slate-900 text-white font-bold p-3 py-1 rounded-md mx-6"
          >
            Add
          </button>
        </div>
        <h2 className="font-bold text-lg">Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div className="text">{todo}</div>
            <div className="buttons">
              <button
                onClick={handleEdit()}
                className="check bg-slate-700 hover:bg-slate-900 text-white font-bold p-3 py-1 rounded-md mx-2"
              >
                Edit
              </button>
              <button
                onClick={handleDelete()}
                className="delete bg-slate-700 hover:bg-slate-900 text-white font-bold p-3 py-1 rounded-md mx-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
