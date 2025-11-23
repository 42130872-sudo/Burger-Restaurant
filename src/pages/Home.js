import React from 'react'
import burgerIcon from "../assets/burgerIcon.avif"; 
import deliveryIcon from "../assets/deliveryIcon.jpg";
import paymentIcon from "../assets/paymentIcon.avif";
import '../styles/home.css'
const Home = () => {
  return (
    <div>
        <section class="hero">
          <div class="hero-content">
            <h1>Welcome to Spicy Burger King</h1>
            <p>Your Best Place of Delicious and Tasty Burgers.</p>
            <a href="#about" class="btn">Learn More</a>
          </div>
        </section>

          <section id="departments" class="departments">
    <h2>Our Features</h2>
    <div class="dept-cards">
      <div class="card">
          <img src={burgerIcon} alt="burgerIcon" className="feature-icon" /> 
        <h3>Our Burgers</h3>
        <p>To find our delicious burgers of American , Italian , and public burgers.</p>
      </div>
      <div class="card">
          <img src={deliveryIcon} alt="deliveryIcon" className="feature-icon" />
        
        <h3>Free Delivery</h3>
        <p>The fastest Delivery Service is ready to assist you at any time 24/7.</p>
      </div>
      <div class="card">
         <img src={paymentIcon} alt="paymentIcon" className="feature-icon" /> 
        <h3>Easy Payment</h3>
        <p>Help you to pay in the easiest way through OMT pay , Banks(VISA cards , Master cards) ,and directly through the delivery man. </p>
      </div>
    </div>
  </section>

    </div>

    
  )
}

export default Home