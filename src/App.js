// src/App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom'; 
import TopAppBar from './component/TopAppbar';
import AppBar from './component/Appbar';
import Home from './pages/home/Home';
import Footer from './component/Footer'


function App() {
  return (
   
  <>
     <TopAppBar />
     <AppBar />
     <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  <Footer/>
  </>
   
  );
}

export default App;
