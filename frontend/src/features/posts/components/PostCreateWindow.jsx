import React, { useContext, useRef, useState } from 'react'
import "../styles/postCreateWindow.scss"
import usePost from '../hooks/usePost'
import { useNavigate } from "react-router-dom";
import { PostContext } from '../context/PostContext';


const PostCreateWindow = () => {

        const [caption , setCaption]= useState('')
        const postImgInputRef = useRef(null)
        const {handleCreatePost , loading } = usePost()
        const {setAddClicked } = useContext(PostContext)
        const navigate = useNavigate()



        const handleSubmit = async(e)=>{
            e.preventDefault()

            const file = postImgInputRef.current.files[0];
            setAddClicked(false)
            await handleCreatePost({caption : caption ,postImg: file })
            
            navigate("/feed")


        }



  return (
   <section className="create-window-container">
    <i onClick={()=>setAddClicked(false)} className='cancel'>X</i>
        <form
        onSubmit={handleSubmit}
        action="" className="create-post  ">

<div className="file-container">
    
            <label htmlFor="postImg">Select image</label>
            <input
            ref={postImgInputRef}
            type="file" className='file-input' src="" id='postImg' name='postImg' alt="" />
</div>
            <input
           onChange={(e)=>{
            setCaption(e.target.value)

           }} 
           value={caption}
            type="text" name="" id="" placeholder='Caption' className='caption' />

        <button type='submit' className="create">
            Create
        </button>
        </form>
   </section>
  )
}

export default PostCreateWindow