import React from 'react';
import '../styles/AboutUs.css';


import restaurantView from "../assets/restaurant_view.jpg"; 
import chefSarah from "../assets/chef_sarah.png";
import chefRaiyan from "../assets/chef_raiyan.jpg";
import chefJohn from "../assets/chef_john.jpeg";
import chefJermy from "../assets/chef_jermy.jpg";
import newsletterGraphic from "../assets/newsletter_graphic.jpg"; 


const featureItems = [
    
    { icon: "✨", title: "Fresh Burgers", description: "The Best Fresh Burgers of Chicken and Beef from all around the world." },
    { icon: "👨‍🍳", title: "Skilled Chefs", description: "Our Talented Chefs with more than 10 years of experience in Burgers." },
    { icon: "🍸", title: "Best Bar", description: "Enjoy our Bar Drinks the best in the City." },
    { icon: "🥩", title: "Carnivore Cuisine", description: "The best inside cuisine that make the delicious fresh Beef and Chicken foods in Burgers." },
];

const teamMembers = [
    { name: "Sarah Albert", role: "Senior Chef", image: chefSarah },
    { name: "Raiyan Kovin", role: "Senior Chef", image: chefRaiyan },
    { name: "John Doe", role: "Senior Chef", image: chefJohn },
    { name: "Jermy Carline", role: "Senior Chef", image: chefJermy },
];


const FeatureCard = ({ icon, title, description }) => (
    <div className="feature-card">
     
        <div className="icon-wrapper text-3xl">
            {icon}
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
);

const ChefCard = ({ name, role, image }) => (
    <div className="chef-card">
        <img src={image} alt={name} className="chef-image" />
        <div className="chef-info">
            <h5>{name}</h5>
            <p className="chef-role">{role}</p>
         
            <div className="social-links">
                ✉️
            </div>
        </div>
    </div>
);

const AboutUs = () => {
    return (
        <div className="about-us-page">
            
         
            <section className="section-container restaurant-intro">
                <h2 className="intro-title">We Invite you to <span className="highlight">Visit Our Restaurant</span></h2>
                <p className="intro-description">
                   Here is your Best place to enjoy the best delicious Burgers from all around the world.We wish you enjoy our Tasty Burgers with the best view on the sunset with the Ocean view.
                </p>
                <div className="video-placeholder">
                    <img src={restaurantView} alt="Restaurant Interior View" />
                   
                </div>
            </section>

           
            <section className="section-container what-we-do">
                <h2 className="section-title">What We Do</h2>
                <div className="features-grid">
                    {featureItems.map((item, index) => (
                        <FeatureCard key={index} icon={item.icon} title={item.title} description={item.description} />
                    ))}
                </div>
            </section>

         
            <section className="master-chef-section">
                <div className="chef-background-wrapper section-container">
                    <h2 className="section-title">Master Chef</h2>
                    <div className="chef-slider">
                        <div className="arrow left-arrow">←</div>
                        {teamMembers.map((member, index) => (
                            <ChefCard key={index} {...member} />
                        ))}
                        <div className="arrow right-arrow">→</div>
                    </div>
                </div>
            </section>

         
            <section className="section-container newsletter-section">
                <div className="newsletter-content">
                    <img src={newsletterGraphic} alt="Newsletter Illustration" className="newsletter-image" />
                    <div className="newsletter-form-container">
                        <h3>Newsletter</h3>
                        <p>We hope this newsletter finds you well. We are excited to keep you updated on all the new culinary delights that we think you’ll love. Our culinary team has been...</p>
                        <div className="input-group">
                            <input type="email" placeholder="Enter Your Email" />
                            <button className="subscribe-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;