import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <header className="about-header">
        <h2>About Us</h2>
        <p>
          Welcome to Vegan Bliss! We are a team of passionate individuals from India, the most vegetarian-friendly country on the planet. 
          Our mission is to inspire healthier lifestyles and promote sustainability through delicious vegan cuisine to our customers. As vegetarians, we plan to enrich our customers with exquisite food that will excite them in eating vegan food.
        </p>
      </header>

      <div className="team-section">
        <h3>Meet Our Team</h3>
        <div className="team-grid">
          <div className="team-member">
            <img src="nishant.png" alt="Nishant Gadde" />
            <h4>Nishant Gadde</h4>
            <p>Head Chef</p>
            <p>Nishant is the creative force behind our unique vegan dishes, blending traditional Indian flavors with modern techniques.</p>
          </div>
          <div className="team-member">
            <img src="suchay.png" alt="Suchay" />
            <h4>Suchay Kommisetty</h4>
            <p>Chef</p>
            <p>Suchay is a chef at VeganBliss with the mind of sustainability. </p>
          </div>
          <div className="team-member">
            <img src="shreyas.png" alt="Shreyas Bharath" />
            <h4>Shreyas Bharath</h4>
            <p>Chef</p>
            <p>Shreyas brings years of culinary expertise and a passion for crafting healthy, plant-based meals that satisfy the soul.</p>
          </div>
          <div className="team-member">
            <img src="niam.png" alt="Niam Jasani" />
            <h4>Niam Jasani</h4>
            <p>Chef</p>
            <p>Niam specializes in creating visually stunning dishes that highlight the vibrant colors and flavors of fresh vegetables.</p>
          </div>
          <div className="team-member">
            <img src="ivan.png" alt="Ivan Jose" />
            <h4>Ivan Jose</h4>
            <p>Waiter/Assistant Chef</p>
            <p>Ivan ensures every dish is served with care, combining his love for cooking with a dedication to excellent service.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;
