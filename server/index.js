const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/programs', require('./routes/programs'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/donations', require('./routes/donations'));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Future Hive API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});