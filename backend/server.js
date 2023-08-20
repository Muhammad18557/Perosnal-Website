const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const multer = require('multer');
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


const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    callback(null, file.fieldname + '-' + uniqueSuffix);
  },
});

const upload = multer({ storage });

app.use('/uploads', express.static('uploads')); // to 

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

function executeQuery(sql, res) {
  pool.query(sql, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
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
  const sql = 'SELECT * FROM projects ';
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

// Handle POST request to /api/admin/projects
// app.post('/api/admin/projects', upload.single('image'), (req, res) => {
//   const { title, description, stacks, year, rank, code, link } = req.body;
//   console.log(req.file);
//   console.log(req.body);
//   console.log("this endpoint is hit");
//   // Check if a file was uploaded
//   if (!req.file) {
//     console.log("There is no file accompanied to the request.")
//     return res.status(400).json({ error: 'No file uploaded.' });
//   }

//   const image = req.file.path;

//   // Include the image path in your database query
//   const sql = `INSERT INTO projects (title, description, stacks, year, rank, code, link, image) 
//                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
//   const values = [title, description, stacks, year, rank, code, link, image];

//   pool.query(sql, values, (error, results) => {
//     if (error) {
//       console.log(error)
//       return res.status(500).json({ error: 'An error occurred while adding the row.' });
//     } else {
//       return res.status(200).json({ message: 'Row added successfully.' });
//     }
//   });
// });

// Handle POST request to /api/admin/projects
app.post('/api/admin/projects', upload.single('image'), async (req, res) => {
  console.log("endpoint was hit")
  const { title, description, stacks, year, rank, code, link } = req.body;

  // Check if a file was uploaded
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  const image = req.file.path;

  try {
    // Begin a transaction
    await pool.query('BEGIN');

    // Update ranks of existing projects with rank greater than or equal to the new rank
    const updateRankQuery = 'UPDATE projects SET rank = rank + 1 WHERE rank >= $1';
    await pool.query(updateRankQuery, [rank]);

    // Insert the new project with the given rank
    const insertQuery = `INSERT INTO projects (title, description, stacks, year, rank, code, link, image) 
                         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    const insertValues = [title, description, stacks, year, rank, code, link, image];
    await pool.query(insertQuery, insertValues);

    // Commit the transaction
    await pool.query('COMMIT');

    return res.status(200).json({ message: 'Row added successfully.' });
  } catch (error) {
    // Rollback the transaction in case of an error
    await pool.query('ROLLBACK');
    console.error(error);
    return res.status(500).json({ error: 'An error occurred while adding the row.' });
  }
});


// app.post('/api/admin/images', upload.single('image'), (req, res) => {

//   // Check if a file was uploaded
//   if (!req.file) {
//     res.status(400).json({ error: 'No file uploaded.' });
//     console.log('No file uploaded.');
//     return;
//   }

//   const image = req.file.path;

//   // Include the image path in your database query
//   const sql = `INSERT INTO images (image) 
//                VALUES ($1)`;
//   const values = [image];

//   pool.query(sql, values, (error, results) => {
//     if (error) {
//       res.status(500).json({ error: 'An error occurred while adding the row.' });
//     } else {
//       res.status(200).json({ message: 'Row added successfully.' });
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
