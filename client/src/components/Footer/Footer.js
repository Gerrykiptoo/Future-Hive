import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Future Hive</h3>
            <p>Empowering communities for a brighter future through education, empowerment, and sustainable development.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="YouTube">YT</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-section">
            <h4>Programs</h4>
            <button type="button" className="footer-link">Youth Education</button>
            <button type="button" className="footer-link">Economic Empowerment</button>
            <button type="button" className="footer-link">Community Wellness</button>
            <button type="button" className="footer-link">Environmental Sustainability</button>
          </div>

          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter to get updates on our programs and events.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" className="form-control" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 Future Hive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
