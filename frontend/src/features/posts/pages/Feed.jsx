import React, { useContext, useEffect } from 'react'
import Post from '../components/Post'
import "../styles/feed.scss"
import Navbar from '../../../components/Navbar/Navbar'
import PostCreateWindow from '../components/PostCreateWindow'
import { PostContext } from '../context/PostContext'
import usePost from '../hooks/usePost'
import {Atom} from "react-loading-indicators"
import CommentWindow from '../components/CommentWindow'


const Feed = () => {


  
const {handleGetFeed , posts,loading } = usePost()
const {addClicked , commentClicked} = useContext(PostContext)

  useEffect(()=>{

    handleGetFeed()
   
  },[])

  useEffect(()=>{

    document.body.classList.toggle("window-open", addClicked)

  }, [addClicked])




  

  return (

   
    
   loading ?  <div className='loading-compo'>  <Atom color="#0b1e0b" size="large" text="" textColor="#837171" /></div>   : <section className = {`feed ${addClicked ? "no-scroll" : "bg-black"}`}>

     
      
      {
     posts.length == 0 ? <h1>Create post</h1> : 
        <Post/>
      }

      {
        addClicked&& ( <PostCreateWindow    />)
      }
      {
        `commentClicked && (<CommentWindow/>)`
      }

    
       
         <Navbar/>
    </section>
     
     

  )
}

export default Feed