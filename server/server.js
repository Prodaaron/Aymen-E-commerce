const express = require('express');
const cors = require('cors');
const db = require('./db/db.js'); // Import the database connection
const productRoutes = require('./routes/products');


const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON from the frontend
app.use('/products', productRoutes);


// Example route for fetching products
app.get('/products', (req, res) => {
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

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});