import { useState,useEffect } from 'react'
// import { v4 as uuidv4 } from 'uuid'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
const [todoText, setTodoText] = useState("");
const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todo');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos));
  }, [todos]);

  const saveTodo=()=>{
    console.log(todoText);
    if (todoText.trim().length === 0) return;
    const newTodoItem = {
      id: crypto.randomUUID(),
      todo: todoText.trim(),
      isCompleted: false
    };
    setTodos([...todos, newTodoItem]); 
    setTodoText("");
  }

  const toggledone=(id)=>{
   setTodos(todos.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))


  }
  const [showFinished, setShowFinished] = useState(true);
  const visibleTodos = showFinished ? todos : todos.filter(todo => !todo.isCompleted);
  const handledelete=(id)=>{
    setTodos(todos.filter(t => t.id !== id));
    // alert("Todo deleted successfully");
  }

  const handleedit=(id)=>{
    let t=todos.filter(t=>t.id===id)
    setTodoText(t[0].todo);
    handledelete(id);
  }
  
  return (
    <>
<div className="card text-black">
  <div className="heading flex justify-center items-center ">

  <h1 className='font-bold text-2xl'>iTask-Manage your tasks</h1>
  </div>
  <h2 className='font-bold text-xl m-5'>Add a Todo</h2>
  <div className="flex justify-center items-center gap-4">
    <input type="text" className="border-2 border-gray-200 rounded-lg p-2 w-[50vw] bg-white ml-4" onChange={(e)=> setTodoText(e.target.value)} value={todoText}/>
    <button className="bg-blue-500 text-white rounded-md p-2 w-[10vw] mr-4 cursor-pointer" onClick={saveTodo}>Save</button>
  </div>
  <div className='m-3  flex gap-2'>
    <input type="checkbox" checked={showFinished} onChange={(e) => setShowFinished(e.target.checked)}/>
    <label className='gap-4 '>Show Finished</label>
  </div>
  <div className="line h-0.5 bg-black w-[90%] mx-auto"></div>
  <div className="YourTodos">
    <h1 className='font-bold text-2xl m-5'>Your Todos</h1>
    <div className="todos">
<ul className="mt-4">
        {visibleTodos.map((item) => (
          <div key={item.id} className="p-2 flex items-center gap-2 justify-between">
            <div className='flex items-center gap-2'>
            <input type='checkbox' onClick={()=>toggledone(item.id)} checked={item.isCompleted}/>
            <label for= {item.id}  className={item.isCompleted ? 'line-through' : ''}>
              {item.todo}
            </label>
            </div>
            <div className='flex gap-4'>

          <button className="cursor-pointer" onClick={()=>handleedit(item.id)}>
            <img src="https://www.svgrepo.com/show/511909/edit-cover-1481.svg" alt="" height={18} width={18} />
          </button>

          <button className="cursor-pointer"  onClick={()=>handledelete(item.id)}>
            <img src="https://www.svgrepo.com/show/502608/delete-2.svg" alt="" height={18} width={18} />
          </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  </div>
</div>

    </>
  )
}

export default App
