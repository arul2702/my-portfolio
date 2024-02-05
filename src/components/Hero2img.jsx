import './Hero2img.css'
import React from 'react'


const Hero2img = ({heading , text}) => {
  return (
    <div className="hero-img">
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Hero2img