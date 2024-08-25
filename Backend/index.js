const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS middleware
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;

const productroutes = require('./routes/products');
const customertroutes = require('./routes/customer');

// Middleware
app.use(express.json()); // Fixed usage of express.json
app.use(cors()); // Enable CORS

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

mongoose.connect(MONGODB_URL, {})
.then(() => {
      console.log('Connected to MongoDB');
      app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
      });
    })
.catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Routes
app.use('/api/products', productroutes);
app.use('/api/customer', customertroutes); // Corrected route handler
