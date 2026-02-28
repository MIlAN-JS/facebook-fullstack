import { createContext , useContext, useState } from "react";



export const authContext = createContext()



const AuthProvider = ({children})=>{


const [user , setUser] = useState({})
const [loading , setLoading] = useState(false)





    return (

        <authContext.Provider value={{user , setUser , setLoading , loading}}  >
        
        {children}
        
        
        </authContext.Provider>
    )


    

}

export default AuthProvider

  