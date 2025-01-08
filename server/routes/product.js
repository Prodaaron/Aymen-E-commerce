const express = require('express');
const router = express.Router();
const db = require('../db/db.js'); // Use the database connection

// Fetch all products
router.get('/', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching products:', err.message);
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

module.exports = router;