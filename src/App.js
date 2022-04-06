import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componants/Footer';
import Navbar from './componants/Navbar';
import Home from './pages/Home.js';
import Work from './pages/work.js';
import Style from './pages/style.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';

function App () {
  return (
    <>
    <Router>
<Navbar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/work' element={<Work />} />
  <Route path='/aboutme' element={<About />} />
  <Route path='/style' element={<Style />} />
  <Route path='/contact' element={<Contact />} />
</Routes>
<Footer />

</Router>
   
   </>
  );
}

export default App;
