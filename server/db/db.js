const mysql = require('mysql');
require('dotenv').config(); // Load environment variables

// Create a database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT, // Optional: defaults to 3306
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    throw err;
  }
  console.log('Connected to the database.');
});

module.exports = db; // Export the connection to use in other files