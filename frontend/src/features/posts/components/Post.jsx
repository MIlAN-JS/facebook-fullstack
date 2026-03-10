import React from 'react'
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import usePost from '../hooks/usePost';
import "../styles/post.scss"
import Like from './Like';
import { useContext } from 'react';
import { PostContext } from '../context/PostContext';

const Post = () => {

  const {posts , loading} = usePost()
  const {commentClicked, setCommentClicked, comments , setComments} = useContext(PostContext)

  return (
    <div className="post-container">

   


  {
    posts.map((post)=>(
      
        <div className='post  '>
          <div className="post-header">
            <img src={post.user.imgLink} className='avatar' alt="" />
            <span className='username'>{post.user.fullName}</span>
            <button className='options'>•••</button>

          </div>

          <div className="post-content">

              <img src={post.postImg} className='' alt="" />


          </div>
          <div className="post-actions">

           
             <Like likeCount={post.likesCount}  isLiked={post.liked} postId = {post._id} />


             <button
             onClick={()=>{
              setCommentClicked(prev => !prev)
              setComments(post.comments)
             }}
             className='icon comment'> <svg aria-label="Comment" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="white" strokeLinejoin="round" strokeWidth="2"></path></svg> <span></span>0</button>


             <button className='icon share'><svg aria-label="Share" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share</title><path d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z" fill="none" stroke="white" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.488" x2="15.515" y1="12.208" y2="7.641"></line></svg> <span></span></button>
         


          </div>
          <div className="post-info">

            <p className="likes">0 likes</p>
            <p className="caption">
              <b>{post.user.fullName}</b> {post.caption}
            </p>

          </div>

        </div>
    ))
  }

     </div>
  )
}

export default Post