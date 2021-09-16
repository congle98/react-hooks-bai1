import React, {useContext, useState} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {TodoContext} from "../contexts/TodoContext";
import {AuthContext} from "../contexts/AuthContext";
import {ADD_TODO} from "../reducers/types";
import { v4 as uuid } from 'uuid';
const TodoForm = () =>{
    const [title,setTitle] = useState("");
    const {theme} = useContext(ThemeContext)
    const {isLightTheme,light,dark} = theme
    const style = isLightTheme? light:dark

    const {dispatch} = useContext(TodoContext)
    const {isAuth} = useContext(AuthContext)
    const  onTitleChange = (e)=>{
        setTitle(e.target.value);
    }
    const add = (event)=>{
        event.preventDefault();
        if(isAuth){
            dispatch({
                type:ADD_TODO,
                payload:{
                   todo:{
                       id:uuid(),
                       title:title
                   }
                }
            })
            setTitle("")
        }
    }
    return (
        <form>
            <input type="text" onChange={onTitleChange} value={title} required name="title"/>
            <input style={style} type="submit" onClick={add} value="Thêm"/>
        </form>
    )
}
export default TodoForm
