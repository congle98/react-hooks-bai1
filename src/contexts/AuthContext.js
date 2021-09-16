import React, {createContext, useState} from "react";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) =>{
    const [isAuth,setAuth] = useState(false)

    const toggleAuth = ()=>{
        let check = isAuth;
        check = !check;
        setAuth(check)
    }

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
