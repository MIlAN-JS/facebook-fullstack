import { useContext } from "react";
import { registerUser } from "../services/auth.api";
import  { authContext } from "../context/AuthContext";





const useAuth = ()=>{


    const {  loading , setLoading , setUser ,user} = useContext(authContext) 


    const registerHandler = async({email , password , userName})=>{

        

            try {
                //set loading
                setLoading(true)
                
                // register user

                const user = await registerUser({email , password , userName})

                // set value of user 

                setUser(user.user)

                // loading false
                setLoading(false)

                
            } catch (error) {

                 console.log(error)
                 throw error
                

            }finally{
                setLoading(false)
            }



    }




    return {registerHandler , loading ,  user}

      


    



}

export default useAuth;


// useAuth.login , useAuth.register


//hooks --> creating functionalitites and exporting them as an object 