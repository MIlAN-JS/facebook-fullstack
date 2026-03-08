import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';

const Public = ({children}) => {

    const {user , loading} =  useAuth()

    console.log(user)

    if(loading){
       return <h1>Loading...</h1>
    }

    
    if(user){
        return <Navigate to={"/feed"} />
    }


  return (
    <>

{children}


    </>
  )
}

export default Public