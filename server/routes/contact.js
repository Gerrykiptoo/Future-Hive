const express = require('express');
const router = express.Router();
const { query } = require('../config/db');

// POST contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }
    
    // Save to database
    const result = await query(
      'INSERT INTO contact_submissions (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, subject, message]
    );
    
    res.status(201).json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.',
      data: result.rows[0]
    });
    
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error sending message. Please try again later.' 
    });
  }
});

// GET all contact submissions (for admin - add authentication later)
router.get('/', async (req, res) => {
  try {
    const result = await query('SELECT * FROM contact_submissions ORDER BY created_at DESC');
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({ success: false, message: 'Error fetching messages' });
  }
});

module.exports = router;