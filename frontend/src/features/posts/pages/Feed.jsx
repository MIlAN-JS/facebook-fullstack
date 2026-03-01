import React, { useContext } from 'react'
import Post from '../components/post'
import "../styles/feed.scss"
import Navbar from '../../../components/Navbar/Navbar'
import PostCreateWindow from '../components/PostCreateWindow'
import { PostContext } from '../context/PostContext'
const Feed = () => {

  const {addClicked} = useContext(PostContext)
  return (
    <section className='feed'>

      {
        addClicked&& ( <PostCreateWindow    />)
      }

      
       
          <Post
         
         />
         <Navbar/>
    </section>
  )
}

export default Feed