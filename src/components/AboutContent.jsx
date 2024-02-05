import { Link } from 'react-router-dom'
import './AboutContentStyles.css'
import React from 'react'

import image from "../assests/images.jpeg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Hi, I'm Arulkarthi P , a passionate front-end developer dedicated to crafting seamless and visually 
                appealing web experiences. With expertise in HTML, CSS, and JavaScript, I bring designs to life, 
                ensuring user-friendly interfaces.  </p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={image} className='img' alt="" />
                </div>
                <div className="img-stack bottom">
                    <img src={image} className='img' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent