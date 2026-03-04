import React from 'react'
import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";
import usePost from '../hooks/usePost';


const Post = () => {
  const {posts , loading} = usePost()
  console.log("posts", posts)
  return (
    <div className="post-container">

   
  {
    posts.map((post)=>{
      return  <div className='post'>
         
         <div className="user-dets">
             <div>
               <img  src={`${post.user.imgLink}`} className='user-img' alt="" />

                <h3>{post.user.fullName}</h3>
             </div>

             <i><HiDotsHorizontal /></i>

         </div>

        <div className='post-img-container'>
           <img src={`${post.postImg}`} className='post-img' alt="" />

        </div>


         <div className="post-icons">
             <i className='icon love'><svg aria-label="Like" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg> <span>10</span> </i>
             <i className='icon comment'> <svg aria-label="Comment" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg> <span></span>2</i>
             <i className='icon share'><svg aria-label="Share" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share</title><path d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.488" x2="15.515" y1="12.208" y2="7.641"></line></svg> <span></span></i>
         </div>

        <div className='user-caption'>
          <h2 className="caption">{post.user.userName}</h2>
          <p>{post.caption}</p>
        </div>

    </div>
})
  }

     </div>
  )
}

export default Post