import { createContext ,useState,useEffect } from "react";
import { userObserver } from "../helpers/firebase";

export const AuthContext = createContext()

const AuthContextProvider =({children})=>{
     const [user, setUser] = useState()
     const [email, setEmail] = useState(" ")

     useEffect(() => {
       userObserver(setUser)
     }, [])

    return(
        <AuthContext.Provider value={{user,email}}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider