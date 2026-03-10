
import { createContext, useState } from "react";

export const PostContext = createContext()





const PostContextProvider = ({children})=>{

    const [loading , setLoading] = useState(false)
    const [posts , setPosts] = useState([])
    const [addClicked , setAddClicked] = useState(false)
    const [commentClicked , setCommentClicked]= useState(false)
    const [emojiClicked , setEmojiClicked] = useState(false)
    const [comments , setComments] = useState([])
   

    return(
        <PostContext.Provider value={{loading , setLoading , posts , setPosts , addClicked ,setAddClicked  , emojiClicked , setEmojiClicked, commentClicked, setCommentClicked , comments , setComments}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider;