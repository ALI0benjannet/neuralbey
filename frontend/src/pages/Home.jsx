import React from 'react'
import Hero from '../components/Hero'
import Apropos from '../components/Apropos'
import Services from '../components/Services'
import Footer from '../components/Footer'
import SecStages from '../components/SecStages'

function Home() {
  return (
    <div>
      <Hero />
      <Apropos />
      <Services />
      <SecStages />
      <Footer />
      
    </div>
  )
}

export default Home