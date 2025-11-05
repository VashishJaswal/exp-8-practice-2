const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Import routes
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

// Public route
app.get('/', (req, res) => {
    res.send('Welcome! This is a public route.');
});

// Use routes
app.use('/', authRoutes);
app.use('/', protectedRoutes);

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
