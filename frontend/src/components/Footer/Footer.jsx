import React from 'react'
import { Link } from 'react-router'
import "./footer.scss"


const Footer = () => {
  return (
    <footer>

        <div className="footer-items">

            <Link to="/">Meta</Link>
            <Link to="/">About</Link>
            <Link to="/">Jobs</Link>
            <Link to="/">Help</Link>
            <Link to="/">API</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
            <Link to="/">Locations</Link>
            <Link to="/">Instagram Lite</Link>
            <Link to="/">Meta Ai</Link>
            <Link to="/">Threads</Link>
            <Link to="/">Contact uploading and non-users</Link>
            <Link to="/">Meta Verified</Link>
           

        </div>  
        <div className="footer-data">
            <Link to="/">English (UK) </Link>
            <Link to="/">© 2026 Instagram from Meta</Link>
        </div>

    </footer>
  )
}

export default Footer