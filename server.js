const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

const app = express()

// Bodyparser Middleware
app.use(bodyParser.json())

// MongoDB Config
const db = require('./config/keys').mongoURI

// Connect to mongoDb
mongoose.connect(db)
        .then( () => console.log('Remote Mongo DB Connected'))
        .catch( error => console.log(error))

const port = process.env.PORT || 5000

// Use routes
app.use('/api/items', items)

app.listen(port, () => console.log(`Server started on port ${port}`))

