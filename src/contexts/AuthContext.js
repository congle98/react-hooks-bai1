import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) =>{
    const [isAuth,setAuth] = useState(false)

    const toggleAuth = ()=>{
        let check = isAuth;
        check = !check;
        setAuth(check)
    }
    // useEffect(()=>{
    //     const auth =   JSON.parse(localStorage.getItem("auth"))
    //     if(auth!==undefined) setAuth(auth)
    //
    // },[])
    useEffect(()=>{
        localStorage.setItem("auth",isAuth)
        const auth =JSON.parse(localStorage.getItem("auth"))
        alert(auth===true?"đã login":"chưa login xin mời login")
    },[isAuth])
    const authContextData = {
        isAuth,
        toggleAuth
    }
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider
