import { createContext, useState } from "react";

export const PostContext = createContext()





const PostContextProvider = ({children})=>{

    const [loading , setLoading] = useState(false)
    const [posts , setPosts] = useState([])
    const [addClicked , setAddClicked] = useState(false)
    const [emojiClicked , setEmojiClicked] = useState(false)
    
   

    return(
        <PostContext.Provider value={{loading , setLoading , posts , setPosts , addClicked ,setAddClicked  , emojiClicked , setEmojiClicked}}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider;