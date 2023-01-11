import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/layout/Footer';
import Map from './components/Map';
import Contact from './components/pages/Contact';
import Detail from './components/pages/Detail';
import Experience from './components/pages/Experience';
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio';
import Skills from './components/pages/Skills';

const MyRoutes = () => {
  return (
    <>
      <Router>
        <Home />
        <Portfolio />
        <Skills />
        <Experience />
        <Detail />
        <Contact />
        <Map />
        <Footer />
        <Routes>
          {/* <Route path='./home' element={<Home/>} /> */}
          <Route path="./contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default MyRoutes