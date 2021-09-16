import React, {createContext, useEffect, useReducer, useState} from "react";
import {authReducer} from "../reducers/AuthReducer";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) =>{
    const [isAuth,dispatch] = useReducer(authReducer)


    useEffect(()=>{
        alert(isAuth?"đã đăng nhập":"chưa đăng nhập")
    },[isAuth])

    const authContextData = {
        isAuth,
        dispatch
    }
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider
