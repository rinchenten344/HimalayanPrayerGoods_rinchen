import React from "react";
import { Link } from "react-router-dom";
import "../mystyles/Home.css";
import buddha from "../images/buddha.jpeg";
import guru from "../images/guru.jpeg";
import flags from "../images/flags.jpeg";
import tara from "../images/tara.jpeg";

const Home = () => {
  const images = [buddha, guru, flags, tara];
  return (
    <div>
      <div className="wave-container">
        <h1 className="wave-text"></h1>
        <div className="home-content">
          <div className="product-highlights">
            <h2 className="fpp">FEATURE PRODUCTS</h2>
            {images.map((imageSrc, index) => (
              <img
                key={index}
                src={imageSrc}
                alt={`Feature Product ${index + 1}`}
                style={{ width: "300px", height: "400px", margin: "20px" }}
              />
            ))}
          </div>
          <div className="about-us">
            <Link to="/about">
              <button className="learn-more">Learn More About Us</button>
            </Link>
          </div>
          <div className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-slider">
              <div className="testimonial-item">
                <p>
                  "Ever since I started using Himalayan singing bowls, my
                  meditation practice has reached a whole new level. The calming
                  sound brings instant peace to my mind, and I feel a deeper
                  sense of connection to myself and the universe."
                </p>
                <span className="testimonial-author">- Sarah L.</span>
              </div>
              <div className="testimonial-item">
                <p>
                  "My prayer mala from your shop is an absolute treasure. The
                  beads are so smooth and perfectly sized, and the craftsmanship
                  is truly exquisite. I wear it every day, and it's a constant
                  reminder of my faith and the beauty of Himalayan tradition."
                </p>
                <span className="testimonial-author">- David M.</span>
              </div>
              <div className="testimonial-item">
                <p>
                  "I was hesitant to order online, but the team at your shop was
                  so helpful and attentive. They patiently answered all my
                  questions and even recommended a perfect mala based on my
                  needs. The package arrived beautifully wrapped, and it felt
                  like opening a special gift."
                </p>
                <span className="testimonial-author">- Maria K.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
