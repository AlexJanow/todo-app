
import "./Form.css"

export default function Form({todos, setTodos,inputText, setInputText, setStatus}) {

  const inputTextHandler = (e) => {
   
    setInputText(e.target.value)
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])
    setInputText("")
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

    return (
        <form className="form-wrapper">
        <input className="form-input" value={inputText} onChange={inputTextHandler} type="text"  
              placeholder="Type a todo..."
        />
        <button onClick={submitTodoHandler} className="form-button" type="submit">
         submit
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="form-filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}
