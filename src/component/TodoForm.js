import React, {useContext, useState} from "react";
import {ThemeContext} from "../contexts/ThemeContext";

const TodoForm = (props) =>{
    const [title,setTitle] = useState("");
    const {theme} = useContext(ThemeContext)
    const {isLightTheme,light,dark} = theme
    const style = isLightTheme? light:dark
    const  onTitleChange = (e)=>{
        setTitle(e.target.value);
    }
    const addTodo = (event)=>{
        event.preventDefault();
        props.addTodo(title);
        setTitle("")
    }
    return (
        <form>
            <input type="text" onChange={onTitleChange} value={title} required name="title"/>
            <input style={style} type="submit" onClick={addTodo} value="Thêm"/>
        </form>
    )
}
export default TodoForm
