import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonial from './components/Testimonial';
import About from './components/About'
import Footer from './components/Footer';
import { BrowserRouter as Router ,Routes, Route,Link } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import BookingForm from './components/BookingForm';
import { useState } from 'react';
function App() {

  







  return (
   <>
   
    <div className="App">
    <Navbar />
    <Routes>
    <Route exact path="/" element={<Home/> } />
    <Route exact path="/about" element={<About/> } />
    <Route exact path="/reservations" element={<BookingPage/>}/>
    </Routes>
      
  

  <Footer/>
 
    
    </div>
   
    </>
   
  );
}

export default App;
