import "./Todo.css"
import {MdOutlineDone} from "react-icons/md";
import {IoMdTrash} from "react-icons/io"
export default function Todo({text, todo, todos, setTodos}) {

    const deleteHandler = (e) => {
        setTodos(todos.filter(el => el.id !== todo.id))
        
    }
    const completeHandler = (e) => {
        setTodos(todos.map((item) => {
            if( item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        })
        )
    }

    return (
        <div className="todo">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>      
        <button onClick={completeHandler} className="complete-btn"><MdOutlineDone/></button>
        <button onClick={deleteHandler} className="trash-btn"><IoMdTrash/></button>      
        </div>
    )
}
