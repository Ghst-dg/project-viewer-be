const express = require('express')
const mongoose = require('mongoose')
const color = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/middleware')
const port = process.env.PORT || 5000
connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/projects', require('./routes/projectRoutes'))
app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`));