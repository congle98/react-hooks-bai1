import React, {createContext, useEffect,useReducer} from "react";
import {todoReducer} from "../reducers/TodoReducers";
import {GET_TODOS, SAVE_TODOS} from "../reducers/types";

export const TodoContext = createContext()

const TodoContextProvider = ({children})=>{

    const [todos,dispatch] = useReducer(todoReducer,[])

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
    //contex data
    const todoContextData = {
        todos,
        dispatch
    }


    return (
        <TodoContext.Provider value={todoContextData} >
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider
