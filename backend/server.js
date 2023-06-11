const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });
  

app.use(cors());

function executeQuery(sql, res) {
  pool.query(sql, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } 
    else {
      res.json(results.rows);
    }
  });
}

app.get('/', (req, res) => {
    res.send('Welcome to the backend server.');
  });

app.get('/api/education', (req, res) => {
  const sql = 'SELECT * FROM education';
  executeQuery(sql, res);
});

app.get('/api/work', (req, res) => {
  const sql = 'SELECT * FROM work';
  executeQuery(sql, res);
});

app.get('/api/projects', (req, res) => {
  const sql = 'SELECT * FROM projects';
  executeQuery(sql, res);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
