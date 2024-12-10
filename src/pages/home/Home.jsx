import React from 'react'
import Hero from '../../component/home/Hero'
import Strepper from '../../component/home/Strepper'
import City from '../../component/City'
import Service from  './Service'
import About from '../../component/home/About'
import Slider from '../../component/home/Slider'

const Home = () => {
  return (
    <>
    
     <Slider />
    <About/>
    <Service/>
    <Strepper/>
    <Hero />
    <City />

    </>
  )
}

export default Home