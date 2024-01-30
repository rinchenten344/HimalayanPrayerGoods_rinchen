import React from "react";
import "../mystyles/About.css";
const About = () => {
  return (
    <div className="about-container">
      <header className="header-section">
        <h1>Welcome to HIMALAYAN PRAYER GOODS</h1>
        <span>Your Gateway to Himalayan Buddhism Ritual Goods</span>
      </header>

      <section className="introduction-section">
        <p>
          At Himalayan prayer goods, we invite you on a spiritual journey...
        </p>
      </section>

      <section className="our-story-section">
        <h2>Our Story:</h2>
        <p>Founded with a deep reverence for Himalayan Buddhism...</p>
      </section>

      <section className="unique-selling-points">
        <div className="usp-item">
          <h3>Authenticity:</h3>
          <p>We pride ourselves on sourcing our products directly...</p>
        </div>
        <div className="usp-item">
          <h3>Diverse Range:</h3>
          <p>Explore our extensive collection of ritual goods...</p>
        </div>
        <div className="usp-item">
          <h3>Community Commitment:</h3>
          <p>Himalayan prayer goods is more than just an online store...</p>
        </div>
      </section>

      <section className="mission-statement">
        <h2>Our Mission:</h2>
        <p>Our mission at Himalayan prayer goods is to be a bridge...</p>
      </section>

      <section className="contact-us-section">
        <h2>Contact Us:</h2>
        <p>Have questions or need assistance? Our dedicated team...</p>
      </section>

      <footer className="footer-section">
        {/* Add Footer content here */}
      </footer>
    </div>
  );
};

export default About;
