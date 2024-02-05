import React from 'react'

import Navbar from '../components/Navbar'
import FooterStyles from '../components/FooterStyles'
import Hero2img from '../components/Hero2img'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Hero2img heading="CONTACT." text="Lets have a chat"/>
      <Form/>
      <FooterStyles/>
    </div>
  )
}

export default Contact