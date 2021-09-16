import React,{createContext,useState} from "react";

export const TodoContext = createContext()

const TodoContextProvider = ({children})=>{
    const [todos,setTodos] = useState(
            [
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
        ]
    );
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
