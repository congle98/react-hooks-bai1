import React, {cloneElement, useContext, useEffect, useState} from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import {TodoContext} from "../contexts/TodoContext";
import {AuthContext} from "../contexts/AuthContext";
import {GET_TODOS, SAVE_TODOS} from "../reducers/types";

const Todos = ()=>{
    const {todos,dispatch} = useContext(TodoContext)
    const {isAuth} = useContext(AuthContext)

    //lấy dữ liệu lần đầu
    useEffect(()=>{
        dispatch({
            type:GET_TODOS,
            payload:null
        })
    },[])
    //userEffect
    //lắng nghe thay đổi của todos
    useEffect(()=>{
        dispatch({
            type:SAVE_TODOS,
            payload:{
                todos:todos
            }
        })
    },[todos])
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
