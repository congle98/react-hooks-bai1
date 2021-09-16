import React, {cloneElement, useContext, useState} from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import {TodoContext} from "../contexts/TodoContext";
import {AuthContext} from "../contexts/AuthContext";

const Todos = ()=>{
    const {todos} = useContext(TodoContext)
    const {isAuth} = useContext(AuthContext)
    return (
        <div className="todo-list">
            <TodoForm ></TodoForm>
            {
                isAuth?(<ul>
                    {
                        todos.map(todo=> <TodoItem key={todo.id} todo={todo}></TodoItem>)
                    }
                </ul>):(<p style={{textAlign:"center"}}>Not loggin</p>)
            }

        </div>
    )
}
export default Todos
