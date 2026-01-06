require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://brandwork-technologies.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(bodyParser.json());


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('Connected to Supabase PostgreSQL', result.rows);
  });
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS drivers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    dob TEXT,
    email TEXT,
    mobile TEXT,
    license_no TEXT NOT NULL,
    expiry_date TEXT,
    status TEXT DEFAULT 'active'
  );
`;

pool.query(createTableQuery, (err, res) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Drivers table ready.');
  }
});

app.get('/api/drivers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM drivers ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/drivers', async (req, res) => {
  const { name, dob, email, mobile, licenseNo, expiryDate } = req.body;
  
  if (!name || !licenseNo) {
    return res.status(400).json({ error: 'Name and License Number are required.' });
  }

  const query = `
    INSERT INTO drivers (name, dob, email, mobile, license_no, expiry_date)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [name, dob, email, mobile, licenseNo, expiryDate];

  try {
    const result = await pool.query(query, values);
    res.json({ 
      message: 'Driver registered successfully', 
      driverId: result.rows[0].id,
      data: result.rows[0]
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
