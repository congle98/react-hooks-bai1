import React, {useContext, useState} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {TodoContext} from "../contexts/TodoContext";
import {AuthContext} from "../contexts/AuthContext";

const TodoForm = () =>{
    const [title,setTitle] = useState("");
    const {theme} = useContext(ThemeContext)
    const {isLightTheme,light,dark} = theme
    const style = isLightTheme? light:dark

    const {addTodo} = useContext(TodoContext)
    const {isAuth} = useContext(AuthContext)
    const  onTitleChange = (e)=>{
        setTitle(e.target.value);
    }
    const add = (event)=>{
        event.preventDefault();
        if(isAuth){
            addTodo(title);
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
