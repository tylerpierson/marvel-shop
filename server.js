const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

// Always require and configure near the top
require('dotenv').config()

const app = express()

app.use(logger('dev'))
app.use(express.json())

// Configure both serve-favicon & statuc middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))