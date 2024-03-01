const express = require('express')
const app = express()
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const PORT = process.env.PORT || 8000;

// Always require and configure near the top
require('dotenv').config()

// Connect to the database
require('./config/database')

app.use(express.json())
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))

// Configure both serve-favicon & statuc middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))

app.use(express.static('public'))

// for react router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

app.listen(PORT, () => {
	console.log('App is listening on PORT ' + PORT)
})

module.exports = app