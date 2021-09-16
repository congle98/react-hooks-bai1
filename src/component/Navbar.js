import React,{useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";


const Navbar = ()=>{
    const {theme} = useContext(ThemeContext)
    const {isLightTheme,light,dark} = theme
    const style = isLightTheme? light:dark
    return (
        <div>
            <div className="navbar" style={style}>
                <h1>My hooks app</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar
