import React, { useContext, useEffect } from 'react'
import Post from '../components/Post'
import "../styles/feed.scss"
import Navbar from '../../../components/Navbar/Navbar'
import PostCreateWindow from '../components/PostCreateWindow'
import { PostContext } from '../context/PostContext'
import usePost from '../hooks/usePost'



const Feed = () => {


  
const {handleGetFeed , posts } = usePost()
const {addClicked} = useContext(PostContext)

  useEffect(()=>{

    handleGetFeed()
   
  },[])

  useEffect(()=>{

    document.body.classList.toggle("window-open", addClicked)

  }, [addClicked])




  

  return (

   
      <section className = {`feed ${addClicked ? "no-scroll" : "bg-black"}`}>

     
      
      {
     posts.length == 0 ? <h1>Create post</h1> : 
        <Post/>
      }

      {
        addClicked&& ( <PostCreateWindow    />)
      }


       
         <Navbar/>
    </section>
     
     

  )
}

export default Feed