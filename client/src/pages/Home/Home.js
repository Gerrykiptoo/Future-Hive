import React from 'react';
import Hero from '../../components/Hero/Hero';
import ProgramsSection from '../../components/ProgramsSection/ProgramsSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AboutSection />
      <ProgramsSection />
    </div>
  );
};

export default Home;
