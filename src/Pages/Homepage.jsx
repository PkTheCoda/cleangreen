import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'


const Homepage = () => {
  return (
    <>
        {/* Navbar goes in Hero */}
        <Hero /> 
        <About />
    </>
  )
}

export default Homepage