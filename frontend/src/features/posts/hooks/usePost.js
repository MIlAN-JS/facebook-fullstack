import { useContext } from "react"
import { createPost, getFeed, likePost } from "../services/post.api"
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

    const handleGetFeed = async()=>{
        try {

        setLoading(true)
        const response = await getFeed();
        
        setPosts([...posts , ...response.posts])
            
        } catch (error) {
            console.log("cannot get feed", error)
        }finally{
            setLoading(false)
        }
    }

    const handleLike = async(postId)=>{

        try {

         const res = await likePost(postId)
         console.log(res)

            
        } catch (error) {
            console.log("cannot like post", error)
        }
    }

    return {
        handleCreatePost,
        loading , 
        posts , 
        handleGetFeed, 
        handleLike
        

    }

}


export default usePost