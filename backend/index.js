const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000; // Choose an appropriate port number

// Set up your MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'portfolio',
  password: 'abdurrehman4948',
  database: 'my_portfolio',
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define your API routes
app.get('/api/data', (req, res) => {
  // Perform database queries or other backend logic here
  // Return the response to the frontend
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
