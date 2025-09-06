import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Future Hive</h2>
            <p>
              Founded in 2015, Future Hive began as a small community initiative aimed at 
              supporting youth development in underserved communities. Today, we have grown 
              into a comprehensive community-based organization serving thousands of individuals annually.
            </p>
            <p>
              Our approach combines direct service programs with advocacy and community 
              organizing to create sustainable change. We believe in the power of communities 
              to drive their own development and work to provide the resources and support 
              needed to make this possible.
            </p>
            <p>
              Through our various programs, we focus on education, economic empowerment, 
              health and wellness, and environmental sustainability.
            </p>
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1582211582172-9d5df73e4c0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Community gathering" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
