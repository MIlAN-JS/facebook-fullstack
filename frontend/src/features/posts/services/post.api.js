import axios from "axios"

const api = axios.create({
    baseURL : "http://localhost:3000/api/posts/",
    withCredentials : true
})



const createPost = async({caption , postImg })=>{
    try {

        const formData = new FormData();
        formData.append("caption" , caption)
        formData.append("postImage", postImg)
    
        // db call
        const response =await api.post("/create" , formData)
        
        return response?.data

        
    } catch (error) {

        throw error
        console.log("cannot create post", error)
        
    }
}


export {
    createPost
}