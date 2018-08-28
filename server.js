const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const items = require('./routes/api/items')

const app = express()

// Bodyparser Middleware
app.use(bodyParser.json())

// MongoDB
const db = 'mongodb://mongo:27017/docker-node-mongo'

// Connect to mongoDb
mongoose.connect(db, { useNewUrlParser: true })
        .then( () => console.log('Containerized Mongo DB Connected'))
        .catch( error => console.log(error))

const port = process.env.PORT || 5000
// Add headers
app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
        next();
    });

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

