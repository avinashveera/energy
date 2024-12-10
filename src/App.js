// src/App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom'; 
import TopAppBar from './component/TopAppbar';
import AppBar from './component/Appbar';
import Home from './pages/home/Home';
import Footer from './component/Footer'
import Service from './pages/service/Service'
import About from './pages/about/About';
import Getquote from './pages/service/Getquote'


function App() {
  return (
   
  <>
     <TopAppBar />
     <AppBar />
     <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/service" element={<Service />} />
    <Route path="/getquote" element={<Getquote />} />
  </Routes>
  <Footer/>
  </>
   
  );
}

export default App;
