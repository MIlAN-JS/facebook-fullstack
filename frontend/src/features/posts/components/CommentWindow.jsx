import React from "react";
import "../styles/comment.scss";
import { PostContext } from "../context/PostContext";
import { useContext } from "react";
import { useState } from "react";
import usePost from "../hooks/usePost";
import Like from "./Like";

const CommentWindow = ({ postImg }) => {


  const { commentClicked, setCommentClicked, comments } =
    useContext(PostContext);
  const { handleComment } = usePost();
  console.log(comments);

  const [commentInput, setCommentInput] = useState("");
const postid = comments._id
  const submitHandler = () => {
    handleComment({ commentInput , postId });
  };

  return (
    <section className="comment-window-container">
      <div className="backdrop">
        <i
          onClick={() => {
            setCommentClicked((prev) => !prev);
          }}
          className="close"
        >
          <svg
            aria-label="Close"
            class="x1lliihq x1n2onr6 x9bdzbf"
            fill="currentColor"
            height="18"
            role="img"
            viewBox="0 0 24 24"
            width="18"
          >
            <title>Close</title>
            <polyline
              fill="none"
              points="20.643 3.357 12 12 3.353 20.647"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            ></polyline>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              x1="20.649"
              x2="3.354"
              y1="20.649"
              y2="3.354"
            ></line>
          </svg>
        </i>
      </div>

      <div className="container">

        <div className="post-img">
          <img src={comments.postImg} alt="" />
        </div>

        <div className="right-container">
          <div className="right-header">
               <img src={comments.user.imgLink} className='avatar' alt="" />
               <span className='username'>{comments.user.fullName}</span>
              <button className='options'>•••</button>
          </div>


          <div  className="comment-wrapper">
            {comments.comments.map((comment) => (
            <div id="comment-holder">{comment}</div>
          ))}
          </div>


            <div className="post-actions">

           
             <Like likeCount={comments.likesCount}  isLiked={comments.liked} postId = {comments._id} />


             <button
             onClick={()=>{
              setCommentClicked(prev => !prev)
              setComments(post)

             }}
             className='icon comment'> <svg aria-label="Comment" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="white" strokeLinejoin="round" strokeWidth="2"></path></svg> <span></span>0</button>


             <button className='icon share'><svg aria-label="Share" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share</title><path d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z" fill="none" stroke="white" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.488" x2="15.515" y1="12.208" y2="7.641"></line></svg> <span></span></button>
         


          </div>


          <form className="comment-input">
            <input
              value={commentInput}
              onChange={(e) => {
                setCommentInput(e.target.value);
              }}
              type="text"
              placeholder="comment"
            />
            <button>submit</button>
          </form>
        </div>

      </div>

    </section>
  );
};

export default CommentWindow;
