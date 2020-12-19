// IMPORTS
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const {
  notFoundError,
  customErrorHandler,
} = require('./middleware/error.middleware')
const productRoute = require('./routes/product.route')

// CONFIG
dotenv.config()
connectDB()

// CONSTANTS
const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use('/api/products', productRoute)

// Handle page not found error
app.use(notFoundError)

// Replace for express default error handler
app.use(customErrorHandler)

app.listen(
  PORT,
  console.log(`${process.env.NODE_ENV} MODE SERVER OK @: ${PORT}`.yellow.bold)
)
