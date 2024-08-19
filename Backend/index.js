const express = require('express');
const app = express();
const mongoose = require('mongoose');

const mongouri = "jwalk.2de0t.mongodb.net:27017";



const port = 4000;
const productroutes = require('./routes/products');

// Middleware
app.use(express.json()); // Fixed usage of express.json
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/products', productroutes);

// Connect to MongoDB and start server
mongoose.connect(mongouri)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
