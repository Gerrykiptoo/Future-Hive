import React, { useState, useEffect } from 'react';
import { programsAPI } from '../../services/api';
import './Programs.css';

const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await programsAPI.getAll();
        setPrograms(response.data.data);
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
    <div className="programs-page">
      <div className="container">
        <div className="page-header">
          <h1>Our Programs</h1>
          <p>Discover the various initiatives we offer to support our community.</p>
        </div>

        <div className="programs-list">
          {programs.map(program => (
            <div key={program.id} className="program-item">
              <div className="program-image">
                <img src={program.image_url || '/default-program.jpg'} alt={program.title} />
              </div>
              <div className="program-details">
                <h2>{program.title}</h2>
                <p>{program.description}</p>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
