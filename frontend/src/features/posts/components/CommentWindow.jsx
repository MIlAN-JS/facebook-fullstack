import React from 'react'
import "../styles/comment.scss"
import { PostContext } from '../context/PostContext'
import { useContext } from 'react'
import { useState } from 'react'

const CommentWindow = ({postImg , }) => {

    const{  commentClicked, setCommentClicked , comments} = useContext(PostContext)
    const {handleComment}  = usePost()
    console.log(comments)

    const [commentInput , setCommentInput] = useState("")

    const submitHandler = ()=>{
        handleComment({commentInput})
    }

  return (
     <section className='comment-window-container'>
                      
    
    <div className='backdrop'>
        <i
        onClick={()=>{
            setCommentClicked(prev=> !prev)
        }}
        className='close'><svg aria-label="Close" class="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Close</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></polyline><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg></i>
    </div>


    <div className="container">
        <div className="post-img">
            <img src={postImg} alt="" />
        </div>
        <div className="right-container">
            <div className="right-header"></div>
            {
                comments.map((comment)=>(
                    <div className="comment-container">{comment}</div>
                ))
            }
            <div className="buttons-container"></div>
            <form className="comment-input">
                    <input 
                    value = {commentInput}
                    onChange={(e)=>{
                        setCommentInput(e.target.value)
                    }}
                    type="text" placeholder='comment' />
                    <button>submit</button>
            </form>

        </div>

    </div>


    
       
      
    
        </section>
  )
}

export default CommentWindow