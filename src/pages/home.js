import React from 'react'
import Hero from '../components/hero/hero'
import About from '../components/about/about'
import Contact from '../components/contact/contact'
import EveCarousel from '../components/eveCarousel/eveCarousel'

const home = () => {
  return (
    <>
        <Hero/>
        <About/>
        <EveCarousel/>
        <Contact/>
    </>
  )
}

export default home