import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import NavBar from "./components/NavBar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showfinished, setshowfinished] = useState(true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){
      let todos = JSON.parse(localStorage.getItem("todos"));
      setTodos(todos)
    }
  }, [])
  

  const saveToLocalStorage=()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const togglefinished=(e)=>{
    setshowfinished(!showfinished)
  }

  const handleAdd = () => {
    if (todo.length) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo("");
    }
    saveToLocalStorage()
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
    saveToLocalStorage();
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) => {
      return item.id === id;
    });
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLocalStorage()
  };

  const handleEdit = (e, id) => {
    let t=todos.filter(i=>i.id===id)
    setTodo(t[0].todo)
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLocalStorage()
  };
  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
    saveToLocalStorage()
  };

  return (
    <>
      <NavBar />
      <div className="mx-3 lg:container lg:mx-auto md:mx-5 my-5 rounded-xl bg-slate-300 p-5 min-h-[80vh] lg:w-1/2">
        <h1 className="font-bold text-center text-xl">
          <span className="bg-slate-800 p-1 text-white rounded-2xl mx-2">
            ✏️iList{" "}
          </span>{" "}
          - Manage all your todos at one Place
        </h1>
        <div className="addTodo flex flex-col gap-5 my-6">
          <h2 className="text-lg font-bold md:text-2xl"> Add a Todo</h2>
          <input
            name={todo.id}
            onChange={handleChange}
            value={todo}
            type="text"
            className="bg-white w-full rounded-lg px-5 py-2"
            placeholder="Write Your task ? "
          />
          <button
            onClick={handleAdd}
            className="bg-slate-700 hover:bg-slate-900 text-white font-bold p-3 py-1 rounded-full "
          >
            Save
          </button>
        </div>
        <input
          onChange={togglefinished}
          type="checkbox"
          checked={showfinished}
          className="my-3"
          id="show"
        />{" "}
        <label className="mx-2" htmlFor="show">
          Show Finished
        </label>
        <div className="h-[1px] bg-black opacity-55 my-2"></div>
        <h2 className="font-bold text-lg md:text-2xl">Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className="m-5">No Todos to display</div>}
          {todos.map((item) => {
            return (
              (showfinished || !item.isCompleted) && (
                <div
                  key={item.id}
                  className="todo flex justify-between w-full my-3"
                >
                  <div className="flex gap-5 items-center">
                    <input
                      name={item.id}
                      onChange={handleCheckbox}
                      type="checkbox"
                      checked={item.isCompleted}
                    />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="buttons flex h-full">
                    <button
                      onClick={(e) => {
                        handleEdit(e, item.id);
                      }}
                      className="check bg-slate-700 hover:bg-slate-900 text-white font-bold p-3 py-1 rounded-md mx-2"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={(e) => {
                        handleDelete(e, item.id);
                      }}
                      className="delete bg-slate-700 hover:bg-slate-900 text-white font-bold p-3 py-1 rounded-md mx-2"
                    >
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
