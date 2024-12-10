import React from 'react'
import Hero from '../../component/home/Hero'
import Strepper from '../../component/home/Strepper'
import City from '../../component/City'
import Service from  './Service'
import About from '../../component/home/About'

const Home = () => {
  return (
    <>
    
    <Hero />
    <About/>
    <Service/>
    <Strepper/>
    <City />

    </>
  )
}

export default Home