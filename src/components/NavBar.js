import React from 'react'
import  '../styles/NavBar.css'
import logo from '../assets/Blogo.png'

import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
     
       
        <img src={logo} alt="Blogo.png" className="logo"/>

         <Link to="/Home">Home</Link>

      <Link to="/Menu">Menu</Link>
      <Link to="/AddToCart">AddToCart</Link>

      <Link to="/AboutUs">About us</Link>
      <Link to="/ContactUs">ContactUs</Link>

        
         
        </div>
      
      
        
    
        
          
        
      
    
  )
}

export default NavBar