import React, {createContext, useEffect, useState} from "react";

export const TodoContext = createContext()

const TodoContextProvider = ({children})=>{
    const [todos,setTodos] = useState(
        // JSON.parse(localStorage.getItem("todos"))?JSON.parse(localStorage.getItem("todos")):[
        //             {
        //                 id:1,
        //                 title: "việc 1"
        //             },
        //             {
        //                 id:2,
        //                 title: "việc 2"
        //             },
        //             {
        //                 id:3,
        //                 title: "việc 3"
        //             }
        //         ]
        []
    );

    //lấy dữ liệu lần đầu
    useEffect(()=>{
        const todos = localStorage.getItem("todos")
        if(todos) setTodos(JSON.parse(todos))
    },[])
    //userEffect
    //lắng nghe thay đổi của todos
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    const addTodo = (title)=>{
        setTodos([...todos,{id:(todos.length?todos[todos.length-1].id +1:1),title:title }])
    }
    const deleteTodo = (id)=>{
        setTodos(todos.filter(todo => todo.id!==id))
    }

    //contex data
    const todoContextData = {
        todos,
        addTodo,
        deleteTodo
    }


    return (
        <TodoContext.Provider value={todoContextData} >
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider
