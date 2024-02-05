import React from 'react'

import Navbar from '../components/Navbar'
import FooterStyles from '../components/FooterStyles'
import Hero2img from '../components/Hero2img'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <Hero2img heading="ABOUT." text="I'm front end devper" />
      <AboutContent/>
      <FooterStyles/>
    </div>
  )
}

export default About