import { useContext } from "react"
import { createPost } from "../services/post.api"
import { PostContext } from "../context/PostContext"





const usePost = ()=>{

    const {loading , setLoading , posts , setPosts} = useContext(PostContext);



    const handleCreatePost = async({postImg , caption})=>{

        try {
            setLoading(true)
            const response = await createPost({postImg , caption})
            setPosts([response.post , ...posts])
        } catch (error) {
            console.log("cannot create post" , error)
            throw error
        } finally{
            setLoading(false)
        }

    }


    return {
        handleCreatePost,
        loading , 
        posts , 
        

    }

}


export default usePost