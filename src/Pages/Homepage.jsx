import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Testimonials from '../Components/Testimonials'
import Gallery from '../Components/Gallery'
import Features from '../Components/Features'
import Locations from '../Components/Locations'
import Footer from '../Components/Footer'
import Sehaj from '../Components/Sehaj'


const Homepage = () => {
  return (
    <>
        {/* Navbar goes in Hero */}
        <Hero /> 
        <About />
        <Sehaj />
        <Features />
        <Testimonials />
        <Gallery />
        <Locations />
        <Footer />
    </>
  )
}

export default Homepage