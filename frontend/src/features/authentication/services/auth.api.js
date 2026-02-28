import axios from "axios"


const api = axios.create({
    baseURL : "http://localhost:3000/api/auth", 
    withCredentials : true
})



const registerUser = async({email , password , userName})=>{

    try {

        const user = await api.post("/register", {
            email : email, 
            password : password, 
            userName: userName
        })

        return user.data
        
    } catch (error) {

        throw error; 
        console.log("cannot register user ", error)
        
    }

}

export {
    registerUser
}