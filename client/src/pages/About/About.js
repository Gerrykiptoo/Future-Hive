import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1>About Future Hive</h1>
          <p>Learn about our mission, vision, and the values that drive our work.</p>
        </div>
        
        <div className="about-content">
          <div className="about-story">
            <h2>Our Story</h2>
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
          </div>
          
          <div className="mission-vision">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>To empower communities through education, economic opportunities, and sustainable development initiatives.</p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>A world where every community has the resources and support to thrive and create their own future.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
