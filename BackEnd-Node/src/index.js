require('dotenv').config()
const PORT = process.env.PORT || 4000;
const cors = require('cors')

const express = require("express");
const usersRoutes = require('./routes/users.js')
const productsRoutes = require('./routes/product.js')
const middlewareLogRequest = require('./middleware/logs.js')
const authMiddleware = require('./middleware/auth.js');
const app = express();
app.use(cors()) 

// middleware
app.use(middlewareLogRequest)
app.use(express.json());

// Endpoints
app.use('/api/v1/users/', usersRoutes);
app.use('/api/v1/products/', authMiddleware, productsRoutes);


app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
})