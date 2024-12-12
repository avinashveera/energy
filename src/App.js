// src/App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom'; 
import AppBar from './component/Appbar';
import Home from './pages/home/Home';
import Footer from './component/Footer'
import Service from './pages/service/Service'
import About from './pages/about/About';
import Getquote from './pages/service/Getquote'
import Gallery from './pages/gallery/Gallary'
import Contact from './pages/contact/Contact'


function App() {
  return (
   
  <>
    
     <AppBar />
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/service" element={<Service />} />
    <Route path="/getquote" element={<Getquote />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer/>
  </>
   
  );
}

export default App;
