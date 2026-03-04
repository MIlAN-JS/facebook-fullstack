import React, { useContext, useEffect } from 'react'
import Post from '../components/post'
import "../styles/feed.scss"
import Navbar from '../../../components/Navbar/Navbar'
import PostCreateWindow from '../components/PostCreateWindow'
import { PostContext } from '../context/PostContext'
import usePost from '../hooks/usePost'



const Feed = () => {


  
const {handleGetFeed , posts} = usePost()
  useEffect(()=>{

    handleGetFeed()
   
  },[])

  const {addClicked} = useContext(PostContext)

  return (
    <section className='feed'>

      {
        addClicked&& ( <PostCreateWindow    />)
      }

      
      {
     posts.length == 0 ? <h1>Create post</h1> : 
          <Post
         
         /> 
      }
       
         <Navbar/>
    </section>
  )
}

export default Feed