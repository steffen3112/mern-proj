const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

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

// Serve static assets (client build folder) 
if(process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'))

        app.get('*', (req, res) => {
                res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
        })
}

app.listen(port, () => console.log(`Server started on port ${port}`))

