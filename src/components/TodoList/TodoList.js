import "./TodoList.css"
import Todo from "../Todo/Todo"

export default function TodoList({todos , setTodos, filteredTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo =>  (
                    <Todo 
                    todo={todo}
                    setTodos={setTodos}
                    todos={todos}
                    text={todo.text}
                    key={todo.id} />
                ))}
            </ul>
        </div>
    )
}
