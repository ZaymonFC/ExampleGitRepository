const express = require('express')
const path = require('path')

const app = express()
const port = 4200

// Setup Middleware and static serving
app.use(express.static(path.join(__dirname, './sockets/dist/sockets')))

