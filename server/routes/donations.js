const express = require('express');
const router = express.Router();

// POST a new donation
router.post('/', (req, res) => {
  res.json({ message: 'Donation processing - to be implemented' });
});

// GET all donations (for admin)
router.get('/', (req, res) => {
  res.json({ message: 'Get all donations - to be implemented' });
});

module.exports = router;

