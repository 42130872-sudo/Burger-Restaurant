import React  from 'react'


import './App.css';
import NavBar from './components/NavBar';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AddToCart from './pages/AddToCart';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';   

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/AddToCart" element={<AddToCart />} />
           <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
        </Routes>
         <Footer />
      </Router>
    </div>
  );
}
export default App;


  
  