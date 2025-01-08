const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/products'); // Import product routes

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON from the frontend

// Use modular routes for products
app.use('/products', productRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
