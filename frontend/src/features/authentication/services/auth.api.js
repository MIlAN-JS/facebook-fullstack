import axios from "axios"

const api = axios.create({
    baseURL : "http://localhost:3000/api/auth/", 
    withCredentials : true
})


const registerUser = async({userName , fullName , password , email })=>{

    try {

        const response = await api.post("/register", {
            userName : userName, 
            email : email ,
            password : password , 
            fullName : fullName
        })

        return response.data
        
    } catch (error) {
        console.log("cannot register user" , error)
        throw error
        
    }

} 

const loginUser = async({email , password})=>{
    try {

        const response =await api.post("/login", {email , password});
        console.log(response)
        return response.data
        
        
    } catch (error) {

        console.log("error found : cannot login user" , error)
        
    }
}



export {

    registerUser, 
    loginUser

}