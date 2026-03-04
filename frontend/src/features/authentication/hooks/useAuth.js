import { useContext } from "react";
import { loginUser, logoutUser, registerUser } from "../services/auth.api";
import  { AuthContext } from "../context/AuthContext";





const useAuth = ()=>{


   const {loading , setLoading , user , setUser} =  useContext(AuthContext)


    const registerHandler = async({email , password , userName, fullName})=>{

        

            try {
                //set loading
                setLoading(true)
                
                // register user

                const response = await registerUser({email , password , userName , fullName})

                // set value of user 

                setUser(response.user)


                
            } catch (error) {

                 console.log(error)
                 throw error
                

            }finally{
                setLoading(false)
            }




    }

    const loginHandler = async({email  , password})=>{

        try {
            setLoading(true)
            const response =  await loginUser({email , password}) ; 
            setUser(response.user)
            
        } catch (error) {

            console.log("cannot login user" , error)
            
        }finally{
            setLoading(false)
        }
    }

    const logoutHandler = async()=>{
        try {

        const response = await logoutUser();
        setUser(null)
        


            
        } catch (error) {
            console.log("cannot logout user", error)
            
        }
    }



    return {registerHandler ,loginHandler ,  loading ,  user ,logoutHandler};
      


    



}

export default useAuth;


// useAuth.login , useAuth.register


//hooks --> creating functionalitites and exporting them as an object 