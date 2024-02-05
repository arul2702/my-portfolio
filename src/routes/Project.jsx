import React from 'react'

import Navbar from '../components/Navbar'
import FooterStyles from '../components/FooterStyles'
import Hero2img from '../components/Hero2img'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Hero2img heading="PROJECTS." text="My Recent Works"/>
      <Work/>
      <FooterStyles/>
    </div>
  )
}

export default Project