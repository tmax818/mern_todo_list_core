import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {Todo} from "./Components/Todo";

function App() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState({text: "", completed: false})
  const handleSubmit = e => {
    e.preventDefault()
    setTodos([...todos, task])
    setTask({text: "", completed: false})
    console.log(e)
  }

  const handleCheck = (e, task) => {
    for(let t of todos){
      console.log(t.text, task)
      if(t.text === task.text){
        t.completed = !t.completed
      }
      console.log(todos)
      setTodos([...todos])
    }
  console.log(todos)
  }

  const handleDelete = (e, task) => {
    const newTodos = todos.filter(todo => todo.text !== task.text)
    setTodos(newTodos)

  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" onChange={e =>setTask({...task, text: e.target.value})} value={task.text}/>
        <button>submit</button>
      </form>

      {todos.map((todo, i) => {
        return(
            <Todo key={i} task={todo} handleCheck={handleCheck} handleDelete={handleDelete} />
      )
    })}
    </>
  );
}

export default App;
