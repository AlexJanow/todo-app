import "./App.css";
import { useState,useEffect } from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

function App() {


  const [inputText, setInputText] =  useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    filterHandler()
      saveLocalTodos()
    
    
  },[todos, status])

  useEffect(() => {
    getLocalTodos()
  },[])


  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed ===false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  const saveLocalTodos = () => {
    if(todos.length !== 0){
      localStorage.setItem("todos", JSON.stringify(todos))
    }
     
  }

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal)
    }
  }


  return <div className="App">
    
    <header className="App-header">
      <h1 >Todo - List</h1>
      <div className="App-content">
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText}
      setStatus={setStatus}
     
      />
      <TodoList  filteredTodos={filteredTodos}  setTodos={setTodos} todos={todos}/>
      </div>
    </header>
    
    
    </div>;
}

export default App;
