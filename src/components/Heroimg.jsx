import React from 'react'
import introimg from "../assests/flat-lay-workstation-with-copy-space-laptop_23-2148430879.avif"
import { Link } from 'react-router-dom'
import './Heroimg.css'

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className='intro-img' src={introimg} alt="t" />
        </div>
        <div className="content">
            <p>HI, I'M ARULKARTHI P.</p>
            <h1>React Developer & Freelancer</h1>
            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg