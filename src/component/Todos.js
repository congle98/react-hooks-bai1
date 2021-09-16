import React, {cloneElement, useState} from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const Todos = ()=>{
    const [todos,setTodos] = useState([
        {
            id:1,
            title: "việc 1"
        },
        {
            id:2,
            title: "việc 2"
        },
        {
            id:3,
            title: "việc 3"
        }
    ]);
    const addTodo = (title)=>{
        setTodos([...todos,{id:todos[todos.length-1].id +1,title:title }])
    }
    const deleteTodo = (id)=>{
        setTodos(todos.filter(todo => todo.id!==id))
    }
    return (
        <div className="todo-list">
            <TodoForm  addTodo={addTodo} ></TodoForm>
            <ul>
                {
                    todos.map(todo=> <TodoItem deleteTodo={deleteTodo} key={todo.id} todo={todo}></TodoItem>)
                }
            </ul>
        </div>
    )
}
export default Todos
