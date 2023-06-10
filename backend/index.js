const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000; // Choose an appropriate port number

// Set up your MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
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
app.get('/api/education', (req, res) => {
  const sql = 'SELECT * FROM education'; // Replace with your actual table name

  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Return the fetched education data as the response
      res.json(results);
    }
  });
});


app.get('/api/work', (req, res) => {
  const sql = 'SELECT * FROM work'; 

  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Return the fetched education data as the response
      res.json(results);
    }
  });
});

app.get('/api/projects', (req, res) => {
  const sql = 'SELECT * FROM projects'; 
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Return the fetched education data as the response
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
