import { useState } from "react";
import NavBar from "./components/NavBar";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if(todo.length){
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("")
  }
    // console.log(todo.length)
  };

  const handleChange = (e) => {
    setTodo(e.target.value)
  };

  const handleCheckbox = (e) => {
   let id=e.target.name;
   let index=todos.findIndex(item=>{
    return item.id===id;
   })
   let newTodos=[...todos];
   newTodos[index].isCompleted = !newTodos[index].isCompleted;
   setTodos(newTodos)
  };

  const handleEdit = () => {
  };
  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item=>{
      return item.id!==id
    })
    setTodos(newTodos);
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto my-5 rounded-xl bg-slate-300 p-5 min-h-[80vh]">
        <div className="addTodo">
          <h2 className="text-lg font-bold"> Add a Todo</h2>
          <input name={todo.id} onChange={handleChange} value={todo} type="text" className="bg-white w-2/5" placeholder="Write Your task ? "/>
          <button
            onClick={handleAdd}
            className="bg-slate-700 hover:bg-slate-900 text-white font-bold p-3 py-1 rounded-md mx-6"
          >
            Add
          </button>
        </div>
        <h2 className="font-bold text-lg">Your Todos</h2>
        <div className="todos">
          {todos.length===0 && <div className="m-5">No Todos to display</div>}
          {todos.map(item=>{
            
          
         return (
           <div key={item.id} className="todo flex justify-between w-5/11 my-3">
             <div className="flex gap-5 items-center">
               <input
                 name={item.id}
                 onChange={handleCheckbox}
                 type="checkbox"
                 value={item.isCompleted}
               />
               <div className={item.isCompleted ? "line-through" : ""}>
                 {item.todo}
               </div>
             </div>
             <div className="buttons">
               {/* <button
                 onClick={handleEdit()}
                 className="check bg-slate-700 hover:bg-slate-900 text-white font-bold p-3 py-1 rounded-md mx-2"
               >
                 Edit
               </button> */}
               <button
                 onClick={(e) => {
                   handleDelete(e, item.id);
                 }}
                 className="delete bg-slate-700 hover:bg-slate-900 text-white font-bold p-3 py-1 rounded-md mx-2"
               >
                 Delete
               </button>
             </div>
           </div>
         );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
