import React, { useContext, useRef, useState } from 'react'
import "../styles/postCreateWindow.scss"
import usePost from '../hooks/usePost'
import { useNavigate } from "react-router-dom";
import { PostContext } from '../context/PostContext';
import useAuth from '../../authentication/hooks/useAuth';
import { GrEmoji } from "react-icons/gr";
import EmojiPicker from "emoji-picker-react"
import { MdImage } from "react-icons/md";
import {createPortal} from "react-dom"

const PostCreateWindow = () => {

        const [caption , setCaption]= useState('')

        const {handleCreatePost , loading } = usePost()
        const {setAddClicked , emojiClicked ,setEmojiClicked } = useContext(PostContext)
        const navigate = useNavigate()
        const {user} = useAuth()

        const imgInputRef = useRef(null)
        


         console.log(user)


         const addEmoji = (emojiData)=>{
            setCaption((prev)=> prev + emojiData.emoji)
            setEmojiClicked(false)

         }

        const handleSubmit = async(e)=>{
            e.preventDefault()
            const file = imgInputRef.current.files[0]
            await handleCreatePost({caption : caption ,postImg: file })
            setAddClicked(false)
            navigate("/feed")


        }

       


 
    return createPortal(
             <section className='create-window-wrapper'>

<div className='backdrop'></div>
   
   <div className="create-window-container">

     
       <form onSubmit={handleSubmit}>
         <div className="postwindow-userinfo">   
             <img src={user.userImg} className='user-profile'  alt="" />
             <div>

                <h1>{user.userName} <i>-</i></h1>
                <p>Post to anyone</p>
             </div>
        </div>

        <div className="caption">
            <textarea
            required
            onChange={(e)=>{
                setCaption(e.target.value)
            }}
            value={caption}
            name="" placeholder='What do you want to talk about?' id=""></textarea>
        </div>

       {
        emojiClicked &&  <div className='emoji-window'>

            <EmojiPicker
            width={300}
            height={300}
            className='emoji-picker' onEmojiClick={addEmoji} />

        </div>
       }

        <i


        onClick={()=>{
            setEmojiClicked((prev)=> !prev)
        }}
        className='Emoji'>
<GrEmoji />
        </i>

        <div className="btns">
         
                <label for="select-img" name="postImg">  <MdImage /></label>
                <input
                
                ref={imgInputRef}
                name='postImg' type="file"id='select-img' />
                <small>Add media</small>
            
           
        </div>

        <div className="post-btn">
            <button className='submit'>Post</button>
        </div>

       </form>

   </div>

    </section>, 
    document.body // here this component is injected directly
    )

    
   
  
}

export default PostCreateWindow