import React from 'react'
import {Outlet} from "react-router-dom"
import Footer from './components/Footer/Footer'
import "./index.scss"

const App = () => {
  return (
    <main className=''>
        <Outlet/>
        <Footer/>

    </main>
  )
}

export default App