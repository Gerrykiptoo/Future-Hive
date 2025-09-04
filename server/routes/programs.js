const express = require('express');
const router = express.Router();
const { query } = require('../config/db');

// GET all programs
router.get('/', async (req, res) => {
  try {
    const result = await query('SELECT * FROM programs ORDER BY created_at DESC');
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching programs:', error);
    res.status(500).json({ success: false, message: 'Error fetching programs' });
  }
});

// GET a specific program
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await query('SELECT * FROM programs WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Program not found' });
    }
    
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error fetching program:', error);
    res.status(500).json({ success: false, message: 'Error fetching program' });
  }
});

// POST a new program (protected - add authentication later)
router.post('/', async (req, res) => {
  try {
    const { title, description, image_url } = req.body;
    
    // Basic validation
    if (!title || !description) {
      return res.status(400).json({ success: false, message: 'Title and description are required' });
    }
    
    const result = await query(
      'INSERT INTO programs (title, description, image_url) VALUES ($1, $2, $3) RETURNING *',
      [title, description, image_url]
    );
    
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error creating program:', error);
    res.status(500).json({ success: false, message: 'Error creating program' });
  }
});

// UPDATE a program
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image_url } = req.body;
    
    const result = await query(
      'UPDATE programs SET title = $1, description = $2, image_url = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
      [title, description, image_url, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Program not found' });
    }
    
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error updating program:', error);
    res.status(500).json({ success: false, message: 'Error updating program' });
  }
});

// DELETE a program
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await query('DELETE FROM programs WHERE id = $1 RETURNING *', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Program not found' });
    }
    
    res.json({ success: true, message: 'Program deleted successfully' });
  } catch (error) {
    console.error('Error deleting program:', error);
    res.status(500).json({ success: false, message: 'Error deleting program' });
  }
});

module.exports = router;