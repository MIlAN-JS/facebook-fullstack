import { createContext, useEffect } from "react"
import { useState } from "react"
import { getUser } from "../services/auth.api"


export const AuthContext = createContext()



const AuthProvider = ({children})=>{

    const [user , setUser] = useState()
    const [loading , setLoading] = useState(true)


    useEffect(()=>{

        const getUserInfo = async ()=>{
            const user =  await getUser()
            setUser(user.user)
            setLoading(false)
        }

        getUserInfo()

    },[])



    return (

        <AuthContext.Provider value = {{user , setUser , setLoading ,loading}}>

            {children}

        </AuthContext.Provider>

    )
}

export default AuthProvider
