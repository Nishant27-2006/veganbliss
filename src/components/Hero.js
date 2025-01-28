import React from 'react';
import './Hero.css';
import vegammain from './veganmain.mp4'; // Ensure the video file is in the correct folder

function Hero() {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay loop muted>
        <source src={vegammain} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h2>Fresh, Sustainable, Delicious</h2>
        <p>Experience the best vegan and vegetarian cuisine in town!</p>
        <a href="#menu" className="btn">Explore Our Menu</a>
      </div>
    </div>
  );
}

export default Hero;
