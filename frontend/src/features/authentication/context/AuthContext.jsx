import { createContext } from "react"
import { useState } from "react"


export const AuthContext = createContext()



const AuthProvider = ({children})=>{

    const [user , setUser] = useState([])
    const [loading , setLoading] = useState(false)


    return (

        <AuthContext.Provider value = {{user , setUser , setLoading ,loading}}>

            {children}

        </AuthContext.Provider>

    )
}

export default AuthProvider
