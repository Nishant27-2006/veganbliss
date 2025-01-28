import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    <div>
      <Hero />
      {/* About Us Section */}
      <section className="about-us section">
        <div className="container">
          <h2>About Vegan Bliss</h2>
          <p>
            At Vegan Bliss, we are passionate about delivering gourmet vegan and vegetarian meals crafted with locally sourced ingredients.
            Our commitment to sustainability and excellence sets us apart.
          </p>
          <img src="farm.png" alt="Farm-to-Table" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-slider">
            <blockquote>
              "Vegan Bliss is a revelation! The dishes are flavorful, fresh, and beautifully presented."
              <cite>- Alex R.</cite>
            </blockquote>
            <blockquote>
              "A must-visit for any vegan food lover. The ambiance and food quality are unmatched."
              <cite>- Taylor W.</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="call-to-action section">
        <div className="container">
          <h2>Ready to Experience the Best?</h2>
          <p>Reserve your table or order online for an unforgettable dining experience.</p>
          <a href="/contact" className="btn">Contact Us</a>
        </div>
      </section>
    </div>
  );
}

export default Home;
