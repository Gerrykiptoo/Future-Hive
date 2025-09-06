import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Empowering Communities for a Brighter Future</h1>
          <p>
            Future Hive is dedicated to creating sustainable change through education, 
            empowerment, and community development initiatives.
          </p>
          <div className="hero-actions">
            <Link to="/programs" className="btn btn-primary">Our Programs</Link>
            <Link to="/contact" className="btn btn-secondary">Get Involved</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
