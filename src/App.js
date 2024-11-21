import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';


export default function App() {
   return (
    <>
     <Router>
     <div className='nav'>
      <div className='logo'>Berylsamba.</div>
          <ul className="menu">
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/contact">Contact</Link></li> 
          </ul>
     </div>
     <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
     </Router>

    </>
  )
}