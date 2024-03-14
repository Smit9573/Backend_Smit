// Rquire Express
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Rquire Routes
const route = require('./route/index')

// Rquire Mongoose Connection 
const connection = require('./db/db')

// Rquire Cors
const cors = require('cors')
app.use(cors())

// Rquire Morgan
const morgan = require('morgan')
app.use(morgan('dev'))

// Rquire dotenv
require('dotenv').config

app.use("/api", route)
const dbConection = async () => {
    await connection
    app.listen(process.env.PORT || 3000,()=>{console.log("server is running");})
}

dbConection()



