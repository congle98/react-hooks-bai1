import React,{useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {AuthContext} from "../contexts/AuthContext";
import {TOGGLE_AUTH} from "../reducers/types";


const Navbar = ()=>{
    const {theme} = useContext(ThemeContext)
    const {isLightTheme,light,dark} = theme
    const style = isLightTheme? light:dark
    const {isAuth,dispatch} = useContext(AuthContext)
    return (
        <div>
            <div className="navbar" style={style}>
                <h1>My hooks app</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>
                        {isAuth?"You are logged in":""}
                        <button onClick={()=>{dispatch({
                            type:TOGGLE_AUTH
                        })}}>{isAuth?"Logout":"Login"}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
