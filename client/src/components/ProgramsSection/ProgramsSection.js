import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { programsAPI } from '../../services/api';
import './ProgramsSection.css';

const ProgramsSection = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await programsAPI.getAll();
        setPrograms(response.data.data.slice(0, 3)); // Show only 3 programs on home page
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch programs');
        setLoading(false);
        console.error('Error fetching programs:', err);
      }
    };

    fetchPrograms();
  }, []);

  if (loading) return <div className="loading">Loading programs...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <section className="programs-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Programs</h2>
          <p>We offer a variety of programs designed to address the most pressing needs in our community.</p>
        </div>

        <div className="programs-grid">
          {programs.map(program => (
            <div key={program.id} className="program-card">
              <div className="program-image">
                <img src={program.image_url || '/default-program.jpg'} alt={program.title} />
              </div>
              <div className="program-content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link to={`/programs#${program.id}`} className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="section-actions">
          <Link to="/programs" className="btn btn-primary">
            View All Programs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

