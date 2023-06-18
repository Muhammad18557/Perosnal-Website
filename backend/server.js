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
app.use(express.json());


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


app.post('/api/admin/education', (req, res) => {
  const { school_name, degree, activities, skills, duration, country, timetaken } = req.body;
  const sql = `INSERT INTO education (school_name, degree, activities, skills, duration, country, timetaken) 
               VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  const values = [school_name, degree, activities, skills, duration, country, timetaken];

  pool.query(sql, values, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'An error occurred while adding the row.' });
    } else {
      res.status(200).json({ message: 'Row added successfully.' });
    }
  });
});

app.post('/api/admin/work', (req, res) => {
  const { company_name, role, duration, description, skills } = req.body;
  const sql = `INSERT INTO work (company_name, role, duration, description, skills) 
               VALUES ($1, $2, $3, $4, $5)`;
  const values = [company_name, role, duration, description, skills];

  pool.query(sql, values, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'An error occurred while adding the row.' });
    } else {
      res.status(200).json({ message: 'Row added successfully.' });
    }
  });
});

app.post('/api/admin/projects', (req, res) => {
  const { title, description, stacks, year, code, link, image } = req.body;
  const sql = `INSERT INTO projects (title, description, stacks, year, code, link, image) 
               VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  const values = [title, description, stacks, year, code, link, image];

  pool.query(sql, values, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'An error occurred while adding the row.' });
    } else {
      res.status(200).json({ message: 'Row added successfully.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});